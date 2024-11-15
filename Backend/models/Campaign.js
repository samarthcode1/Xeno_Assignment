const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,  // Ensure this is required
  },
  // Additional fields if any
});

module.exports = mongoose.model('Campaign', CampaignSchema);
