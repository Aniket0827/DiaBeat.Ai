const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://aniket:aniketdcst@cluster0.y32diki.mongodb.net/user-data?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to the database!");
});

const userSchema = new mongoose.Schema({
  Pregnancies: Number,
  Glucose: Number,
  BloodPressure: Number,
  SkinThickness: Number,
  Insulin: Number,
  BMI: Number,
  DiabetesPedigreeFunction: Number,
  Age: Number,
  Diabetes: String
});

const User = mongoose.model('User', userSchema);

app.get('/health', (req, res) => {
    res.send('Server is healthy');
});

app.get('/users/:_id', (req, res) => {
    User.findById(req.params._id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        });
});

app.post('/predict', (req, res) => {
    console.log('Received a prediction request with data:', req.body);

    var dataToSend;
    const python = spawn('python', ['./MLModels/predict.py', 
        req.body.Pregnancies, req.body.Glucose, req.body.BloodPressure, 
        req.body.SkinThickness, req.body.Insulin, req.body.BMI, 
        req.body.DiabetesPedigreeFunction, req.body.Age]);
    
    python.stdout.on('data', function (data) {
        console.log('Received data from Python script:', data);
        dataToSend = data.toString();
    });
    
    python.on('close', (code) => {
        console.log(`Python script closed with code ${code}`);
        res.send({result: dataToSend});
    });
});

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((user) => {
            console.log('Data saved successfully:', user);
            res.json({message: 'Data saved successfully', data: user});
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({error: 'Failed to save data'});
        });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));