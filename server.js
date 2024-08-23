const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://vishal:pxkkRenEp5kC9vQ0@cluster0.hfb8e9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your actual MongoDB URI
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  });

// Routes
app.use('/api/blogs', require('./Routes/Blogs'));
app.use('/api/categories', require('./Routes/Category'));
app.use('/api/admin', require('./Routes/Admin'));
app.use('/api/career', require('./Routes/Career'));
app.use('/api/contact', require('./Routes/contactRoutes')); // Route for Contact Us

app.get('/', (req, res) => {
  res.json({ message: "Hello, it's all about Radso Innovations backend" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
