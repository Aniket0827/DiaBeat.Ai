const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

app.post('/predict', (req, res) => {
    const python = spawn('python', ['./MLModels/predict.py', 
                                    req.body.Pregnancies, 
                                    req.body.Glucose, 
                                    req.body.BloodPressure,
                                    req.body.SkinThickness,
                                    req.body.Insulin,
                                    req.body.BMI,
                                    req.body.DiabetesPedigreeFunction,
                                    req.body.Age]);

    let result = '';

    python.stdout.on('data', (data) => {
        result += data.toString();
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    python.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).send("An error occurred in the Python script.");
        }
        const response = JSON.parse(result); // parse JSON string to object
        res.json(response);
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));