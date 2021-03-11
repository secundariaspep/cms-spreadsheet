let googleSheet = require('../services/spreadsheet');

const obtenerVideos = async (req, res) => {
  registros = await googleSheet.accessGoogleSheet();
  res.render('index', {registros});
};

const pintarForm = (req, res) => {
  res.render('form',{});
}

const guardarVideo = (req, res) => {
  console.log(req.body);
  googleSheet.guardarVideo(req.body);
  res.redirect('/');
}

module.exports = {
  obtenerVideos: obtenerVideos,
  pintarForm: pintarForm,
  guardarVideo: guardarVideo,
}