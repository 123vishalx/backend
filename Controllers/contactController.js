const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { fullName, email, companyName, workWithUs, phoneNumber, projectDetails } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      companyName,
      workWithUs,
      phoneNumber,
      projectDetails,
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit the contact form.', error });
  }
};
