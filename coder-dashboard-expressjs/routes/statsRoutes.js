const express = require('express');
const router = express.Router();
const { validateHeatmapQuery, validateTopKQuery } = require('../validators/statsValidator');

const {
  getSolvedChallengesStats,
  getTrendingCategories,
  getHeatmap,
  getTopKCoders
} = require('../controllers/statsController');

// Solved Challenges Statistics
router.get('/solved', getSolvedChallengesStats);

// Trending Categories
router.get('/trending', getTrendingCategories);

// Heatmap mit optionalen Query-Parametern start_date, end_date
router.get('/heatmap', validateHeatmapQuery, getHeatmap);

// Top Coders
router.get('/top-coders', validateTopKQuery, getTopKCoders);

module.exports = router;
