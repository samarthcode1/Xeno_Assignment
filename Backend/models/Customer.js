const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  spending: Number,
  visits: Number,
  lastVisit: Date
});

module.exports = mongoose.model('Customer', CustomerSchema);
