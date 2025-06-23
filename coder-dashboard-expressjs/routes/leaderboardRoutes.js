const express = require('express');
const router = express.Router();
const { getLeaderboard, getTopKCoders } = require('../controllers/leaderboardController');
const { validateTopK } = require('../validators/leaderboardValidator');

router.get('/', (req, res) => {
  res.send('Leaderboard!');
});

router.get('/top-coders', validateTopK, getTopKCoders);

module.exports = router;
