const SHEET_NAME = "Booking";
const TIMEZONE = "Asia/Jakarta";
const HEADERS = [
  "Waktu Booking Masuk",
  "Jenis Booking",
  "Nama",
  "WhatsApp",
  "Layanan",
  "Lokasi Lapangan",
  "Link Lokasi",
  "Tanggal",
  "Durasi",
  "Catatan",
];

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

  const data = JSON.parse(e.postData.contents);
  const submittedAt = Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");

  sheet.appendRow([
    submittedAt,
    data.bookingType,
    data.name,
    data.whatsapp,
    data.service,
    data.location,
    data.shareLocation,
    data.date,
    data.duration,
    data.notes,
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
