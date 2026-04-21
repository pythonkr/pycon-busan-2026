import { useTranslation } from 'react-i18next';
import './TimetableList.css';

function SessionCell({ title, speaker }) {
  return (
    <div className="tt-session">
      <div className="tt-session-title">{title}</div>
      {speaker && <div className="tt-session-speaker">{speaker}</div>}
    </div>
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
                  <td className="tt-td tt-time">{row.time}</td>
                  <td className="tt-td tt-cell-full" colSpan={3}>
                    <SessionCell title={title(row)} speaker={row.speaker} />
                  </td>
                </tr>
              );
            }

            if (row.type === 'parallel') {
              return (
                <tr key={idx} className="tt-row tt-row-parallel">
                  <td className="tt-td tt-time">{row.time}</td>
                  <td className="tt-td tt-cell-empty"></td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell title={roomTitle(row.room1)} speaker={row.room1.speaker} />
                  </td>
                  <td className="tt-td tt-cell-session">
                    <SessionCell title={roomTitle(row.room2)} speaker={row.room2.speaker} />
                  </td>
                </tr>
              );
            }

            return (
              <tr key={idx} className="tt-row tt-row-break">
                <td className="tt-td tt-time tt-time-break">{row.time}</td>
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
