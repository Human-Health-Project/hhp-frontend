#!/usr/bin/env node
/**
 * Local mock of the Community Voices API (docs/community-voices-api.md), so
 * the Share a story form and the admin pages can be built and tested before
 * the Laravel endpoints exist. No dependencies; data lives in memory and
 * resets on restart.
 *
 *   npm run mock:api                       # listens on http://localhost:4010
 *   NEXT_PUBLIC_API_URL=http://localhost:4010/api npm run dev
 *
 * Any signed-in user counts as an admin here. Start it with MOCK_ADMIN=0 to
 * see what a signed-in non-admin gets (403).
 *
 * Only the story endpoints and /auth/session + /auth/logout (so login works)
 * are mocked; every other endpoint returns 404.
 */
import http from "node:http";
import sampleStories from "../src/data/sampleStories.js";

const PORT = Number(process.env.PORT || 4010);
const ADMIN = process.env.MOCK_ADMIN !== "0";

const now = () => new Date().toISOString();
const daysAgo = (days) => new Date(Date.now() - days * 86400000).toISOString();

let nextId = 1;
const stories = [];

// The stories already on the site, as the backend should seed them.
for (const [index, story] of sampleStories.entries()) {
  stories.push({
    id: nextId++,
    slug: story.id,
    status: "approved",
    setup: story.setup.join("\n\n"),
    turningPoint: story.turningPoint.join("\n\n"),
    wisdom: story.wisdom.join("\n\n"),
    mediaLink: null,
    contactEmail: null,
    title: story.title,
    tags: story.tags,
    quote: story.quote,
    submittedAt: daysAgo(60 + index),
    reviewedAt: daysAgo(59 + index),
    publishedAt: daysAgo(59 + index),
  });
}

// Two obviously fake submissions waiting for review.
stories.push(
  {
    id: nextId++,
    slug: null,
    status: "pending",
    setup: "MOCK SUBMISSION. For months I kept getting headaches and assumed it was screen time.\n\nI did not know who to ask.",
    turningPoint: "MOCK SUBMISSION. A pharmacist suggested I get my blood pressure checked.",
    wisdom: "MOCK SUBMISSION. Get the simple checks done early. They are quick and they matter.",
    mediaLink: "https://drive.google.com/file/d/mock-example/view",
    contactEmail: "mock.submitter@example.com",
    title: null,
    tags: [],
    quote: null,
    submittedAt: daysAgo(2),
    reviewedAt: null,
    publishedAt: null,
  },
  {
    id: nextId++,
    slug: null,
    status: "pending",
    setup: "MOCK SUBMISSION. I was told my symptoms were just stress.",
    turningPoint: "MOCK SUBMISSION. A second opinion changed everything.",
    wisdom: "MOCK SUBMISSION. Trust what your body is telling you.",
    mediaLink: null,
    contactEmail: null,
    title: null,
    tags: [],
    quote: null,
    submittedAt: daysAgo(1),
    reviewedAt: null,
    publishedAt: null,
  },
);

const publicFields = ({ id, slug, title, tags, quote, setup, turningPoint, wisdom, publishedAt }) =>
  ({ id, slug, title, tags, quote, setup, turningPoint, wisdom, publishedAt });

const slugify = (text) => {
  const base = String(text).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "story";
  let slug = base;
  for (let n = 2; stories.some((story) => story.slug === slug); n++) slug = `${base}-${n}`;
  return slug;
};

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  });
  res.end(body === undefined ? "" : JSON.stringify(body));
}

const invalid = (res, errors) =>
  send(res, 422, { message: Object.values(errors)[0][0], errors });

async function readJson(req) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return null;
  }
}

const isUrl = (value) => {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
};

function validateSubmission(body) {
  const errors = {};
  for (const field of ["setup", "turningPoint", "wisdom"]) {
    const value = typeof body[field] === "string" ? body[field].trim() : "";
    if (!value) errors[field] = ["Please answer this question."];
    else if (value.length > 10000) errors[field] = ["Please keep this answer under 10,000 characters."];
  }
  if (body.mediaLink && !isUrl(body.mediaLink)) errors.mediaLink = ["Please enter a full link starting with https://"];
  if (body.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.contactEmail)) errors.contactEmail = ["Please enter a valid email address."];
  for (const field of ["consentAnonymity", "agreeTerms", "agreePublicSharing", "agreeNotMedicalAdvice"]) {
    if (body[field] !== true) errors[field] = ["This confirmation is required."];
  }
  return errors;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const path = url.pathname.replace(/\/+$/, "");
  const method = req.method;
  console.log(method, url.pathname + url.search);

  if (method === "OPTIONS") return send(res, 204);

  // Login and logout call these; accept any token.
  if (method === "POST" && (path === "/api/auth/session" || path === "/api/auth/logout")) {
    return send(res, 200, { message: "ok" });
  }

  if (path === "/api/stories" && method === "GET") {
    const published = stories
      .filter((story) => story.status === "approved")
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map(publicFields);
    return send(res, 200, { data: published });
  }

  if (path === "/api/stories" && method === "POST") {
    const body = await readJson(req);
    if (!body) return send(res, 400, { message: "Invalid JSON." });
    // Honeypot: a real visitor never fills this hidden field. Pretend success.
    if (body.website) return send(res, 201, { data: { id: 0, status: "pending" } });
    const errors = validateSubmission(body);
    if (Object.keys(errors).length) return invalid(res, errors);
    const story = {
      id: nextId++,
      slug: null,
      status: "pending",
      setup: body.setup.trim(),
      turningPoint: body.turningPoint.trim(),
      wisdom: body.wisdom.trim(),
      mediaLink: body.mediaLink || null,
      contactEmail: body.contactEmail || null,
      title: null,
      tags: [],
      quote: null,
      submittedAt: now(),
      reviewedAt: null,
      publishedAt: null,
    };
    stories.push(story);
    return send(res, 201, { data: { id: story.id, status: story.status } });
  }

  const admin = path.match(/^\/api\/admin\/stories(?:\/(\d+))?(?:\/(approve|reject))?$/);
  if (admin) {
    if (!/^Bearer \S+/.test(req.headers.authorization || "")) return send(res, 401, { message: "Please log in." });
    if (!ADMIN) return send(res, 403, { message: "This account does not have admin access." });

    const [, id, action] = admin;
    if (!id && method === "GET") {
      const status = url.searchParams.get("status");
      const list = stories
        .filter((story) => !status || story.status === status)
        .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
      return send(res, 200, { data: list });
    }

    const story = stories.find((candidate) => candidate.id === Number(id));
    if (!story) return send(res, 404, { message: "Story not found." });

    if (!action && method === "GET") return send(res, 200, { data: story });

    if (action === "approve" && method === "POST") {
      const body = (await readJson(req)) || {};
      const title = typeof body.title === "string" ? body.title.trim() : "";
      if (!title) return invalid(res, { title: ["Add a title before publishing."] });
      story.title = title;
      story.tags = Array.isArray(body.tags) ? body.tags.map(String).map((tag) => tag.trim()).filter(Boolean) : [];
      story.quote = typeof body.quote === "string" && body.quote.trim() ? body.quote.trim() : null;
      story.slug = story.slug || slugify(title);
      story.status = "approved";
      story.reviewedAt = now();
      story.publishedAt = story.publishedAt || now();
      return send(res, 200, { data: story });
    }

    if (action === "reject" && method === "POST") {
      story.status = "rejected";
      story.reviewedAt = now();
      return send(res, 200, { data: story });
    }
  }

  return send(res, 404, { message: "Not found (mock API only implements Community Voices)." });
});

server.listen(PORT, () => {
  console.log(`Mock Community Voices API on http://localhost:${PORT}/api (admin: ${ADMIN ? "yes" : "no"})`);
});
