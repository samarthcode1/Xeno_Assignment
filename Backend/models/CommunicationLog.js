const mongoose = require('mongoose');

const CommunicationLogSchema = new mongoose.Schema({
  campaignId: Number,
  customerId: mongoose.Schema.Types.ObjectId,
  status: {
    type: String,
    enum: ['SENT', 'FAILED']
  },
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CommunicationLog', CommunicationLogSchema);
