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
mongoose.connect('mongodb+srv://vishal:pxkkRenEp5kC9vQ0@cluster0.hfb8e9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
      console.error('MongoDB connection error: ', err);
      if (err.name === 'MongooseServerSelectionError') {
        console.error('Could not connect to any servers in your MongoDB Atlas cluster. Please ensure your IP address is whitelisted and your cluster is running.');
      }
      process.exit(1);
    });

// Routes
app.use('/api/blogs', require('./Routes/Blogs'));
app.use('/api/categories', require('./Routes/Category'));
app.use('/api/admin', require('./Routes/Admin'));
app.use('/api/career', require('./Routes/Career'));
app.use('/api/formdata', require('./Routes/Formdata'));

app.get('/', (req, res) => {
  res.json({ message: "Hello, it's all about Radso Innovations backend" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
