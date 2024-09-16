import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Fruit.ai</h1>
      
      <div className="services-container">
        <div className="service-card" onClick={() => navigate('/chatbot')}>
          <h2 className="service-title">Chatbot</h2>
          <p className="service-description">Interact with a personal chatbot to learn about fruits.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/translator')}>
          <h2 className="service-title">Translator</h2>
          <p className="service-description">Translate text into different regional languages.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/faq')}>
          <h2 className="service-title">FAQ</h2>
          <p className="service-description">Find frequently asked questions about fruits.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/about')}>
          <h2 className="service-title">About</h2>
          <p className="service-description">Learn more about Fruit.ai and its purpose.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
