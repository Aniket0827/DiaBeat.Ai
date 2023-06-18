import sys
import pandas as pd
import pickle

# Load the model
model = pickle.load(open("diabetes.pkl", "rb"))

# Get user data from command line arguments
user_data = pd.DataFrame([float(num) for num in sys.argv[1:]]).T

# Make a prediction
prediction = model.predict(user_data)

# Print the prediction
print(prediction[0])