require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


const allowedOrigins = [
  'http://localhost:3000', 
  'https://gdgocpdeacoe.vercel.app',
  'https://gdgocpdeacoe-backend.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware before other routes
app.use(cors(corsOptions));

// Define an async function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
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


// Handle preflight requests explicitly
app.options('/verify-certificate', cors(corsOptions));
app.options('/check-verification', cors(corsOptions));
app.options('/verified-certificates/:certificateId', cors(corsOptions));

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});