/**
 * Community Voices story helpers, shared by the public page and the admin
 * pages. The API sends each story stage as one string with paragraphs
 * separated by a blank line; the views render one <p> per paragraph.
 */

export const STATUS_LABELS = {
  pending: "Pending review",
  approved: "Approved",
  rejected: "Rejected",
};

export function toParagraphs(text) {
  if (Array.isArray(text)) return text.filter(Boolean);
  return String(text || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function formatDate(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

// An approved story from GET /stories, in the shape the Community Voices view
// renders (the same shape as src/data/sampleStories.js).
function toPublishedStory(story) {
  return {
    id: story.slug || `story-${story.id}`,
    tags: Array.isArray(story.tags) ? story.tags.filter(Boolean) : [],
    title: story.title || "",
    quote: story.quote || "",
    setup: toParagraphs(story.setup),
    turningPoint: toParagraphs(story.turningPoint),
    wisdom: toParagraphs(story.wisdom),
  };
}

/**
 * The published stories in an API response, or null when there are none.
 * Null means "keep what is already on the page": until the backend has the
 * existing stories seeded, an empty list must not wipe the page.
 */
export function publishedStoriesFrom(payload) {
  const list = Array.isArray(payload?.data) ? payload.data : [];
  const stories = list.map(toPublishedStory).filter((story) => story.title && story.setup.length);
  return stories.length ? stories : null;
}
