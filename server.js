// server.js - backend simple para el asesor
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Backend en línea'));

app.get('/laws', (req, res) => {
  try {
    const data = fs.readFileSync('./laws.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'No se pudo leer laws.json' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor puerto ${PORT}`));




