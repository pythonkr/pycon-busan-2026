import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { speakerAvatars } from '../data/speakerAvatars';
import './TimetableList.css';

function SessionCell({ title, speaker, speakerEn, code, isEn }) {
  const avatarUrl = code ? speakerAvatars[code] : null;
  const speakerLabel = isEn && speakerEn != null ? speakerEn : speaker;

  const body = (
    <div className="tt-session">
      <div className="tt-session-title">{title}</div>
      {speakerLabel && (
        <div className={`tt-session-speaker ${avatarUrl ? 'has-avatar' : ''}`}>
          {avatarUrl && (
            <img
              className="tt-session-avatar"
              src={avatarUrl}
              alt={speakerLabel}
              loading="lazy"
            />
          )}
          <span>{speakerLabel}</span>
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
  const isEn = i18n.language?.startsWith('en');

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
                  <td className="tt-td tt-cell-full">
                    <SessionCell
                      title={title(row)}
                      speaker={row.speaker}
                      speakerEn={row.speakerEn}
                      code={row.code}
                      isEn={isEn}
                    />
                  </td>
                  <td className="tt-td tt-cell-empty"></td>
                </tr>
              );
            }

            if (row.type === 'parallel') {
              return (
                <tr key={idx} className="tt-row tt-row-parallel">
                  <td className="tt-td tt-time">
                    <TimeRange start={row.time} end={row.endTime} />
                  </td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell
                      title={roomTitle(row.room1)}
                      speaker={row.room1.speaker}
                      speakerEn={row.room1.speakerEn}
                      code={row.room1.code}
                      isEn={isEn}
                    />
                  </td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell
                      title={roomTitle(row.room2)}
                      speaker={row.room2.speaker}
                      speakerEn={row.room2.speakerEn}
                      code={row.room2.code}
                      isEn={isEn}
                    />
                  </td>
                </tr>
              );
            }

            return (
              <tr key={idx} className="tt-row tt-row-break">
                <td className="tt-td tt-time tt-time-break">
                  <TimeRange start={row.time} end={row.endTime} />
                </td>
                <td className="tt-td tt-cell-break" colSpan={2}>
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
