
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communicationLogSchema = new Schema({
  campaignId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Campaign',
    required: true
  },
  customerId: { type: String, required: true }, 
  status: { type: String, enum: ['SENT', 'FAILED'], required: true },
  message: { type: String, required: true },  
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CommunicationLog', communicationLogSchema);
