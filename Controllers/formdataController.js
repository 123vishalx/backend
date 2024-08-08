const FormData = require('../models/Formdata');

exports.processFormData = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Create a new form data entry
        const formData = new FormData({
            name,
            email,
            message
        });

        // Save the form data to the database
        const savedFormData = await formData.save();
        res.status(201).json({ message: 'Form submitted successfully', data: savedFormData });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFormData = async (req, res) => {
    try {
        const formData = await FormData.find();
        res.json(formData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a formdata
exports.deleteFormdata = async (req, res) => {
    try {
        const formData = await FormData.findById(req.params.id);
        if (formData) {
            await formData.remove();
            res.json({ message: 'Form data deleted' });
        } else {
            res.status(404).json({ message: 'Form data not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a formdata
exports.updateFormdata = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const formData = await FormData.findById(req.params.id);
        if (formData) {
            formData.name = name || formData.name;
            formData.email = email || formData.email;
            formData.message = message || formData.message;
            const updatedFormData = await formData.save();
            res.json(updatedFormData);
        } else {
            res.status(404).json({ message: 'Form data not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
