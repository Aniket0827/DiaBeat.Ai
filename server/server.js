const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const mongoose = require('mongoose');
const app = express();

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB with Mongoose
mongoose.connect("mongodb+srv://aniket:aniketdcst@cluster0.y32diki.mongodb.net/user-data?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to the database!");
});

// Define a Mongoose schema and model for User
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  age: Number,
  Pregnancies: Number,
  Glucose: Number,
  BloodPressure: Number,
  SkinThickness: Number,
  Insulin: Number,
  BMI: Number,
  DiabetesPedigreeFunction: Number,
  Diabetes: String
});

const User = mongoose.model('User', userSchema);

// CREATE a new user
app.post('/register', async (req, res) => {
    const newUser = new User(req.body);

    try {
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ user profile
app.get('/profile', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.query.username });

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

// UPDATE user details
app.patch('/updateProfile', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'password', 'name', 'age', 'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Diabetes'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findOne({ username: req.query.username });

        if (!user) {
            return res.status(404).send();
        }

        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE user
app.delete('/deleteUser', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ username: req.query.username });

        if (!user) {
            res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

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

//...
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