const Joi = require('joi');

const topKSchema = Joi.object({
  k: Joi.number().integer().min(1).max(100).required(),
});

module.exports.validateTopK = (req, res, next) => {
  const { error } = topKSchema.validate(req.query);
  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map(detail => detail.message),
    });
  }
  next();
};
