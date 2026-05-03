import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CommunityItem.css";

function CommunityItem({ community }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const name = isEn ? community.name.en : community.name.ko;

  return (
    <Link to={`/communities/${community.id}`} className="community-item">
      {community.logo ? (
        <img src={community.logo} alt={name} className="community-logo" />
      ) : (
        <div className="community-logo community-logo-placeholder">
          {name.charAt(0)}
        </div>
      )}
      <h3 className="community-name">{name}</h3>
    </Link>
  );
}

export default CommunityItem;
