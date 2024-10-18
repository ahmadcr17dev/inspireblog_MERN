const express = require('express');
const { register, login } = require('../controllers/authcontroller');
const { registervalidation, loginvalidation } = require('../middlewares/authmiddleware')
const usermodel = require('../models/user')

const router = express.Router();

router.post('/register', registervalidation, register);
router.post('/login', loginvalidation, login);

router.get('/account', (req, res) => {
    usermodel.find()
    .then(users => res.json(users))
    .catch(error => console.log('Error in account: ', error))
})

module.exports = router;