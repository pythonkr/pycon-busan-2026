import React from "react";
import { useNavigate } from "react-router";
import './SessionItem.css';

function SessionItem({ session }) {
  const navigate = useNavigate();

  const speakerImage =
    session.image ||
    (session.speakers && session.speakers.length > 0 && session.speakers[0].avatar) ||
    "";

  return (
    <div className="session-item">
      <div className="session-item-img">
      </div>
      <div className="session-item-info">
        <h4 onClick={() => navigate(`/session/${session.code}`)}>{session.title}</h4>
        <p>{session.abstract}</p>
        <div className="session-item-speakers">
          {session.speakers.map((s) => (
            <kbd key={s.code}>{s.name}</kbd>
          ))}
        </div>
        <div className="session-item-tags">
          {session.tags.map((tag) => (
            <kbd key={tag} className="tag">{tag}</kbd>
          ))}
          {session.do_not_record && <kbd className="tag">녹화 불가</kbd>}
        </div>
      </div>
    </div>
  );
}

export default SessionItem;