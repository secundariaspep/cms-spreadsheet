
const dotenv = require('dotenv').config();
const app = require('./app');
const p = process.env;

app.listen(3000, () => {
  console.log('Servidor all right');
});
