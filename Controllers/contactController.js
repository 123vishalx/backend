const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Handle form submission
const submitContactForm = async (req, res) => {
  const { name, email, company, workWithUs, phone, project } = req.body;

  // Create a new contact entry
  const newContact = new Contact({
    name,
    email,
    company,
    workWithUs,
    phone,
    project,
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Email address to receive the contact form messages
    subject: 'New Contact Us Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      How do you want to work with us?: ${workWithUs}
      Phone: ${phone}
      Project Details: ${project}
    `,
  };

  try {
    // Save the contact entry to the database
    await newContact.save();

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message. Please try again.');
  }
};

module.exports = { submitContactForm };
