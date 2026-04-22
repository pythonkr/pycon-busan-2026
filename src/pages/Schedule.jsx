import React from "react";
import "./schedule.css";
import { schedule } from "../data/schedule";

function TimeRange({ start, end }) {
  if (!end) {
    return <span className="schedule-time-stack">{start}</span>;
  }

  return (
    <span className="schedule-time-stack">
      <span>{start}</span>
      <span>~</span>
      <span>{end}</span>
    </span>
  );
}

function Schedule() {
  const rooms = [...new Set(schedule.map((s) => s.room))].filter(
    (room) => room !== "Break"
  );

  const times = [...new Set(schedule.map((s) => s.time))];

  const renderSessionCard = (session, roomLabel) => {
    if (!session) return null;

    return (
      <div className="schedule-mobile-card">
        <div className="schedule-mobile-room">{roomLabel}</div>
        <strong>{session.title}</strong>
        {session.speaker && <p>{session.speaker}</p>}
      </div>
    );
  };

  return (
    <>
      <div className="schedule-desktop">
        <table className="timetable">
          <thead>
            <tr>
              <th>Time</th>
              {rooms.map((room) => (
                <th key={room}>{room}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {times.map((time) => {
              const rowSessions = schedule.filter((s) => s.time === time);

              const breakSession = rowSessions.find((s) => s.room === "Break");

              if (breakSession) {
                return (
                  <tr key={time}>
                    <td className="time">
                      <TimeRange start={breakSession.time} end={breakSession.endTime} />
                    </td>
                    <td colSpan={rooms.length} className="break">
                      {breakSession.title}
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={time}>
                  <td className="time">
                    <TimeRange start={rowSessions[0].time} end={rowSessions[0].endTime} />
                  </td>

                  {rooms.map((room) => {
                    const session = rowSessions.find((s) => s.room === room);

                    return (
                      <td key={room}>
                        {session && (
                          <div className="session-box">
                            <strong>{session.title}</strong>
                            <p>{session.speaker}</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="schedule-mobile">
        {times.map((time) => {
          const rowSessions = schedule.filter((s) => s.time === time);
          const breakSession = rowSessions.find((s) => s.room === "Break");
          const fullSession = rowSessions.find((s) => s.type === "full");
          const parallelSessions = rowSessions.filter((s) => s.type === "parallel");

          return (
            <section key={time} className="schedule-mobile-row">
              <div className="schedule-mobile-time">
                <TimeRange
                  start={(breakSession || fullSession || parallelSessions[0] || { time }).time}
                  end={(breakSession || fullSession || parallelSessions[0] || {}).endTime}
                />
              </div>

              {breakSession ? (
                <div className="schedule-mobile-break">
                  {breakSession.title || "Break"}
                </div>
              ) : fullSession ? (
                <div className="schedule-mobile-stack">
                  {renderSessionCard(fullSession, "Main")}
                </div>
              ) : (
                <div className="schedule-mobile-stack schedule-mobile-grid">
                  {parallelSessions.map((session) => (
                    <React.Fragment key={`${time}-${session.room1?.title}-${session.room2?.title}`}>
                      {renderSessionCard(session.room1, "Room 1")}
                      {renderSessionCard(session.room2, "Room 2")}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Schedule;
