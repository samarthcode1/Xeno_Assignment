
const passport = require('./passport');
const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallback = passport.authenticate('google', { failureRedirect: '/' });

const googleCallbackSuccess = (req, res) => {
    res.redirect('/dashboard');
};

module.exports = { googleAuth, googleCallback, googleCallbackSuccess };
