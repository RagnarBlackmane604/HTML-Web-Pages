const express = require('express');
const router = express.Router();

const {
  getManagerProfile,
  updateManagerProfile
} = require('../../controllers/profile/managerProfileController');

const validate = require('../../middleware/validate');
const { validateProfileUpdate } = require('../../validators/profileValidator');


router.get('/', getManagerProfile);


router.put('/', validate(validateProfileUpdate), updateManagerProfile);

module.exports = router;

