import React from "react";
import "./About.css";

function Tutorial() {
  return (
    <div className="about-page">
      <div className="about-container">

        <h1 className="about-heading">🧑‍💻 Tutorials</h1>

        <section className="about-section">
          <p className="about-text">
            PyCon Busan tutorials are hands-on sessions designed to help
            participants learn practical Python skills from experienced
            developers. These sessions focus on real-world tools,
            frameworks, and workflows used in the Python ecosystem.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">Tutorial Information</h2>

          <div className="event-info">

            <div className="event-item">
              <strong>📅 Date</strong>
              <p>May 8, 2026</p>
            </div>

            <div className="event-item">
              <strong>⏰ Duration</strong>
              <p>Half-day and full-day tutorials</p>
            </div>

            <div className="event-item">
              <strong>📍 Location</strong>
              <p>Busan Digital Innovation Academy</p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">Topics</h2>

          <p className="about-text">
            Tutorials may cover topics such as:
          </p>

          <div className="event-info">

            <div className="event-item">
              <strong>🐍 Python for Beginners</strong>
              <p>Learn Python basics and best practices.</p>
            </div>

            <div className="event-item">
              <strong>📊 Data Science</strong>
              <p>Hands-on work with NumPy, Pandas, and visualization.</p>
            </div>

            <div className="event-item">
              <strong>🌐 Web Development</strong>
              <p>Build modern web apps using Django and FastAPI.</p>
            </div>

            <div className="event-item">
              <strong>⚡ Automation</strong>
              <p>Use Python to automate tasks and workflows.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Tutorial;