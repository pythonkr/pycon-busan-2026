import { useTranslation } from 'react-i18next';
import TimetableList from '../components/TimetableList';
import { schedule } from '../data/schedule';
import './Timetable.css';

function Timetable() {
  const { t } = useTranslation();

  return (
    <div className="timetable-page">
      <div className="timetable-container">
        <h1 className="timetable-heading">{t('timetableHeading')}</h1>
        <p className="timetable-description">{t('timetableDesc')}</p>
        <TimetableList sessions={schedule} />
      </div>
    </div>
  );
}

export default Timetable;
