"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/services/api";
import { formatDate, toParagraphs } from "@/services/stories";
import AdminGuard, { AdminMessage, AdminProblem } from "@/components/admin/AdminGuard";
import StatusBadge from "@/components/admin/StatusBadge";
import "./Admin.css";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending review" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

function excerpt(text, length = 180) {
  const first = toParagraphs(text)[0] || "";
  return first.length > length ? `${first.slice(0, length).trimEnd()}…` : first;
}

function StoriesList() {
  const { currentUser } = useAuth();
  const [stories, setStories] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  // Keep the chosen filter in the URL (?status=pending) so that coming back
  // from a story returns to the same view.
  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("status");
    if (FILTERS.some((option) => option.value === status)) setFilter(status);
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const token = await currentUser.getIdToken();
        const payload = await api.admin.listStories(token);
        if (!cancelled) setStories(Array.isArray(payload?.data) ? payload.data : []);
      } catch (err) {
        if (!cancelled) setError(err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [currentUser]);

  const chooseFilter = (value) => {
    setFilter(value);
    const url = value === "all" ? window.location.pathname : `${window.location.pathname}?status=${value}`;
    window.history.replaceState(null, "", url);
  };

  if (error) return <AdminProblem error={error} />;
  if (!stories) return <AdminMessage title="Loading stories…" />;

  const counts = Object.fromEntries(
    FILTERS.map(({ value }) => [
      value,
      value === "all" ? stories.length : stories.filter((story) => story.status === value).length,
    ]),
  );
  const shown = [...stories]
    .filter((story) => filter === "all" || story.status === filter)
    .sort((a, b) => String(b.submittedAt).localeCompare(String(a.submittedAt)));

  return (
    <>
      <header className="adm-header">
        <p className="adm-eyebrow">Admin</p>
        <h1 className="adm-title">Community Voices stories</h1>
        <p className="adm-lede">
          Stories sent through Share a story. Open one to read it in full, then approve or
          reject it. Approved stories appear on the Community Voices page.
        </p>
      </header>

      <div className="adm-filters" role="group" aria-label="Show stories by status">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className="adm-filter"
            aria-pressed={filter === value}
            onClick={() => chooseFilter(value)}
          >
            {label} <span className="adm-count">{counts[value]}</span>
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="adm-empty">No stories here.</p>
      ) : (
        <ul className="adm-list">
          {shown.map((story) => (
            <li key={story.id} className="adm-listItem">
              <div className="adm-listMain">
                <Link href={`/admin/stories/view?id=${story.id}`} className="adm-storyLink">
                  {story.title || `Untitled story #${story.id}`}
                </Link>
                <p className="adm-excerpt">{excerpt(story.setup)}</p>
                <p className="adm-meta">Submitted {formatDate(story.submittedAt)}</p>
              </div>
              <StatusBadge status={story.status} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function AdminStories() {
  return (
    <div className="adm-page">
      <div className="adm-container">
        <AdminGuard>
          <StoriesList />
        </AdminGuard>
      </div>
    </div>
  );
}
