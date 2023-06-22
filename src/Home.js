import React from 'react';
import { Link } from 'react-router-dom';
import { TrackChangesOutlined, TrendingUpOutlined, ChatOutlined } from '@mui/icons-material';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>"Harnessing AI for Healthier Futures.<br/>A Personalized Path to Diabetes Management."</h1>
      </header>

      <section className="benefits-section">
        <div className="benefits-cards">
          <Link to="/profile" className="card">
            <div className="card-content">
              <TrackChangesOutlined className="card-icon" sx={{ fontSize: 70 }} />
              <h3>Track</h3>
              <p>Log your health metrics regularly. Track your progress. Understand the effects of diet and exercise on your health.</p>
              <p className="action">View Your Profile</p>
            </div>
          </Link>

          <Link to="/form" className="card">
            <div className="card-content">
              <TrendingUpOutlined className="card-icon" sx={{ fontSize: 70 }} />
              <h3>Analyze</h3>
              <p>Visualize your health data. See trends and patterns. Make informed decisions to improve your health based on your personalized health data.</p>
              <p className="action">Enter Data</p>
            </div>
          </Link>

          <Link to="/chat" className="card">
            <div className="card-content">
              <ChatOutlined className="card-icon" sx={{ fontSize: 70 }} />
              <h3>Consult</h3>
              <p>Chat with Dr. GPT. Ask your health-related queries. Get suggestions based on your personal health data.</p>
              <p className="action">Start Chat</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="recommendations-section">
        <h2>Diet Recommendations</h2>
        <div className="recommendations-cards">
          <div className="card">
            <img src="url_to_food_image" alt="food" />
            <p>Eat a balanced diet with plenty of fruit and vegetables.</p>
          </div>
          {/* More cards */}
        </div>
      </section>
    </div>
  );
}

export default Home;
