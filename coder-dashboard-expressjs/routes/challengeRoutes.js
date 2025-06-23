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
console.log('DEBUG: schema=', validateChallengeCreation);
// 1. Challenge erstellen
router.post('/', validate(validateChallengeCreation), createChallenge);

// 3. Alle Challenges listen (optional mit category Query)
router.get('/', getAllChallenges);

// 5. Kategorien listen (muss VOR /:id stehen, damit nicht als id interpretiert)
router.get('/categories', getAllCategories);

// 4. Challenge per ID
router.get('/:id', getChallengeById);


module.exports = router;
