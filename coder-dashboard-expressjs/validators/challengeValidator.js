const Joi = require('joi');

const codeTextSchema = Joi.object({
  language: Joi.string().required(),
  text: Joi.string().required()
});

const inputSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().valid('number', 'string', 'boolean').required()
});

const testInputSchema = Joi.object({
  name: Joi.string().required(),
  value: Joi.any().required()
});

const testSchema = Joi.object({
  weight: Joi.number().min(0).max(1).required(),
  inputs: Joi.array().items(testInputSchema).required(),
  output: Joi.any().required()
});

const challengeCreationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  category: Joi.string().min(2).max(50).required(),
  description: Joi.string().min(20).required(),
  level: Joi.string().valid('Easy', 'Medium', 'Hard').required(),
  code: Joi.object({
    function_name: Joi.string().required(),
    code_text: Joi.array().items(codeTextSchema).min(1).required(),
    inputs: Joi.array().items(inputSchema).min(1).required()
  }).required(),
  tests: Joi.array().items(testSchema).min(1).required()
});


module.exports = { validateChallengeCreation: challengeCreationSchema };
