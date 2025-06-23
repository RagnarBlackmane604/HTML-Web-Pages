const express = require('express');
const router = express.Router();

const { gradingSubmissionSchema } = require('../validators/gradingValidator');
const validate = require('../middleware/validate');
const { postSubmission } = require('../controllers/gradingController');


router.get('/', (req, res) => {
  res.send('Alle Submissions');
});


router.post(
  '/',
  validate(gradingSubmissionSchema, 'body'),
  postSubmission
);


router.get('/:id', (req, res) => {
  res.send(`Submission mit ID ${req.params.id}`);
});

module.exports = router;
