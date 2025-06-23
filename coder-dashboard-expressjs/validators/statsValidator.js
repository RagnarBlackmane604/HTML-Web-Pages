const Joi = require('joi');


const heatmapSchema = Joi.object({
  start_date: Joi.date().iso().optional(),
  end_date: Joi.date().iso().optional()
});


const topKSchema = Joi.object({
  k: Joi.number().integer().min(1).required()
});

module.exports = {
  validateHeatmapQuery: (req, res, next) => {
    const { error } = heatmapSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  },

  validateTopKQuery: (req, res, next) => {
    const { error } = topKSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  }
};
