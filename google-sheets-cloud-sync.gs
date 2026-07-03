const SHEET_NAME = "CMA_APP_CLOUD";
const STATE_KEY = "app_state";

function doGet(e) {
  const callback = e.parameter.callback || "callback";
  const snapshot = loadSnapshot_();
  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify({ ok: true, snapshot })});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  if (payload.action === "save" && payload.snapshot) {
    saveSnapshot_(payload.snapshot);
  }
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["key", "savedAt", "json"]);
  }
  return sheet;
}

function loadSnapshot_() {
  const sheet = sheet_();
  const values = sheet.getDataRange().getValues();
  const row = values.find(item => item[0] === STATE_KEY);
  return row && row[2] ? JSON.parse(row[2]) : null;
}

function saveSnapshot_(snapshot) {
  const sheet = sheet_();
  const values = sheet.getDataRange().getValues();
  const rowIndex = values.findIndex(item => item[0] === STATE_KEY);
  const row = [STATE_KEY, new Date(), JSON.stringify(snapshot)];
  if (rowIndex >= 0) {
    sheet.getRange(rowIndex + 1, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
}
