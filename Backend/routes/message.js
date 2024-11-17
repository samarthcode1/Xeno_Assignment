const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const CommunicationLog = require('../models/CommunicationLog');

router.post('/send', async (req, res) => {
    const { campaignId, audienceIds } = req.body;

    try {
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        const results = [];

        for (const audienceId of audienceIds) {
            const deliveryStatus = Math.random() < 0.9 ? 'SENT' : 'FAILED';

            const messageLog = new CommunicationLog({
                campaignId,
                customerId: audienceId,
                status: deliveryStatus,
                message: campaign.message, 
            });

            const savedLog = await messageLog.save();
            results.push(savedLog);
        }

        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'Error sending messages', message: err.message });
    }
});

module.exports = router;
