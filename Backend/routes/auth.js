const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.register);
router.post('/signin', authController.signIn);
router.post('/signout', authController.signOut);

router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleCallback, authController.googleCallbackSuccess);

module.exports = router;
