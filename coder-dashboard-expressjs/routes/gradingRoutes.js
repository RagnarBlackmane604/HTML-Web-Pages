const express = require('express');
const router = express.Router();
const { gradingSubmissionSchema } = require('../validators/submissionValidator');
const validate = require('../middleware/validate');
const { postSubmission } = require('../controllers/gradingController');

router.get('/', (req, res) => {
  res.send('Grading Page');
});

router.post('/', validate(gradingSubmissionSchema, 'body'), 
postSubmission
);

module.exports = router;
