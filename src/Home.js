import React from 'react';
import { Link } from 'react-router-dom';
import { TrackChangesOutlined, TrendingUpOutlined, ChatOutlined } from '@mui/icons-material';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>"Harnessing AI for Healthier Futures. A Personalized Path to Diabetes Management."</h1>
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
          <Link to="/diet1" className="rec-card">
            <img src="https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2020/01/chicken-stir-fry-1200-1275.jpg?w=1200&ssl=1" alt="Diet 1"/>
            <div className="rec-card-content">
              <h3>Diet 1</h3>
              <p>Beneficial diet 1 for diabetes patients.</p>
            </div>
          </Link>

          <Link to="/diet2" className="rec-card">
            <img src="https://media.healthyfood.com/wp-content/uploads/2016/09/Baked-salmon-with-roasted-veges-2000x1280.jpg" alt="Diet 2"/>
            <div className="rec-card-content">
              <h3>Diet 2</h3>
              <p>Beneficial diet 2 for diabetes patients.</p>
            </div>
          </Link>

          <Link to="/diet3" className="rec-card">
            <img src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/5-oct/Meal_Plate_Dal_Makhani_Paneer_Makhani_Carrot_Salad_Vegetable_Pulao_Phulka-2.jpg" alt="Diet 3"/>
            <div className="rec-card-content">
              <h3>Diet 3</h3>
              <p>Beneficial diet 3 for diabetes patients.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
