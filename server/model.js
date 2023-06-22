const { spawn } = require('child_process');

// Function to call the healthModel.py script
function predictHealthRisk(userData) {
    return new Promise((resolve, reject) => {
        // Convert the userData to an array of strings
        const userDataArray = Object.values(userData).map(String);

        // Spawn a new Python process
        const python = spawn('python', ['./MLModels/healthModel.py', ...userDataArray]);

        // Collect data from script
        let result = '';
        python.stdout.on('data', function (data) {
            result += data.toString();
        });

        // In close event we are sure that stream from child process is closed
        python.on('close', (code) => {
            if (code !== 0) {
                return reject(new Error("An error occurred in the Python script."));
            }
            resolve(result);
        });

        python.stderr.on('data', (data) => {
            console.error(`Python stderr: ${data}`);
        });
    });
}

module.exports = {
    predictHealthRisk
};