const express = require('express');
const router = express.Router();
const { createContact } = require('../Controllers/contactController');

// Route to handle contact form submission
router.post('/contact', createContact);

module.exports = router;
