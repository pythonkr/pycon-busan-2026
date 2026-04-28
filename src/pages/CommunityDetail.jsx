import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { communities } from "../data/communities";
import "./CommunityDetail.css";

function CommunityDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  const community = communities.find((c) => c.id === id);

  if (!community) {
    return (
      <div className="community-detail-page">
        <div className="community-detail-container">
          <h1 className="community-detail-name">{t("communityNotFound")}</h1>
          <Link to="/communities" className="community-detail-back">
            ← {t("communitiesBack")}
          </Link>
        </div>
      </div>
    );
  }

  const name = isEn ? community.name.en : community.name.ko;
  const description = isEn ? community.description.en : community.description.ko;

  return (
    <div className="community-detail-page">
      <div className="community-detail-container">
        <Link to="/communities" className="community-detail-back">
          ← {t("communitiesBack")}
        </Link>

        <div className="community-detail-header">
          {community.logo ? (
            <img
              src={community.logo}
              alt={name}
              className="community-detail-logo"
            />
          ) : (
            <div className="community-detail-logo community-detail-logo-placeholder">
              {name.charAt(0)}
            </div>
          )}
          <h1 className="community-detail-name">{name}</h1>
        </div>

        <p className="community-detail-description">{description}</p>

        {community.link && (
          <a
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
            className="community-detail-link"
          >
            {t("communityVisit")} →
          </a>
        )}
      </div>
    </div>
  );
}

export default CommunityDetail;
