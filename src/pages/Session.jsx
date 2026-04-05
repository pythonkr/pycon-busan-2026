import React from "react";
import SessionList from "../components/SessionList";
import { schedule } from "../data/session";
import './Session.css';

function Session() {
  return (
    <div className="session-page">
      <div className="session-container">
        <h1 className="session-heading">Conference Sessions</h1>
        <p className="session-description">
          2026년 PyCon Busan의 다양한 세션과 일정을 확인하세요
        </p>
        <SessionList sessions={schedule} />
      </div>
    </div>
  );
}

export default Session;