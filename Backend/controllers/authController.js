const passport = require('./passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/User');

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleCallback = passport.authenticate('google', { failureRedirect: '/login?error=google-auth-failed' });

const googleCallbackSuccess = async (req, res) => {
    try {
        const user = req.user;
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json({ success: false, message: 'Google login failed' });
    }
};

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long and contain a number' });
    }

    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Users.create({ username, email, password: hashedPassword });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        res.status(201).json({
            success: true,
            message: 'Account created successfully',
            user: { id: newUser._id, username, email },
            token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message || 'Registration failed' });
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    try {
        const user = await Users.findOne({ email }).select('+password');

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: { id: user._id, username: user.username, email: user.email },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message || 'Login failed' });
    }
};

const signOut = (req, res) => {
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ success: true, message: 'Logged out successfully' });
};

module.exports = {
    googleAuth,
    googleCallback,
    googleCallbackSuccess,
    register,
    signIn,
    signOut,
};
