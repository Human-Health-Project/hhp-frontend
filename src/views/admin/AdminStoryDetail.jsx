"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { formatDate, toParagraphs } from "@/services/stories";
import AdminGuard, { AdminMessage, AdminProblem } from "@/components/admin/AdminGuard";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import StatusBadge from "@/components/admin/StatusBadge";
import "./Admin.css";

const STAGES = [
  { key: "setup", label: "The Setup" },
  { key: "turningPoint", label: "The Turning Point" },
  { key: "wisdom", label: "The Wisdom" },
];

const parseTags = (text) => [
  ...new Set(text.split(",").map((tag) => tag.trim()).filter(Boolean)),
];

const detailsFrom = (story) => ({
  title: story.title || "",
  tags: (story.tags || []).join(", "),
  quote: story.quote || "",
});

function StoryDetail({ id }) {
  const { currentUser } = useAuth();
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({ title: "", tags: "", quote: "" });
  const [titleError, setTitleError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [busy, setBusy] = useState(null); // "approve" | "reject" | null
  const [actionError, setActionError] = useState("");
  const [notice, setNotice] = useState(null); // "approved" | "rejected" | null
  const titleRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const token = await currentUser.getIdToken();
        const payload = await api.admin.getStory(token, id);
        if (cancelled) return;
        setStory(payload.data);
        setDetails(detailsFrom(payload.data));
      } catch (err) {
        if (!cancelled) setError(err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [currentUser, id]);

  if (error) return <AdminProblem error={error} />;
  if (!story) return <AdminMessage title="Loading story…" />;

  const published = story.status === "approved";

  const updateDetail = (event) => {
    const { name, value } = event.target;
    setDetails((previous) => ({ ...previous, [name]: value }));
    if (name === "title" && value.trim()) setTitleError("");
  };

  const startApprove = () => {
    setNotice(null);
    setActionError("");
    if (!details.title.trim()) {
      setTitleError("Add a title before publishing. It’s the heading readers see on Community Voices.");
      titleRef.current?.focus();
      return;
    }
    setConfirmOpen(true);
  };

  const approve = async () => {
    setBusy("approve");
    setActionError("");
    try {
      const token = await currentUser.getIdToken();
      const payload = await api.admin.approveStory(token, story.id, {
        title: details.title.trim(),
        tags: parseTags(details.tags),
        quote: details.quote.trim() || null,
      });
      setStory(payload.data);
      setDetails(detailsFrom(payload.data));
      setConfirmOpen(false);
      setNotice("approved");
    } catch (err) {
      setActionError(err.message || "The story could not be published. Please try again.");
    } finally {
      setBusy(null);
    }
  };

  const reject = async () => {
    setNotice(null);
    setActionError("");
    setBusy("reject");
    try {
      const token = await currentUser.getIdToken();
      const payload = await api.admin.rejectStory(token, story.id);
      setStory(payload.data);
      setNotice("rejected");
    } catch (err) {
      setActionError(err.message || "The story could not be rejected. Please try again.");
    } finally {
      setBusy(null);
    }
  };

  return (
    <>
      <Link href="/admin/stories" className="adm-back">← All stories</Link>

      <header className="adm-header adm-header--detail">
        <div className="adm-headerRow">
          <h1 className="adm-title">{story.title || `Untitled story #${story.id}`}</h1>
          <StatusBadge status={story.status} />
        </div>
        <p className="adm-meta">
          Submitted {formatDate(story.submittedAt)}
          {story.reviewedAt && <> · Reviewed {formatDate(story.reviewedAt)}</>}
        </p>
      </header>

      {notice === "approved" && (
        <p className="adm-notice adm-notice--success" role="status">
          Story published. It’s now on the{" "}
          <a href={`/what-we-do/community-voices#${story.slug || `story-${story.id}`}`}>Community Voices page</a>.
        </p>
      )}
      {notice === "rejected" && (
        <p className="adm-notice" role="status">
          Story rejected. It won’t appear on Community Voices.
        </p>
      )}

      <section className="adm-card" aria-label="Story">
        {STAGES.map(({ key, label }) => (
          <div className="adm-stage" key={key}>
            <h2 className="adm-stageLabel">{label}</h2>
            {toParagraphs(story[key]).map((paragraph, index) => (
              <p className="adm-stageText" key={index}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>

      {(story.mediaLink || story.contactEmail) && (
        <section className="adm-card adm-card--private" aria-labelledby="adm-private-title">
          <h2 id="adm-private-title" className="adm-cardTitle">From the submitter (never published)</h2>
          {story.mediaLink && (
            <p className="adm-field">
              <span className="adm-fieldLabel">Video or audio link</span>
              <a href={story.mediaLink} target="_blank" rel="noopener noreferrer nofollow">
                {story.mediaLink}
              </a>
            </p>
          )}
          {story.contactEmail && (
            <p className="adm-field">
              <span className="adm-fieldLabel">Confidential contact</span>
              <a href={`mailto:${story.contactEmail}`}>{story.contactEmail}</a>
            </p>
          )}
        </section>
      )}

      <section className="adm-card" aria-labelledby="adm-publish-title">
        <h2 id="adm-publish-title" className="adm-cardTitle">Publishing details</h2>
        <p className="adm-hint">
          {published
            ? "This is how the story appears on Community Voices."
            : "The form doesn’t ask for these. Add them so the story displays like the others on Community Voices."}
        </p>

        <label className="adm-label" htmlFor="adm-title">
          Title <span className="adm-required">*</span>
        </label>
        <input
          ref={titleRef}
          id="adm-title"
          name="title"
          className="adm-input"
          value={details.title}
          onChange={updateDetail}
          readOnly={published}
          maxLength={150}
          aria-invalid={titleError ? "true" : undefined}
          aria-describedby={titleError ? "adm-title-error" : undefined}
        />
        {titleError && <p id="adm-title-error" className="adm-fieldError">{titleError}</p>}

        <label className="adm-label" htmlFor="adm-tags">Topic tags</label>
        <input
          id="adm-tags"
          name="tags"
          className="adm-input"
          value={details.tags}
          onChange={updateDetail}
          readOnly={published}
          placeholder="e.g. Caregiving, Type 2 Diabetes"
          aria-describedby="adm-tags-hint"
        />
        <p id="adm-tags-hint" className="adm-hint">Separate tags with commas.</p>

        <label className="adm-label" htmlFor="adm-quote">Pull-quote</label>
        <textarea
          id="adm-quote"
          name="quote"
          className="adm-input adm-textarea"
          rows={3}
          value={details.quote}
          onChange={updateDetail}
          readOnly={published}
          maxLength={300}
          aria-describedby="adm-quote-hint"
        />
        <p id="adm-quote-hint" className="adm-hint">
          A sentence from the story, shown before the reader opens it. Optional.
        </p>
      </section>

      {actionError && !confirmOpen && <p className="adm-alert" role="alert">{actionError}</p>}

      <div className="adm-actions">
        {story.status !== "rejected" && (
          <button type="button" className="adm-button adm-button--danger" onClick={reject} disabled={Boolean(busy)}>
            {busy === "reject" ? "Rejecting…" : published ? "Unpublish (reject)" : "Reject"}
          </button>
        )}
        {!published && (
          <button type="button" className="adm-button adm-button--primary" onClick={startApprove} disabled={Boolean(busy)}>
            Approve
          </button>
        )}
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="Publish this story?"
        confirmLabel="Yes, publish"
        cancelLabel="No, cancel"
        busy={busy === "approve"}
        busyLabel="Publishing…"
        error={confirmOpen ? actionError : ""}
        onConfirm={approve}
        onCancel={() => {
          setConfirmOpen(false);
          setActionError("");
        }}
      >
        <p>Are you happy to publish this story?</p>
        <p>
          “{details.title.trim()}” will appear on the Community Voices page for anyone to read.
        </p>
      </ConfirmDialog>
    </>
  );
}

function StoryFromUrl() {
  const id = useSearchParams().get("id");

  if (!id || !/^[A-Za-z0-9-]+$/.test(id)) return <AdminProblem error={{ status: 404 }} />;
  return <StoryDetail id={id} />;
}

export default function AdminStoryDetail() {
  return (
    <div className="adm-page">
      <div className="adm-container">
        <AdminGuard>
          <StoryFromUrl />
        </AdminGuard>
      </div>
    </div>
  );
}
