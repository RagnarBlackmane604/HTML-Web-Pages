const express = require('express');
const router = express.Router();

const { getCoderProfile, updateCoderProfile } = require('../../controllers/profile/coderProfileController');
const validate = require('../../middleware/validate');
const { validateProfileUpdate } = require('../../validators/profileValidator');


router.get('/', getCoderProfile);


router.put('/', validate(validateProfileUpdate), updateCoderProfile);

module.exports = router;
