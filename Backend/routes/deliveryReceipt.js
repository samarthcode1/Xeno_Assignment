// routes/deliveryReceipt.js
const express = require('express');
const router = express.Router();
const CommunicationLog = require('../models/CommunicationLog');  // Corrected typo

// Route to update delivery status
router.post('/update-status/:logId', async (req, res) => {
    try {
        const { status } = req.body;
        const logId = req.params.logId;
        const log = await CommunicationLog.findById(logId);

        if (!log) {
            return res.status(404).json({ message: 'Log entry not found' });
        }

        log.status = status;
        await log.save();

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/delivery-receipt', async (req, res) => {
    const { logId, status } = req.body;

    try {
        const log = await CommunicationLog.findById(logId);
        if (!log) return res.status(404).json({ error: 'Log not found' });

        log.status = status;  // Update delivery status
        await log.save();

        res.status(200).json({ message: 'Delivery status updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating delivery status', message: err.message });
    }
});

module.exports = router;
