import TeamItem from './TeamItem'
import './TeamList.css'

function TeamList({ members }) {
  return (
    <div className="team-list">
      {members.map((member) => (
        <TeamItem
          key={member.id}
          name={member.name}
          role={member.role}
          org={member.org}
          image={member.image}
        />
      ))}
    </div>
  )
}

export default TeamList