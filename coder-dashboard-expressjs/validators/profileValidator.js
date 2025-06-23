const Joi = require('joi');

exports.validateProfileUpdate = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  about: Joi.string().optional()
});
