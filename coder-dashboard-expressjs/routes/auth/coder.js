const express = require('express');
const router = express.Router();
const validate = require('../../middleware/validate');
const { registerCoder, loginCoder } = require('../../controllers/auth/coderController');
const { validateCoderSignup, validateLogin } = require('../../validators/authValidator');


router.post('/login', validate(validateLogin), loginCoder);

router.post('/register', validate(validateCoderSignup), registerCoder);

module.exports = router;
