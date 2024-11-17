const express = require('express');
const router = express.Router();
const { googleLogin, login } = require('../controllers/authController');

router.post('/google', googleLogin);
router.post('/login', login);
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
    }),
    (req, res) => {
        res.redirect('/');
    }
);

module.exports = router;
