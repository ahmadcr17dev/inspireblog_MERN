const express = require('express');
const { register, login } = require('../controllers/authcontroller');
const { registervalidation, loginvalidation } = require('../middlewares/authmiddleware')

const router = express.Router();

router.post('/register', registervalidation, register);
router.post('/login', loginvalidation, login);

module.exports = router;