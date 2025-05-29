const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Beispiel-Route für Registrierung
app.post("/api/register", (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  // Hier solltest du deine Logik einfügen (DB speichern, validieren, etc.)
  console.log("Register:", req.body);

  // Einfach Dummy-Antwort
  res.json({ user: { email, firstName, lastName } });
});

// Beispiel-Route für Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy: Immer Erfolg
  console.log("Login:", req.body);

  res.json({ user: { email } });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
