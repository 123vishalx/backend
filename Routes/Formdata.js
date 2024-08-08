const express = require('express');
const router = express.Router();
const FormDataController = require('../Controllers/formdataController');
const authMiddleware = require('../Middlewares/auth');

// Get all form data (public)
router.get('/', FormDataController.getFormData);

// Create new form data (admin only)
router.post('/', authMiddleware.verifyAdmin, FormDataController.processFormData);

// Update form data (admin only)
router.put('/:id', authMiddleware.verifyAdmin, FormDataController.updateFormdata);

// Delete form data (admin only)
router.delete('/:id', authMiddleware.verifyAdmin, FormDataController.deleteFormdata);

module.exports = router;
