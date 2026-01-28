import TimetableList from '../components/TimetableList';
import { schedule } from '../data/schedule';
import './Timetable.css';

function Timetable() {
  return (
    <div className="timetable-page">
      <div className="timetable-container">
        <h1 className="timetable-heading">Conference Timetable</h1>
        <p className="timetable-description">
          2026년 PyCon Busan의 다양한 세션과 일정을 확인하세요
        </p>
        <TimetableList sessions={schedule} />
      </div>
    </div>
  );
}

export default Timetable;
