const express = require('express');
const router = express.Router();
const { googleLogin, login } = require('../controllers/authController');

router.post('/google', googleLogin);
router.post('/login', login);

module.exports = router;
