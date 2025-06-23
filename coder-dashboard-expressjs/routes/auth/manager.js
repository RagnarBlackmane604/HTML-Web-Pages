const express = require("express");
const router = express.Router();

const {
  registerManager,
  loginManager,
} = require("../../controllers/auth/managerController");
const {
  validateLogin,
  validateManagerSignup,
} = require("../../validators/authValidator");
const validate = require("../../middleware/validate");

console.log("Schemas:", validateLogin, validateManagerSignup);


router.post("/login", validate(validateLogin), loginManager);


router.post("/register", validate(validateManagerSignup), registerManager);

module.exports = router;
