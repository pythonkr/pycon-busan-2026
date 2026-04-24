import './Hero.css';
import logo from "../images/pycon-logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../lib/analytics";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-card">
          <div className="hero-logo">
            <img src={logo} alt="PyCon Busan logo" />
          </div>

          <h1 className="hero-title">
            PyCon <span className="hero-title-accent">Busan</span>
            <br />2026
          </h1>

          <p className="hero-subtitle">{t("heroSubtitle")}</p>

          <div className="hero-divider" />

          <div className="hero-cta-buttons">
            <a
              href="https://event-us.kr/pythonkorea/event/122855"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
              onClick={() => trackEvent("ticket_cta_click", { location: "hero" })}
            >
              {t("buyTickets")} →
            </a>
          </div>

          <div className="hero-info-boxes">
            <div className="hero-info-box">
              <span className="info-icon">🗓</span>
              <div className="info-box-text">
                <span className="info-label">{t("dateLabel")}</span>
                <span className="info-value">{t("heroDate")}</span>
              </div>
            </div>
            <div className="hero-info-box">
              <span className="info-icon">📍</span>
              <div className="info-box-text">
                <span className="info-label">{t("locationLabel")}</span>
                <span className="info-value">{t("heroLocation")}</span>
                <span className="info-sub">{t("heroLocationSub")}</span>
              </div>
            </div>
          </div>

          <div className="hero-map-buttons">
            <a
              href="https://naver.me/59UjHr3h"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn naver-map-btn"
            >
              <SiNaver className="map-btn-icon" />
              {t("naverMap")}
            </a>
            <a
              href="https://maps.app.goo.gl/8wiKDJtZwAts659B6"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn google-map-btn"
            >
              <FaMapMarkerAlt className="map-btn-icon" />
              {t("googleMap")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
