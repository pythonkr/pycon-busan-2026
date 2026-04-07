import './About.css';

function Sprint() {
  return (
    <div className="about-page">
      <div className="about-container">

        <h1 className="about-heading">스프린트 참가자 모집</h1>

        <section className="about-section">
          <p className="about-text">
            스프린트는 관심있는 오픈소스 프로젝트를 같은 장소에 모여
            집중적으로 개발하는 자리입니다. 새로운 동료를 만나고,
            오픈소스에서 얻을 수 있는 경험과 지식을 나눌 수 있는 시간입니다.
            처음 참여하신다고요? 문제 없습니다.
            해당 프로젝트를 주도적으로 개발하는 분에게 배울 수 있는 시간이 될 것입니다.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">📅 일정</h2>

          <div className="event-info">

            <div className="event-item">
              <strong>🙋‍♀ 모집 기간 (KST)</strong>
              <p>2026.05.06 (수) - 2026.08.14 (금)</p>
            </div>

            <div className="event-item">
              <strong>🗓 스프린트 진행일 (KST)</strong>
              <p>2026.08.14 (금)</p>
            </div>

            <div className="event-item">
              <strong>🏢 위치</strong>
              <p>somewhere</p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">스프린트 목록</h2>

          <div className="sprint-list">

            <div className="sprint-item">
              <h3>Braillify</h3>
              <p>
                국내 최초 오픈소스 크로스 플랫폼 점역(점자 → 한글) 라이브러리입니다.
                Rust로 코어를 작성하고 Python, Node.js로 배포하여 성능과 범용성을
                모두 잡은 프로젝트입니다. 2024 개정 한국 점자 규정을 기반으로
                점자를 한글로 변환합니다.
              </p>
            </div>

            <div className="sprint-item">
              <h3>CPython</h3>
              <p>
                Python 프로그래밍 언어의 참조 구현체입니다.
                C와 Python으로 작성되어 있으며 가장 널리 사용되는 Python 구현체입니다.
                이번 스프린트에서는 함께 해결할 수 있는 이슈를 찾아 기여합니다.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Sprint;