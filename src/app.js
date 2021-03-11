const express   = require("express");
const bodyParser = require('body-parser');

const app       = express();

app.set('views','/home/runner/cms-spreadsheet/src/app/jefatura/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use( require('./app/jefatura/routes/google.routes'));

module.exports = app;