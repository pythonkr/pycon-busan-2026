import { useTranslation } from 'react-i18next';
import './TeamItem.css';

function TeamItem({ name, role, org, image }) {
  const { t } = useTranslation();

  const roleLabel = t(role, { defaultValue: role });

  return (
    <div className="team-item">
      {image ? (
        <img src={image} alt={name} className="team-avatar" />
      ) : (
        <div className="team-avatar team-avatar-placeholder">
          {name.charAt(0)}
        </div>
      )}

      <div className="team-details">
        <h3 className="team-name">{name}</h3>

        <div className="team-meta">
          <span className="team-role">{roleLabel}</span>
          {org && <span className="team-org">{org}</span>}
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
