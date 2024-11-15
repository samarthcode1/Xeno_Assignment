// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const audienceSegmentRoutes = require('./routes/audienceSegment');
const campaignRoutes = require('./routes/campaign');
const messageRoutes = require('./routes/message');
const deliveryReceiptRoutes = require('./routes/deliveryReceipt');
require('dotenv').config();

// Initialize the express app first
const app = express();

// Use bodyParser middleware
app.use(bodyParser.json());

// Define your routes after initializing the app
app.use('/api/audience-segments', audienceSegmentRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/messages', messageRoutes);  // Ensure this route matches the `message.js` file
app.use('/api', deliveryReceiptRoutes);


// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch((error) => console.error(error));

// Import additional routes
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

// Use additional routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
