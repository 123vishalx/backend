const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String,  // Changed to String to allow manual entry
        required: true, // Set to true as the date is manually specified
    },
    hashtags: {
        type: [String],  // Array of strings for hashtags
    },
});

module.exports = mongoose.model('Blog', blogSchema);
