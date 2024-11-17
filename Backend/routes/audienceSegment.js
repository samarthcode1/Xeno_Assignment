const express = require('express');
const router = express.Router();
const AudienceSegment = require('../models/AudienceSegment');
const Customer = require('../models/Customer');

router.post('/', async (req, res) => {
  try {
    const { name, criteria } = req.body;
    
    let query = {};
    if (criteria.spending) query.spending = { $gte: criteria.spending };
    if (criteria.visits) query.visits = { $lte: criteria.visits };
    if (criteria.lastVisit) query.lastVisit = { $lte: new Date(criteria.lastVisit) };
    
    const matchedCustomers = await Customer.find(query);
    const audienceCount = matchedCustomers.length;
    
    const segment = new AudienceSegment({ name, criteria, audienceCount });
    await segment.save();
    
    res.status(201).json({ segment, audienceCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
