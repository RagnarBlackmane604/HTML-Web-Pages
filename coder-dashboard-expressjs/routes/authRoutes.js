const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
  
  res.send('Login erfolgreich!');
});


router.post('/register', (req, res) => {
 
  res.send('Registrierung erfolgreich!');
});

module.exports = router;
