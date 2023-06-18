const express = require('express');
const cors = require('cors');
const model = require('./model');  // Include your model.js module

const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Define a POST route for health prediction
app.post('/predict', async (req, res) => {
    try {
        // Get user data from request body
        const userData = req.body;

        // Pass user data to healthModel.py through model.js
        const prediction = await model.predictHealthRisk(userData);

        // Send prediction back as a response
        res.json({ prediction: prediction });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error predicting health risk.');
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));