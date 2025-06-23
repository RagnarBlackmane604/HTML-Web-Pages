const Joi = require('joi');

const gradingSubmissionSchema = Joi.object({
  challenge_id: Joi.string().required(),
  lang: Joi.string().valid('py', 'js').required(),
  code: Joi.string().min(1).required()
});


module.exports = { gradingSubmissionSchema };
