const express = require("express");
const app = express();
const port = 3001;

app.get("/", function (req, res) {
  res.send("hola mundo probando porque se creo la carpeta dist");
});

app.listen(port, function () {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
