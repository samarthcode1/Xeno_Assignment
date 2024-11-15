const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const audienceSegmentRoutes = require('./routes/audienceSegment');
const campaignRoutes = require('./routes/campaign');
const messageRoutes = require('./routes/message');
const deliveryReceiptRoutes = require('./routes/deliveryReceipt');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api/audience-segments', audienceSegmentRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/messages', messageRoutes); 
app.use('/api', deliveryReceiptRoutes);


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch((error) => console.error(error));

const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
