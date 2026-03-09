const SHEET_URL = "https://script.google.com/macros/s/AKfycbzqvo5c3Q1wt_j6Kt5c6v2q-YzAloEvZJM7WQly7Yl9pbgFYSkcuV3b_tela3dkkZZc5w/exec";

async function sendToGoogleSheet(sheetName,row){
  await fetch(SHEET_URL,{
    method:"POST",
    body: JSON.stringify({
      sheet: sheetName,
      row: row
    })
  });
}
