require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/coder-dashboard';

mongoose.connect(MONGO_URI, {})
.then(() => {
  console.log('✅ MongoDB verbunden');

  app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB-Verbindungsfehler:', err);
  process.exit(1); 
});
