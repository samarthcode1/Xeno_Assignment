const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    googleId: { type: String },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
};

userSchema.methods.createJWT = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
};

module.exports = mongoose.model('User', userSchema);
