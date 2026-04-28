import { useTranslation } from 'react-i18next';
import { trackEvent } from '../lib/analytics';
import pyconLogo from '../images/pycon-logo.png';
import './About.css';

function PyConBusan() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-container">

        <img src={pyconLogo} alt="PyCon Busan 2026" className="about-logo" />
        <h1 className="about-heading">🛥️ {t('pyconBusanHeading')} 🏖️</h1>

        <section className="about-section">
          <p className="about-text">{t('pyconBusanIntro')}</p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">{t('eventInfoTitle')}</h2>

          <div className="event-info">
            <div className="event-item">
              <strong>📅 {t('eventScheduleLabel')}</strong>
              <p>{t('eventScheduleDate')}</p>
            </div>

            <div className="event-item">
              <strong>📍 {t('eventVenueLabel')}</strong>
              <p>
                {t('eventVenueDetail')}<br />
                {t('eventVenueFloor')}
              </p>
            </div>
          </div>

          <div className="event-cta">
            <a
              href="https://event-us.kr/pythonkorea/event/122855"
              target="_blank"
              rel="noopener noreferrer"
              className="event-cta-btn"
              onClick={() => trackEvent('ticket_cta_click', { location: 'pyconbusan' })}
            >
              🎫 {t('buyTickets')} →
            </a>
          </div>
        </section>

        <section className="location-hero">
          <div className="map-strip">
            <iframe
              src="https://place.map.kakao.com/placePrint.daum?confirmid=1150433453"
              title="pycon-location"
              loading="lazy"
              width="100%"
              height="420"
              style={{ border: 0, overflow: 'hidden' }}
              scrolling="no"
            />
          </div>

          <div className="map-buttons">
            <a
              href="https://kko.to/LzPRU39grt"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
              style={{ backgroundColor: '#FEE500', color: '#000' }}
            >
              {t('openKakaoMap')}
            </a>
            <a
              href="https://naver.me/59UjHr3h"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
              style={{ backgroundColor: '#03C75A', color: '#fff' }}
            >
              {t('openNaverMap')}
            </a>
            <a
              href="https://maps.app.goo.gl/8wiKDJtZwAts659B6"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
              style={{ backgroundColor: '#4285F4', color: '#fff' }}
            >
              {t('openGoogleMap')}
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default PyConBusan;
