import sampleStories from "@/data/sampleStories";
import { api } from "./api";
import { publishedStoriesFrom } from "./stories";

/**
 * Stories for the build-time HTML of the Community Voices page. Falls back to
 * the stories already published on the site if the API is unreachable or has
 * none yet, so a backend outage never empties the page.
 */
export async function getPublishedStories() {
  try {
    const payload = await api.getPublishedStories({ signal: AbortSignal.timeout(8000) });
    return publishedStoriesFrom(payload) || sampleStories;
  } catch {
    return sampleStories;
  }
}
