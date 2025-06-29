const express = require('express');
const router = express.Router();

const {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  getAllCategories
} = require('../controllers/challengeController');

const validate = require('../middleware/validate');
const { validateChallengeCreation } = require('../validators/challengeValidator');

// 1. Challenge erstellen
router.post('/', validate(validateChallengeCreation), createChallenge);

// 3. Alle Challenges listen (optional mit category Query)
router.get('/', getAllChallenges);

// 5. Kategorien listen (muss VOR /:id stehen)
router.get('/categories', getAllCategories);

// 4. Challenge per ID
router.get('/:id', getChallengeById);

module.exports = router;

