import React from "react";
import "./schedule.css";
import { schedule } from "../data/schedule";

function Schedule() {
  const rooms = [...new Set(schedule.map((s) => s.room))].filter(
    (room) => room !== "Break"
  );

  const times = [...new Set(schedule.map((s) => s.time))];

  return (
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
                <td className="time">{time}</td>
                <td colSpan={rooms.length} className="break">
                  {breakSession.title}
                </td>
              </tr>
            );
          }

          return (
            <tr key={time}>
              <td className="time">{time}</td>

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
  );
}

export default Schedule;