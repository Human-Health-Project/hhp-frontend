// Reads approved community-survey comments directly from the Google responses
// sheet via the Google Visualization (gviz) endpoint — no Apps Script required.
//
// SETUP: the sheet must be shared as "Anyone with the link can view".
//
// NOTE: gviz returns EVERY row (approved or not) to the browser; we filter to
// approved rows here, client-side. Because the survey is anonymous this is
// acceptable for the mock/test phase, but for production the approval gate
// should move server-side (see docs/approved-comments-apps-script.gs) so that
// un-approved responses never leave Google.

const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const GID = import.meta.env.VITE_SHEET_GID || "0";

// Exact sheet header text for each field we care about.
const HEADERS = {
  comment:
    "In your view, what is the biggest healthcare challenge facing people in your community, and what would help most?",
  describes: "Which of the following best describes you?",
  healthArea: "Which health area has affected you or the person you support?",
  council: "Which council area do you live in?",
  approved: "Approved",
  timestamp: "Timestamp",
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Fallback sample data, used only when VITE_SHEET_ID is not configured.
export const MOCK_COMMENTS = [
  {
    comment:
      "The biggest challenge is not knowing where to go when something isn't an emergency but still worries you. A single place to ask 'what do I do next?' would help enormously.",
    describes: "Patient",
    healthArea: "Mental health",
    council: "Belfast",
    date: "March 2026",
  },
  {
    comment:
      "Waiting times for a GP appointment mean people give up and let things get worse. More same-day access, even by phone, would make a real difference.",
    describes: "Carer / family member",
    healthArea: "Long-term condition",
    council: "Derry City & Strabane",
    date: "March 2026",
  },
  {
    comment:
      "Health information online is overwhelming and often contradictory. Plain-language guides written for our community would help us feel more confident making decisions.",
    describes: "Patient",
    healthArea: "Diabetes",
    council: "Armagh, Banbridge & Craigavon",
    date: "February 2026",
  },
];

function gvizUrl() {
  return (
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?tqx=out:json&headers=1&gid=${GID}`
  );
}

// gviz wraps its JSON: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
function parseGviz(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Unexpected gviz response (is the sheet shared publicly?)");
  }
  return JSON.parse(text.slice(start, end + 1));
}

// gviz date cells arrive as "Date(2026,2,15,...)" (month is 0-based).
function toMonthYear(cell) {
  if (!cell) return "";
  const v = cell.v;
  if (typeof v === "string") {
    const m = v.match(/^Date\((\d+),(\d+)/);
    if (m) return `${MONTHS[Number(m[2])]} ${Number(m[1])}`;
  }
  return cell.f || "";
}

// Accepts a checkbox TRUE or common affirmative text values (the sheet currently
// uses the literal word "Approved").
function isApproved(cell) {
  if (!cell) return false;
  if (cell.v === true) return true;
  const s = String(cell.v).trim().toLowerCase();
  return ["true", "yes", "y", "1", "x", "✓", "approved"].includes(s);
}

/**
 * Fetch approved community comments.
 * @returns {Promise<Array<{comment:string, describes:string, healthArea:string, council:string, date:string}>>}
 */
export async function fetchApprovedComments() {
  if (!SHEET_ID) {
    console.warn(
      "[comments] VITE_SHEET_ID is not set — falling back to MOCK_COMMENTS. " +
        "Set it in .env (and share the sheet 'Anyone with the link') to show live data."
    );
    return MOCK_COMMENTS;
  }

  const res = await fetch(gvizUrl());
  if (!res.ok) {
    throw new Error(`Failed to load sheet (HTTP ${res.status})`);
  }

  const table = parseGviz(await res.text()).table;

  // Map header label -> column index.
  const col = {};
  table.cols.forEach((c, i) => {
    col[(c.label || "").trim()] = i;
  });

  const at = (key) => col[HEADERS[key]];
  if (at("approved") === undefined) {
    console.warn(
      "[comments] Could not find an 'Approved' column in the sheet — no rows will show."
    );
  }

  const cellText = (row, key) => {
    const i = at(key);
    if (i === undefined) return "";
    const cell = row.c[i];
    return cell && cell.v != null ? String(cell.v).trim() : "";
  };

  const out = [];
  table.rows.forEach((row) => {
    if (!row.c) return;
    if (!isApproved(row.c[at("approved")])) return;

    const comment = cellText(row, "comment");
    if (!comment) return; // skip rows with no free-text answer

    out.push({
      comment,
      describes: cellText(row, "describes"),
      healthArea: cellText(row, "healthArea"),
      council: cellText(row, "council"),
      date: toMonthYear(row.c[at("timestamp")]),
    });
  });

  out.reverse(); // newest first
  return out;
}
