require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const audienceSegmentRoutes = require('./routes/audienceSegment');
const campaignRoutes = require('./routes/campaign');
const customerRoutes = require('./routes/customer');
const deliveryReceiptRoutes = require('./routes/deliveryReceipt');
const messageRoutes = require('./routes/message');
const orderRoutes = require('./routes/order');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.use('/api/auth', authRoutes);
app.use('/api/audience-segment', audienceSegmentRoutes);
app.use('/api/campaign', campaignRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/delivery-receipt', deliveryReceiptRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/order', orderRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Backend API!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: err.message });
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown:', err);
    process.exit(1);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
