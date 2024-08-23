const Career = require('../models/Career');

// Get all careers
exports.getCareers = async (req, res) => {
    try {
        const careers = await Career.find();
        res.json(careers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new career
exports.createCareer = async (req, res) => {
    const career = new Career({
        title: req.body.title,
        image: req.body.image,
        details: req.body.details,
        openPosition: req.body.openPosition,
        location: req.body.location,
        applyBefore: req.body.applyBefore,
        link: req.body.link,
    });

    try {
        const newCareer = await career.save();
        res.status(201).json(newCareer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a career
exports.deleteCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (career) {
            await career.remove();
            res.json({ message: 'Career deleted' });
        } else {
            res.status(404).json({ message: 'Career not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a career
exports.updateCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (career) {
            career.title = req.body.title || career.title;
            career.image = req.body.image || career.image;
            career.details = req.body.details || career.details;
            career.openPosition = req.body.openPosition || career.openPosition;
            career.location = req.body.location || career.location;
            career.applyBefore = req.body.applyBefore || career.applyBefore;
            career.link = req.body.link || career.link;
            const updatedCareer = await career.save();
            res.json(updatedCareer);
        } else {
            res.status(404).json({ message: 'Career not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};