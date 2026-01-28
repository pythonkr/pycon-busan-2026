import TimetableItem from './TimetableItem';
import './TimetableList.css';

function TimetableList({ sessions }) {
  return (
    <div className="timetable-list">
      {sessions.map((session) => (
        <TimetableItem
          key={session.id}
          time={session.time}
          title={session.title}
          speaker={session.speaker}
          room={session.room}
        />
      ))}
    </div>
  );
}

export default TimetableList;
