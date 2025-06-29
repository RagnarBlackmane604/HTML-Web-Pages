require('dotenv').config();
const mongoose = require('mongoose');

const dbURI = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/coder-dashboard';

mongoose.connect(dbURI, {})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); 
  });
