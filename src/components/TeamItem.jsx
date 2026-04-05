import './TeamItem.css'

function TeamItem({ name, role, org, image }) {
  return (
    <div className="team-item">
      <img src={image} alt={name} className="team-avatar" />

      <div className="team-details">
        <h3 className="team-name">{name}</h3>

        <div className="team-meta">
          <span className="team-role">{role}</span>
          <span className="team-org">{org}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamItem