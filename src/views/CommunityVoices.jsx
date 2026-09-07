import "./CommunityVoices.css";
import sampleStories from "@/data/sampleStories";
import heroImage from "@/assets/community-voices/hero.jpg";

// Note: the character after "zRwy" is an uppercase i, not a lowercase L.
// The two are indistinguishable in most fonts and the ticket had the wrong one
// (that variant 404s). Take care when copying this by hand.
const SHARE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd7_PGefOLIFWZTUQt8Jm-zRwyI3uidrEVFMZGLxMdG0V504A/viewform";

export default function CommunityVoices() {
  return (
    <div className="cv-page">
      {/* ========= HERO ========= */}
      <section className="cv-hero">
        <div className="cv-container">
          {/*
            The hero artwork has the heading, intro copy and both buttons baked
            into it. The two <a> elements below are transparent hotspots layered
            exactly over the drawn buttons, positioned as percentages so they
            track the image at any width. If the artwork is ever replaced, the
            --cv-hit-* values in the CSS are the only things to re-measure.

            Below 768px the drawn buttons are too small to tap reliably, so the
            hotspots are hidden and the real buttons underneath take over.
          */}
          <div className="cv-hero-figure">
            <img
              src={heroImage.src}
              alt="Community Voices — read real and anonymous stories about screenings, symptom recognition, and healthy lifestyle changes. Each story invites its reader, perhaps you or a loved one, to feel a little more supported and empowered to take action."
              className="cv-hero-img"
              width={heroImage.width}
              height={heroImage.height}
              priority="true"
            />

            <a
              href="#stories"
              className="cv-hotspot cv-hotspot-read"
              aria-label="Read a story"
            >
              <span className="cv-sr-only">Read a story</span>
            </a>

            <a
              href={SHARE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-hotspot cv-hotspot-share"
              aria-label="Share a story — opens a Google Form in a new tab"
            >
              <span className="cv-sr-only">Share a story</span>
            </a>
          </div>

          {/* Visible buttons for small screens, where the drawn ones are
              too small to be a reliable tap target. */}
          <div className="cv-hero-actions">
            <a href="#stories" className="cv-btn cv-btn-primary">
              Read a Story
            </a>
            <a
              href={SHARE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn cv-btn-secondary"
            >
              Share a Story
            </a>
          </div>
        </div>
      </section>

      {/* ========= STORIES ========= */}
      <section className="cv-stories-section" id="stories">
        <div className="cv-container">
          <div className="cv-stories-intro">
            <p className="cv-eyebrow">Community Voices</p>
            <h2 className="cv-stories-title">Real Stories. Shared to Help You.</h2>
            <p className="cv-stories-lede">
              Members of our community share the moments that changed their
              health journeys — anonymously, in their own words — so that no one
              has to navigate alone. Tap a story to read it in full.
            </p>
          </div>

          <div className="cv-stories-card">
            {sampleStories.map((story) => (
              <details className="cv-story" key={story.id} id={story.id}>
                <summary className="cv-story-summary">
                  <span className="cv-story-tags">
                    {story.tags.join(" · ")}
                  </span>

                  <h3 className="cv-story-title">{story.title}</h3>

                  <p className="cv-story-quote">“{story.quote}”</p>

                  <span className="cv-story-toggle">
                    <span className="cv-toggle-closed">Read the full story</span>
                    <span className="cv-toggle-open">Hide the full story</span>
                  </span>
                </summary>

                <div className="cv-story-body">
                  {[
                    { label: "The Setup", paragraphs: story.setup },
                    { label: "The Turning Point", paragraphs: story.turningPoint },
                    { label: "The Wisdom", paragraphs: story.wisdom },
                  ].map((part) => (
                    <div className="cv-story-part" key={part.label}>
                      <p className="cv-part-label">{part.label}</p>
                      {part.paragraphs.map((paragraph, i) => (
                        <p className="cv-part-text" key={i}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ))}

            {/* ========= SHARE CTA ========= */}
            <div className="cv-share-cta">
              <p className="cv-share-title">
                Do you have a story that could help someone else?
              </p>
              <p className="cv-share-text">
                Your experience — shared anonymously — could be the turning
                point in another person’s journey.
              </p>
              <a
                href={SHARE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-share-link"
              >
                Share your story with Human Health Project →
              </a>
            </div>

            <p className="cv-disclaimer">
              All stories are shared anonymously with the consent of their
              authors. These are personal experiences, not medical advice.
              Please consult a qualified healthcare professional about your own
              health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
