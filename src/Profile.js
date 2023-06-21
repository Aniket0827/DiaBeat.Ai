import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const location = useLocation();
  const user = location.state?.user; // Use optional chaining

  const getRecommendations = (user) => {
    let recommendations = '';
    // Ensure user object is not null or undefined before accessing its properties
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

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Your Profile</h2>
        {user ? Object.keys(user).map((key, i) => (
          <p key={i}>{key}: {user[key]}</p>
        )) : <p>No data available</p>}
        <h2>Health Recommendations</h2>
        <p>{getRecommendations(user)}</p>
      </div>
    </div>
  );
}

export default Profile;