import "./CommunityVoicesHero.css";
import heroImage from "@/assets/community-voices/hero.jpg";

export const SHARE_FORM_URL =
  // Note: the character after "zRwy" is an uppercase i, not a lowercase L.
  // The two are indistinguishable in most fonts and the ticket had the wrong
  // one (that variant 404s). Take care when copying this by hand.
  "https://docs.google.com/forms/d/e/1FAIpQLSd7_PGefOLIFWZTUQt8Jm-zRwyI3uidrEVFMZGLxMdG0V504A/viewform";

/**
 * The Community Voices banner — artwork plus its two calls to action.
 *
 * The heading, intro copy and both buttons are baked into the image, so the
 * two links below are transparent hotspots layered exactly over the drawn
 * buttons, positioned as percentages so they track the image at any width.
 * Below 768px the drawn buttons fall under the 44px minimum tap target, so
 * the hotspots are hidden and the visible buttons underneath take over.
 *
 * Both links are plain <a> elements rather than next/link. They need to work
 * whether or not the page has hydrated, and an ordinary anchor handles both
 * an in-page anchor and a route without any JavaScript involved.
 *
 * @param {string} readHref  Where "Read a story" goes. On the Community
 *   Voices page this is "#stories" (scrolls to the list); everywhere else it
 *   should be the route to that page.
 */
export default function CommunityVoicesHero({
  readHref = "/what-we-do/community-voices",
}) {
  return (
    <section className="cvh">
      <div className="cvh-container">
        <div className="cvh-figure">
          <img
            src={heroImage.src}
            alt="Community Voices — read real and anonymous stories about screenings, symptom recognition, and healthy lifestyle changes. Each story invites its reader, perhaps you or a loved one, to feel a little more supported and empowered to take action."
            className="cvh-img"
            width={heroImage.width}
            height={heroImage.height}
          />

          <a
            href={readHref}
            className="cvh-hotspot cvh-hotspot-read"
            aria-label="Read a story"
          >
            <span className="cvh-sr-only">Read a story</span>
          </a>

          <a
            href={SHARE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cvh-hotspot cvh-hotspot-share"
            aria-label="Share a story — opens a Google Form in a new tab"
          >
            <span className="cvh-sr-only">Share a story</span>
          </a>
        </div>

        {/* Visible buttons for small screens, where the drawn ones are too
            small to be a reliable tap target. */}
        <div className="cvh-actions">
          <a href={readHref} className="cvh-btn cvh-btn-primary">
            Read a Story
          </a>
          <a
            href={SHARE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cvh-btn cvh-btn-secondary"
          >
            Share a Story
          </a>
        </div>
      </div>
    </section>
  );
}
