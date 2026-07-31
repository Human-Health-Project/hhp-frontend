import { useEffect, useState } from "react";
import "./CommunityVoices.css";
import { fetchApprovedComments, MOCK_COMMENTS } from "../services/comments";

// Builds the attribution line from context, since the survey is anonymous
// (no name is collected). e.g. "Patient · Mental health"
function buildAttribution({ describes, healthArea }) {
  return [describes, healthArea].filter(Boolean).join(" · ");
}

// Reusable comment card
const CommentCard = ({ comment, describes, healthArea, council, date }) => {
  const attribution = buildAttribution({ describes, healthArea });
  return (
    <figure className="voice-card">
      <blockquote className="voice-card__quote">{comment}</blockquote>
      <figcaption className="voice-card__meta">
        {attribution && <span className="voice-card__attribution">{attribution}</span>}
        <span className="voice-card__sub">
          {[council, date].filter(Boolean).join(" · ")}
        </span>
      </figcaption>
    </figure>
  );
};

export default function CommunityVoices() {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    let active = true;
    fetchApprovedComments()
      .then((data) => {
        if (!active) return;
        setComments(data);
        setStatus("ready");
      })
      .catch((err) => {
        if (!active) return;
        console.error("[CommunityVoices]", err);
        // Degrade gracefully to sample data rather than showing a broken page.
        setComments(MOCK_COMMENTS);
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="section">
      <div className="container">
        <header className="voices-header">
          <h1 className="voices-header__title">Community Voices</h1>
          <p className="voices-header__description">
            Real, approved responses from our community healthcare survey. These are
            shared anonymously to help highlight the challenges people face and what
            would help most.
          </p>
        </header>

        {status === "loading" && (
          <p className="voices-state">Loading community voices…</p>
        )}

        {status === "error" && (
          <p className="voices-state voices-state--error">
            We couldn&apos;t load the latest responses just now — showing sample entries below.
          </p>
        )}

        {status !== "loading" && comments.length === 0 && (
          <p className="voices-state">No approved responses to show yet. Check back soon.</p>
        )}

        {comments.length > 0 && (
          <section className="voices-grid">
            {comments.map((c, index) => (
              <CommentCard key={index} {...c} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
