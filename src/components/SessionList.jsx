import React, { useState } from "react";
import SessionItem from "./SessionItem";
import './SessionList.css';

function SessionList({ sessions }) {
  const [currentTag, setCurrentTag] = useState(null);

  const allTags = Array.from(new Set(sessions.flatMap(s => s.tags))).sort();

  const filteredSessions = currentTag
    ? sessions.filter(s => s.tags.includes(currentTag))
    : sessions;

  const toggleTag = (tag) => setCurrentTag(currentTag === tag ? null : tag);

  return (
    <div className="session-list-container">
      <div className="tag-filter-container">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={tag === currentTag ? "tag-btn selected" : "tag-btn"}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredSessions.map((session) => (
        <SessionItem key={session.code} session={session} />
      ))}
    </div>
  );
}

export default SessionList;