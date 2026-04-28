import { useTranslation } from "react-i18next";
import CommunityList from "../components/CommunityList";
import { communities } from "../data/communities";
import "./About.css";

function Communities() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-heading">{t("communitiesHeading")}</h1>
        <p className="about-description">{t("communitiesDesc")}</p>
        <CommunityList communities={communities} />
      </div>
    </div>
  );
}

export default Communities;
