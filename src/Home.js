import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, PersonOutlined, BarChartOutlined } from '@mui/icons-material';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to HealthApp</h1>
        <p>Your personal health companion. Track and visualize your health data to gain insights about your well-being.</p>
      </header>
      
      <section className="benefits-section">
        <h2>Why HealthApp?</h2>
        <div className="benefits-cards">
          <div className="card">
            <div className="front">
              <HomeOutlined className="card-icon" />
            </div>
            <div className="back">
              <h3>Track</h3>
              <p>Log your health metrics regularly.</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <PersonOutlined className="card-icon" />
            </div>
            <div className="back">
              <h3>Analyze</h3>
              <p>Visualize your health data to track your progress.</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <BarChartOutlined className="card-icon" />
            </div>
            <div className="back">
              <h3>Improve</h3>
              <p>Make informed decisions to improve your health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="actions-section">
        <h2>Get Started Now</h2>
        <div className="actions-cards">
          <Link to="/profile" className="card action-card">
            <h3>View Profile</h3>
            <p>Check your profile and health stats.</p>
          </Link>
          <Link to="/form" className="card action-card">
            <h3>Enter Data</h3>
            <p>Log new health data.</p>
          </Link>
          <Link to="/chart" className="card action-card">
            <h3>Visualize Data</h3>
            <p>See your health charts.</p>
          </Link>
        </div>
      </section>

      <section className="recommendations-section">
        <h2>Diet Recommendations</h2>
        {/* More recommendations */}
        <div className="recommendations-cards">
          <div className="card">
            <img src="url_to_food_image" alt="food" />
            <p>Eat a balanced diet with plenty of fruit and vegetables</p>
          </div>
          {/* More cards */}
        </div>
      </section>
    </div>
  );
}

export default Home;