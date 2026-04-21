import './About.css'

function PyConBusan() {
  
  return (
    <div className="about-page">
      <div className="about-container">

        <h1 className="about-heading">🛥️ 파이콘 부산이란 🏖️</h1>

        <section className="about-section">
          <p className="about-text">
            파이콘 부산 2026 — 부산에 처음으로 파이썬 축제가 열립니다!
            파이콘은 세계 각국의 파이썬 프로그래밍 언어 커뮤니티에서 주관하는 비영리 컨퍼런스입니다.
            파이썬 프로그래밍 언어를 사용하는 사용자들이 함께 지식을 공유하고 네트워킹하는
            커뮤니티 중심의 기술 컨퍼런스입니다. 발표자, 참가자, 자원봉사자 모두가 금전적 보상 없이
            순수하게 파이썬 생태계 활성화를 위해 모이는 행사입니다.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">Weave with Python</h2>

          <p className="about-text">
            2014년 한국에서 첫 PyCon이 열린 이후 파이써니스타들은 PyCon이라는 만남의 장에서
            Python이라는 공통점을 바탕으로 서로의 순간을 나누고 새로운 경험을 만들어왔습니다.
          </p>

          <p className="about-text">
            2025년 PyCon.KR의 슬로건은 <strong>Weave with Python</strong> 입니다.
            Python은 단순한 프로그래밍 언어를 넘어 사람과 기술,
            정보와 아이디어를 연결하는 도구입니다.
          </p>

          <p className="about-text">
            이번 슬로건에는 Python을 통해 세상을 연결하고 함께 만드는
            창의적인 가능성을 담았습니다.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">행사 정보</h2>

          <div className="event-info">

            <div className="event-item">
              <strong>📅 일정</strong>
              <p>May 9 (Sat) 09:00 ~ 19:00</p>
            </div>

            <div className="event-item">
              <strong>📍 장소</strong>
              <p>
                Busan Digital Innovation Academy <br/>
                부산 해운대구 센텀동로 41 부산디지털혁신아카데미 <br/>
                6층, 7층
              </p>
            </div>

            <div className="event-item">
              <strong>🎟 등록</strong>
              <p>April 2 (Thu) 12:00 ~ May 8 (Fri) 23:30</p>
            </div>

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
          style={{ border: 0, overflow: "hidden" }}
          scrolling="no"
        ></iframe>
      </div>

      <div className="map-buttons">
        <a
          href="https://kko.to/LzPRU39grt"
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn"
          style={{ backgroundColor: "#FEE500", color: "#000" }}
        >
          카카오맵에서 열기
        </a>

        <a
          href="https://naver.me/59UjHr3h"
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn"
          style={{ backgroundColor: "#03C75A", color: "#fff" }}
        >
          네이버 지도에서 열기
        </a>

        <a
          href="https://maps.app.goo.gl/8wiKDJtZwAts659B6"
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn"
          style={{ backgroundColor: "#4285F4", color: "#fff" }}
        >
          구글 지도에서 열기
        </a>
      </div>

    </section>
      </div>
    </div>
  )
}

export default PyConBusan