import pickle
import sys
import json
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

def predict_health_risk(userData):
    # Load your trained model
    model = pickle.load(open("./MLModels/diabetes.pkl", 'rb'))

    # Convert userData from JSON to pandas DataFrame
    userData = pd.DataFrame([userData])

    # Use your model to predict
    prediction = model.predict(userData)

    return prediction[0]

if __name__ == "_main_":
    # Parse the JSON string argument
    user_data_string = sys.argv[1]
    user_data = json.loads(user_data_string)

    # Call the predict function with the user data
    prediction = predict_health_risk(user_data)

    # Print the prediction (it will be sent back to Node.js as a string)
    print(prediction)