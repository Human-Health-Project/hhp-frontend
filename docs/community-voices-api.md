# Community Voices API (Share a story)

What the frontend expects from the Laravel backend for Share a story and the
admin review pages. The frontend is built and tested against this contract
(`npm run mock:api` serves a working copy of it; see the end of this file).

## The flow

1. A visitor fills in **Share a story** (`/what-we-do/community-voices/share`),
   which replaces the Google Form. The story is stored as `pending`.
2. An admin signs in with Firebase and opens **`/admin/stories`**. This page
   lists every story with its status. Opening one
   (`/admin/stories/view?id=12`) shows the full story with **Approve** and
   **Reject** buttons.
3. Approve asks *"Are you happy to publish this story?"* (Yes / No). On Yes,
   the story becomes `approved` and appears on **Community Voices**
   (`/what-we-do/community-voices`). Reject makes it `rejected`. Either decision
   can be reversed later.

The form does not collect a title, topic tags or a pull-quote, but the Community
Voices cards show all three. The admin adds them when approving.

## Conventions

- JSON field names are **camelCase**, the same as the existing
  `/intern-with-us` and `/volunteer-with-us` request bodies.
- Dates are **ISO 8601 with an offset**, e.g. `2026-11-08T18:48:00+00:00`. A
  value like `2026-11-08 18:48:00` is an Invalid Date in Safari (the same
  issue found in the blog API).
- Story text is **plain text**. Paragraphs are separated by a blank line
  (`\n\n`). Store what the visitor typed. Don't convert it to HTML, because
  the frontend escapes everything it renders.
- Errors use Laravel's standard shape: `{ "message": "...", "errors": { "field": ["..."] } }`.
  The form shows `errors.<field>[0]` under that field, so the keys must be
  the camelCase request names below.

## Table: `stories`

| Column | Type | Notes |
|---|---|---|
| `id` | bigint, PK | |
| `status` | enum `pending`, `approved`, `rejected` | default `pending`, indexed |
| `setup` | text | required, max 10,000 chars |
| `turning_point` | text | required, max 10,000 chars |
| `wisdom` | text | required, max 10,000 chars |
| `media_link` | varchar(2048), null | http(s) URL. Admin-only, never public |
| `contact_email` | varchar(255), null | Admin-only, never public |
| `consent_anonymity`, `agree_terms`, `agree_public_sharing`, `agree_not_medical_advice` | boolean | all must be true to submit. Kept as a consent record |
| `title` | varchar(150), null | set on approve |
| `slug` | varchar(170), unique, null | made from the title on first approve, then never changed (it's the public anchor, e.g. `#a-daughter-becomes-her-fathers-advocate`) |
| `tags` | json, null | array of strings |
| `quote` | varchar(300), null | |
| `created_at` | timestamp | returned as `submittedAt` |
| `reviewed_at` | timestamp, null | last approve or reject |
| `reviewed_by` | string, null | Firebase uid (or user id) of the admin |
| `published_at` | timestamp, null | set on first approve |

## Public endpoints (no auth)

### `POST /api/stories`

```json
{
  "setup": "string, required",
  "turningPoint": "string, required",
  "wisdom": "string, required",
  "mediaLink": "https://… or null",
  "contactEmail": "name@example.com or null",
  "consentAnonymity": true,
  "agreeTerms": true,
  "agreePublicSharing": true,
  "agreeNotMedicalAdvice": true,
  "website": ""
}
```

- The three stages are required, trimmed, and at most 10,000 characters each.
- `mediaLink` is optional and must be an `http`/`https` URL. `contactEmail`
  is optional and must be a valid email.
- All four agreement fields must be `true`.
- **`website` is a honeypot.** The field is hidden from real visitors, so a
  non-empty value means a bot. Reply `201` as normal but don't store anything.
- Please throttle this endpoint by IP (e.g. `throttle:5,60`).
- Response: **201** `{ "data": { "id": 12, "status": "pending" } }`, or
  **422** with errors.

### `GET /api/stories`

Approved stories only, newest `publishedAt` first.

```json
{
  "data": [
    {
      "id": 1,
      "slug": "a-daughter-becomes-her-fathers-advocate",
      "title": "A Daughter Becomes Her Father’s Advocate",
      "tags": ["Caregiving", "Type 2 Diabetes"],
      "quote": "…",
      "setup": "Paragraph one.\n\nParagraph two.",
      "turningPoint": "…",
      "wisdom": "…",
      "publishedAt": "2026-11-08T18:48:00+00:00"
    }
  ]
}
```

**Must not include** `contactEmail`, `mediaLink`, `status` or reviewer
fields. Use a dedicated API Resource for the public shape so these fields
can't leak by accident.

The page fetches this at build time, so stories are in the HTML for search
engines, and again in the browser on page load, so a story approved after the
last deploy shows up straight away.

## Admin endpoints

Every request sends `Authorization: Bearer <Firebase ID token>`.

1. Verify the token with the Firebase Admin SDK, the same way `/auth/session`
   already does. Missing, invalid or expired token: **401**.
2. Check the user is an admin. Our suggestion is an `is_admin` boolean on the
   users table, keyed by Firebase uid, set by a seeder or by hand; a Firebase
   custom claim `admin: true` works too. Not an admin: **403**.

The frontend has no admin flag of its own. It shows nothing until these
endpoints return data, and it turns 401/403 into "please log in" and "no
admin access" messages. **The backend check is the only real protection**,
because the admin pages are static HTML anyone can load.

`AdminStory` is the full record:

```json
{
  "id": 12,
  "status": "pending",
  "setup": "…", "turningPoint": "…", "wisdom": "…",
  "mediaLink": "https://… or null",
  "contactEmail": "… or null",
  "title": null, "slug": null, "tags": [], "quote": null,
  "submittedAt": "2026-11-08T18:48:00+00:00",
  "reviewedAt": null,
  "publishedAt": null
}
```

| Method and path | Body | Response |
|---|---|---|
| `GET /api/admin/stories` | none | `{ "data": AdminStory[] }`, all statuses, newest `submittedAt` first. Optional `?status=pending` filter (the frontend currently filters on its side) |
| `GET /api/admin/stories/{id}` | none | `{ "data": AdminStory }`, or **404** |
| `POST /api/admin/stories/{id}/approve` | `{ "title": "required, ≤150", "tags": ["≤10 strings, ≤40 chars each"], "quote": "≤300 or null" }` | `{ "data": AdminStory }` with `status: "approved"`. Sets `slug` (first time only), `reviewed_at`, `reviewed_by`, and `published_at` (first time only). **422** if `title` is missing |
| `POST /api/admin/stories/{id}/reject` | none | `{ "data": AdminStory }` with `status: "rejected"`. Sets `reviewed_at` and `reviewed_by` |

Approving a rejected story, or rejecting (unpublishing) an approved one, must
both work.

## CORS

The admin endpoints send an `Authorization` header, which triggers a
preflight request. Allow `Authorization` and `Content-Type` from
`https://humanhealthproject.org`, `https://sqa.humanhealthproject.org` and
`http://localhost:3000`.

## Seed the existing stories

Community Voices currently shows 9 stories from `src/data/sampleStories.js`.
Please seed them as `approved` and keep each story's `id` from that file as
its `slug`, so existing `#anchor` links keep working. Join each stage's
paragraph array with `\n\n`.

Until the API returns at least one approved story, the page keeps showing
that file. The page never goes empty while the backend is down or not yet
seeded.

## Local development without the backend

```bash
npm run mock:api                                   # http://localhost:4010/api
NEXT_PUBLIC_API_URL=http://localhost:4010/api npm run dev
```

The mock (`scripts/mock-api.mjs`) implements every endpoint above, in memory,
pre-loaded with the 9 published stories and two clearly-marked fake
submissions. Any signed-in user counts as an admin. Start it with
`MOCK_ADMIN=0` to see the 403 screen. Only the story endpoints and
`/auth/session` + `/auth/logout` are mocked; every other endpoint returns 404.
