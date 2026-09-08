import "./CommunityVoices.css";
import sampleStories from "@/data/sampleStories";
import CommunityVoicesHero, { SHARE_FORM_URL } from "@/components/CommunityVoicesHero";


export default function CommunityVoices() {
  return (
    <div className="cv-page">
      <CommunityVoicesHero readHref="#stories" />

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
