// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Route to create a new order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body); // Create a new order from the request body
    await order.save(); // Save the order to the database
    res.status(201).json(order); // Send back the created order data
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

module.exports = router;
