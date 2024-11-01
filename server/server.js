const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


// Use CORS middleware with specific origin
app.use(cors({
  origin: 'https://gdgocpdeacoe.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'OPTIONS','PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
}));


// Define an async function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://gdgpdeacoem:dbPropertyGDG@cluster0.hirin.mongodb.net/try?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Call the async function to connect to MongoDB
connectToMongoDB();

// Define the Certificate model
const Certificate = require('./models/Certificate');

// Create a route to verify a certificate
app.get('/verified-certificates/:certificateId', async (req, res) => {
    const certificateId = req.params.certificateId;
    const certificate = await Certificate.findOne({ certificateId });
    if (!certificate) {
      return res.status(404).send({ error: 'Certificate not found' });
    }
    res.render('verified-certificate', { certificate });
  });

// Create a route to handle certificate verification form submission
app.post('/verify-certificate', async (req, res) => {
  const { certificateId } = req.body;
  const certificate = await Certificate.findOne({ certificateId });
  if (!certificate) {
    return res.status(404).send({ error: 'Certificate not found' });
  }
  res.json(certificate);
});

app.post('/check-verification', async (req, res) => {
    const { certificateId } = req.body;
  const certificate = await Certificate.findOne({ certificateId });
  if (!certificate) {
    return res.status(404).send({ error: 'Certificate not found' });
  }
  res.json(certificate);
  });

// Serve static files from the public folder
app.use(express.static('public'));

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});