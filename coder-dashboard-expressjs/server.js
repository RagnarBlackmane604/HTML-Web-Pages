require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/coder-dashboard';

// Zuerst: Mit MongoDB verbinden, dann Server starten
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB verbunden');

  app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB-Verbindungsfehler:', err);
  process.exit(1); // App beenden bei Verbindungsfehler
});
