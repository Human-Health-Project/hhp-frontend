import "./CommunityVoices.css";
import CommunityVoicesHero, { SHARE_STORY_HREF } from "@/components/CommunityVoicesHero";
import CommunityStories from "@/components/CommunityStories";

export default function CommunityVoices({ initialStories }) {
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
            <CommunityStories initialStories={initialStories} />

            {/* ========= SHARE CTA ========= */}
            <div className="cv-share-cta">
              <p className="cv-share-title">
                Do you have a story that could help someone else?
              </p>
              <p className="cv-share-text">
                Your experience — shared anonymously — could be the turning
                point in another person’s journey.
              </p>
              <a href={SHARE_STORY_HREF} className="cv-share-link">
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
