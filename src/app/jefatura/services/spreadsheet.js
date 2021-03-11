const { GoogleSpreadsheet } = require('google-spreadsheet');
// const { OAuth2Client } = require('google-auth-library');

const credenciales = require('../../../json/credenciales.json');
//const API_KEY = 'AIzaSyB_zyyfweimrEjVakRDvSM2PEMI061TJiU';
// let googleId = '1g6YJXf9reNEcpCEyUAh2pdtTRRhNH92fpH53yoNU8Xg'; 
//tramites

let googleId = '1z50x_gye2-LN04FaOO6XhBfKcz8rlMfIjIz4p_-ZHBg'; //dedoblamientos


async function conect() {
  const doc = new GoogleSpreadsheet(googleId);
  await doc.useServiceAccountAuth(credenciales);
  // await doc.useApiKey(API_KEY);
  await doc.loadInfo();

  return doc;
}

async function accessGoogleSheet() {
  const doc = await conect();
  // const sheet = doc.sheetsByIndex[1]; //respuestas tramites
  const sheet = doc.sheetsByIndex[1]; //dedoblamientos
  const registros = await sheet.getRows();

  return registros;
}

async function guardarVideo(pObject) {
  const doc = await conect();
  const sheet = doc.sheetsByIndex[1];

  await sheet.addRow(pObject);

}

module.exports = {
  accessGoogleSheet: accessGoogleSheet,
  guardarVideo: guardarVideo,
}