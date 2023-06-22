import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Profile.css';

function Profile() {
  const location = useLocation();
  const user = location.state?.user;

  const getRecommendations = (user) => {
    let recommendations = '';
    if (user) {
      if (user.BMI < 18.5) {
        recommendations += 'Your BMI is less than 18.5, you are underweight. ';
      } else if (user.BMI >= 18.5 && user.BMI <= 24.9) {
        recommendations += 'Your BMI is normal. ';
      } else if (user.BMI >= 25 && user.BMI <= 29.9) {
        recommendations += 'Your BMI is overweight. ';
      } else {
        recommendations += 'Your BMI indicates obesity. ';
      }

      if (user.Diabetes === 0) {
        recommendations += 'You are not likely to have diabetes.';
      } else {
        recommendations += 'You are likely to have diabetes.';
      }
    }

    return recommendations;
  };

  const chartData = user 
    ? Object.keys(user)
      .filter(key => !isNaN(user[key]))
      .map(key => ({
        name: key,
        value: parseFloat(user[key])
      })) 
    : [];

  return (
    <div className="profile-page">
      <h2 className="profile-heading">My Profile</h2>
      <div className="main-container">
        <div className="profile-container">
          {chartData.length ? (
            <BarChart
              className="user-chart"
              layout="vertical"
              width={950}
              height={600}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 14, fill: 'white', fontWeight: 'bold' }} /> 
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          ) : (
            <h2>No data available, First Fill the Form</h2>
          )}
        </div>
        <div className="card-container">
          <div className="prediction-card">
            <h2>Predictions</h2>
            <p>{user?.Diabetes === 0 ? 'You are not likely to have diabetes.' : 'You are likely to have diabetes.'}</p>
          </div>
          <div className="recommendation-card">
            <h2>Health Recommendations</h2>
            <p>{getRecommendations(user)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
