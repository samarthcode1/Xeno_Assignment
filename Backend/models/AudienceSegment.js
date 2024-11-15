const mongoose = require('mongoose');

const AudienceSegmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  criteria: { type: Object, required: true },
  audienceCount: { type: Number }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AudienceSegment', AudienceSegmentSchema);
