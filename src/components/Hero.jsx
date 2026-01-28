import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">PyCon Busan 2026</h1>
          <p className="hero-subtitle">
            부산에서 만나는 파이썬 개발자들의 축제
          </p>
          <p className="hero-date">2026년 개최 예정</p>
          <a
            href="#tickets"
            className="hero-cta-button"
            onClick={(e) => {
              e.preventDefault();
              alert('티켓 판매는 곧 시작됩니다!');
            }}
          >
            Buy Tickets
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
