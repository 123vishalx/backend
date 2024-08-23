const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    openPosition: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    applyBefore: {
        type: Date,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Career', careerSchema);
