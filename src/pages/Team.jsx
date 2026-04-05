import TeamList from '../components/TeamList'
import { team } from '../data/team'
import './About.css'

function Team() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-heading">Organizing Team</h1>

        <p className="about-description">
          PyCon Busan 2026을 준비하는 조직 위원회입니다.
        </p>

        <TeamList members={team} />
      </div>
    </div>
  )
}

export default Team