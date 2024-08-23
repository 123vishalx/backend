// contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Make sure the model path is correct

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, company, workWithUs, phone, projectDetails } = req.body;

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      company,
      workWithUs,
      phone,
      projectDetails,
    });

    // Save the contact entry to the database
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
});

module.exports = router;
