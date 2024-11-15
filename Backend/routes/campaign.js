const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign'); 
router.post('/', async (req, res) => {
    const { name, message } = req.body;
    console.log("Request body:", req.body);

    if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required fields.' });
    }

    try {
        const newCampaign = new Campaign({ name, message });
        const savedCampaign = await newCampaign.save();
        res.status(201).json(savedCampaign);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create campaign', details: err.message });
    }
});

// GET route to fetch all past campaigns
router.get('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1 });
        res.status(200).json(campaigns);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch campaigns', message: err.message });
    }
});

module.exports = router;
