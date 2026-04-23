import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { speakerAvatars } from '../data/speakerAvatars';
import './TimetableList.css';

function SessionCell({ title, speaker, code }) {
  const avatarUrl = code ? speakerAvatars[code] : null;

  const body = (
    <div className="tt-session">
      <div className="tt-session-title">{title}</div>
      {speaker && (
        <div className={`tt-session-speaker ${avatarUrl ? 'has-avatar' : ''}`}>
          {avatarUrl && (
            <img
              className="tt-session-avatar"
              src={avatarUrl}
              alt={speaker}
              loading="lazy"
            />
          )}
          <span>{speaker}</span>
        </div>
      )}
    </div>
  );

  if (!code) return body;

  return (
    <Link to={`/timetable/${code}`} className="tt-session-link">
      {body}
    </Link>
  );
}

function TimeRange({ start, end }) {
  if (!end) {
    return <span className="tt-time-stack">{start}</span>;
  }

  return (
    <span className="tt-time-stack">
      <span>{start}</span>
      <span>~</span>
      <span>{end}</span>
    </span>
  );
}

function TimetableList({ sessions }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const title = (row) => (isEn && row.titleEn != null ? row.titleEn : row.title);
  const roomTitle = (room) => (isEn && room.titleEn != null ? room.titleEn : room.title);

  return (
    <div className="tt-wrapper">
      <table className="tt-table">
        <thead>
          <tr>
            <th className="tt-th tt-th-time"></th>
            <th className="tt-th">6층 Main</th>
            <th className="tt-th">7층 Room1</th>
            <th className="tt-th">7층 Room2</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((row, idx) => {
            if (row.type === 'full') {
              return (
                <tr key={idx} className={`tt-row tt-row-full ${row.tag || ''}`}>
                  <td className="tt-td tt-time">
                    <TimeRange start={row.time} end={row.endTime} />
                  </td>
                  <td className="tt-td tt-cell-full" colSpan={3}>
                    <SessionCell title={title(row)} speaker={row.speaker} code={row.code} />
                  </td>
                </tr>
              );
            }

            if (row.type === 'parallel') {
              return (
                <tr key={idx} className="tt-row tt-row-parallel">
                  <td className="tt-td tt-time">
                    <TimeRange start={row.time} end={row.endTime} />
                  </td>
                  <td className="tt-td tt-cell-empty"></td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell title={roomTitle(row.room1)} speaker={row.room1.speaker} code={row.room1.code} />
                  </td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell title={roomTitle(row.room2)} speaker={row.room2.speaker} code={row.room2.code} />
                  </td>
                </tr>
              );
            }

            return (
              <tr key={idx} className="tt-row tt-row-break">
                <td className="tt-td tt-time tt-time-break">
                  <TimeRange start={row.time} end={row.endTime} />
                </td>
                <td className="tt-td tt-cell-break" colSpan={3}>
                  {title(row) && <span className="tt-break-label">{title(row)}</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TimetableList;
