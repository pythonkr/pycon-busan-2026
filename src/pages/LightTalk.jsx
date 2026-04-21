import React from 'react';
import './About.css';

const LightTalk = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-heading">Light Talk</h1>
        <p className="about-description">
          Join our Light Talk sessions! Connect with the community via Telegram.
        </p>
        <p className="about-text">
          Telegram account: <a 
            href="https://t.me/+NCGpNg_U_Ws5Mjk9" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Click here to join
          </a>
        </p>
      </div>
    </div>
  );
};

export default LightTalk;