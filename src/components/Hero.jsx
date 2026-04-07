import './Hero.css';
import logo from "../images/pycon-logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiNaver } from "react-icons/si";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content hero-card">
          <div className="hero-logo">
            <img src={logo} alt="python logo" />
          </div>
          <h1 className="hero-title">PyCon Busan 2026</h1>

          <p className="hero-subtitle">
            The Python Wave in Busan
          </p>

          <div className="hero-info">
            <div className="info-box">
              📅 May 9, 2026 (Sat) 10:00 ~ 18:30
            </div>

            <div className="info-box">
              📍 Busan Centum Venture Town
            </div>
          </div>

          <div className="hero-map-buttons">
            <a
              href="https://naver.me/59UjHr3h"
              target="_blank"
              rel="noopener noreferrer"
              className="naver-btn map-button"
            >
              <SiNaver className="map-icon" />
              Naver Map
            </a>

            <a
              href="https://maps.app.goo.gl/8wiKDJtZwAts659B6"
              target="_blank"
              rel="noopener noreferrer"
              className="google-btn map-button"
            >
              <FaMapMarkerAlt className="map-icon" />
              Google Map
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;