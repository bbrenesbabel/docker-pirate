const express = require("express");
const morgan = require("morgan");
//Ambos estan en el archivo package.json

const app = express();
const router = require("./routes/developers.js");

const PORT = process.env.APP_PORT || 3000;

app.disable("etag"); // Disable cache 304 status-code 
app.use(morgan("short")); // Log server requests Permite poder hacer un log cada request que se le haga a la aplicación
app.use(express.json()); // Parse JSON bodies (legacy was body-parser) Trabaja los request en Json.
app.use(router); // Expand routes functionalities with custom router Permite controlar las rutas de la aplicación.

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, My name is Santiago." });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  //En que puerto va a funcionar en el servidor y emite un log en consola.
module.exports = app;
