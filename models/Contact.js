// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false },
  workWithUs: { type: String, required: false },
  phone: { type: String, required: false },
  projectDetails: { type: String, required: false },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
