import sys
import pandas as pd
import pickle
import json

# Load the model
model = pickle.load(open("./MLModels/diabetes.pkl", "rb"))

# Get user data from command line arguments
user_data = pd.DataFrame([float(num) for num in sys.argv[1:]]).T

# Make a prediction
result = model.predict(user_data)

# Convert result to JSON and print
response = {}
if(int(result) == 1):
    response['result'] = "Patient has a high risk of Kidney Disease, please consult your doctor immediately"
else:
    response['result'] = "Patient has a low risk of Kidney Disease"
    
print(json.dumps(response))