import { useTranslation } from 'react-i18next';
import TeamList from '../components/TeamList';
import { team } from '../data/team';
import './About.css';

function Team() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-heading">{t('teamPageHeading')}</h1>
        <p className="about-description">{t('teamPageDesc')}</p>
        <TeamList members={team} />
      </div>
    </div>
  );
}

export default Team;
