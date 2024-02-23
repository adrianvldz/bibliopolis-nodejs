const express = require("express");
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// Cargar archivo de rutas
app.use(require('./routes/loans'));

app.use(require('./routes/librarians'));

const PORT = process.env.PORT;

app.listen(PORT,() => {
  console.log(`El servidor escucha en el puerto `+ PORT);
});

module.exports = app;