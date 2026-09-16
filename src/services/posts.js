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

// Map an API post (list item or detail) into new shape
function normalizePost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    author: post.author,
    publishedAt: formatPublishedDate(post.published_at),
    timestamp: toDate(post.published_at).getTime(),
    featuredImage: post.featured_image,
    categories: (post.categories || []).map((c) => c.name),
    content: post.content || "",
    paragraphs: splitParagraphs(post.content),
  };
}

// ---- functions the pages call -------------------------------------

let allPostsPromise;

async function loadAllPosts() {
  const posts = [];

  for (let page = 1; ; page++) {
    const json = await getJson(
      `/posts?page=${page}&per_page=100&include_content=1`,
    );
    posts.push(...json.data);
    if (page >= json.meta.last_page) break;
  }

  return posts.map(normalizePost);
}

export function getAllPosts() {
  allPostsPromise ??= loadAllPosts();
  return allPostsPromise;
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
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
