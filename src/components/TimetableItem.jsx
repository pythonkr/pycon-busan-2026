import './TimetableItem.css';

function TimetableItem({ time, title, speaker, room }) {
  return (
    <div className="timetable-item">
      <div className="timetable-time">{time}</div>
      <div className="timetable-details">
        <h3 className="timetable-title">{title}</h3>
        <div className="timetable-meta">
          <span className="timetable-speaker">{speaker}</span>
          <span className="timetable-room">{room}</span>
        </div>
      </div>
    </div>
  );
}

export default TimetableItem;
