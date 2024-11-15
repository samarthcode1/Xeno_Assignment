// models/AudienceSegment.js
const mongoose = require('mongoose');

const AudienceSegmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  criteria: { type: Object, required: true }, // Stores conditions like spending, visits, etc.
  audienceCount: { type: Number }, // To store calculated audience size
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AudienceSegment', AudienceSegmentSchema);
