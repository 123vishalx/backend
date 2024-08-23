const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  workWithUs: {
    type: String,
    enum: ['Augment my existing team', 'I have a new project', 'I want a dedicated team for my project'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  projectDetails: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
