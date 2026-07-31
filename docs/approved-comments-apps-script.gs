/**
 * Approved-comments feed for the "Community Voices" page.
 *
 * Reads the Google Form responses sheet, returns ONLY rows where the `Approved`
 * checkbox is ticked, and exposes ONLY a whitelist of public-safe fields as JSON.
 * Filtering and whitelisting happen here (server-side) so the browser never sees
 * un-approved rows or un-published columns.
 *
 * ── How to install ─────────────────────────────────────────────────────────
 * 1. Open the responses sheet → Extensions → Apps Script.
 * 2. Paste this file into Code.gs (replace the default contents).
 * 3. If the responses tab is NOT the first sheet, set SHEET_NAME below.
 * 4. Deploy → New deployment → type "Web app":
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Copy the /exec URL and put it in the frontend .env as VITE_COMMENTS_API_URL.
 * 5. Re-deploy (new version) whenever you change this script.
 *
 * The header strings below must match the sheet's header row exactly. If a form
 * question is reworded, update the matching entry in COLUMN_MAP.
 */

// Leave as null to use the first sheet; or set to e.g. "Form Responses 1".
var SHEET_NAME = null;

var APPROVED_HEADER = 'Approved';

// Maps output JSON key -> exact sheet header text (whitelist).
var COLUMN_MAP = {
  comment:
    'In your view, what is the biggest healthcare challenge facing people in your community, and what would help most?',
  describes: 'Which of the following best describes you?',
  healthArea: 'Which health area has affected you or the person you support?',
  council: 'Which council area do you live in?',
  timestamp: 'Timestamp',
};

function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];

  var values = sheet.getDataRange().getValues();
  var headers = values.shift(); // first row = headers
  var index = {};
  headers.forEach(function (h, i) {
    index[String(h).trim()] = i;
  });

  var approvedIdx = index[APPROVED_HEADER];
  var out = [];

  values.forEach(function (row) {
    // Only approved rows. Checkbox cells come back as boolean true; also accept
    // "TRUE"/"yes"/"1" for robustness if the column is text.
    if (!isApproved(row[approvedIdx])) return;

    var comment = getCell(row, index, COLUMN_MAP.comment);
    if (!comment) return; // skip rows with no free-text comment

    out.push({
      comment: comment,
      describes: getCell(row, index, COLUMN_MAP.describes),
      healthArea: getCell(row, index, COLUMN_MAP.healthArea),
      council: getCell(row, index, COLUMN_MAP.council),
      date: formatMonthYear(row[index[COLUMN_MAP.timestamp]]),
    });
  });

  // Newest first.
  out.reverse();

  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function isApproved(value) {
  if (value === true) return true;
  var s = String(value).trim().toLowerCase();
  return s === 'true' || s === 'yes' || s === '1';
}

function getCell(row, index, header) {
  var i = index[header];
  if (i === undefined) return '';
  return String(row[i] == null ? '' : row[i]).trim();
}

function formatMonthYear(value) {
  if (!value) return '';
  var d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return String(value);
  var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return months[d.getMonth()] + ' ' + d.getFullYear();
}
