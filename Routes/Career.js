const express = require('express');
const router = express.Router();
const CareerController = require('../Controllers/careerController');
const authMiddleware = require('../Middlewares/auth');

// Get all careers (public) with pagination
router.get('/', CareerController.getCareers);

// Create a new career (admin only)
router.post('/', authMiddleware.verifyAdmin, CareerController.createCareer);

// Update a career (admin only)
router.put('/:id', authMiddleware.verifyAdmin, CareerController.updateCareer);

// Delete a career (admin only)
router.delete('/:id', authMiddleware.verifyAdmin, CareerController.deleteCareer);

module.exports = router;
