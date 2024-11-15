// routes/customer.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Route to create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body); // Create a new customer from the request body
    await customer.save(); // Save the customer to the database
    res.status(201).json(customer); // Send back the created customer data
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

module.exports = router;
