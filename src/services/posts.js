const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://hhp-backend-production-l2iqny.laravel.cloud/api";

async function getJson(path) {
  const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 3600 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Blog API request failed (${res.status})`);
  return res.json();
}

// ---- helper functions ------------------------------------------------

// Replace space in date to make it an official date standard
function toDate(raw) {
  return new Date(raw.replace(" ", "T"));
}

// Format the API's date for display.
function formatPublishedDate(raw) {
  return toDate(raw).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

//split content into paragraphs from /n/n
function splitParagraphs(content) {
  if (!content) return [];
  return content.split("\n\n");
}

// Shown when a post has no featured_image
const DEFAULT_BLOG_IMAGE =
  "https://humanhealthproject.org/wp-content/uploads/2022/05/Screen-Shot-2018-09-20-at-11.57.15-PM-1.png";

// Map an API post (list item or detail) into new shape
function normalizePost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    author: post.author,
    publishedAt: formatPublishedDate(post.published_at),
    timestamp: toDate(post.published_at).getTime(),
    featuredImage: post.featured_image || DEFAULT_BLOG_IMAGE,
    categories: (post.categories || []).map((c) => c.name),
  };
}

// ---- functions the pages call -------------------------------------

export async function getAllPosts() {
  const posts = [];

  for (let page = 1; ; page++) {
    const json = await getJson(`/posts?page=${page}`);
    if (json.data.length === 0) break;
    posts.push(...json.data);
  }

  return posts.map(normalizePost);
}

export function extractCategories(posts) {
  const names = new Set();
  for (const post of posts) {
    for (const name of post.categories) {
      names.add(name);
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

export async function getPostBySlug(slug) {
  const json = await getJson(`/posts/${slug}`);
  if (!json) return null;

  return {
    ...normalizePost(json.data),
    content: json.data.content,
    paragraphs: splitParagraphs(json.data.content),
  };
}
