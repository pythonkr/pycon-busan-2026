import React from 'react'
import "./Sponsor.css";

function Prospectus() {

  return (
    <div className="sponsor-page">

      {/* Header */}
      <section className="sponsor-hero">
        <img
          src="/images/sponsor_logo_lg.png"
          alt="Sponsor Logo"
          className="sponsor-logo"
        />

        <p className="sponsor-date">May 27 – Oct 13, 2026</p>

        <div className="sponsor-buttons">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Become a Sponsor
          </a>

          <a
            href="/sponsor-guide.pdf"
            download
            className="btn-outline"
          >
            Download Sponsor Guide
          </a>
        </div>

        <p className="sponsor-contact">
          Sponsor inquiries:{" "}
          <a href="mailto:sponsor@pycon.kr">sponsor@pycon.kr</a>
        </p>

      </section>
      


      {/* Meaning */}
      <section className="sponsor-info">

        <h2>Why Sponsor PyCon Busan?</h2>

        <div className="info-grid">
          <div>
            <h3>Community Event</h3>
            <p>
              PyCon Busan is a community-driven conference that promotes the
              Python ecosystem and open source collaboration.
            </p>
          </div>

          <div>
            <h3>Non-profit</h3>
            <p>
              All organizers and volunteers contribute without financial
              benefit to support the Python community.
            </p>
          </div>

          <div>
            <h3>Support Developers</h3>
            <p>
              Sponsorship helps grow the developer community and creates
              opportunities to meet talented engineers.
            </p>
          </div>
        </div>

      </section>


      {/* Benefits */}
      <section className="sponsor-benefits">

        <h2>Sponsor Benefits</h2>

        <div className="benefit-grid">

          <div className="benefit-card">
            <h3>Booth</h3>
            <p>Promote your company, recruit developers, and host events.</p>
          </div>

          <div className="benefit-card">
            <h3>Sponsor Session</h3>
            <p>Present your technology or engineering culture.</p>
          </div>

          <div className="benefit-card">
            <h3>Logo Exposure</h3>
            <p>Your logo appears on the website and conference materials.</p>
          </div>

          <div className="benefit-card">
            <h3>Tickets</h3>
            <p>Receive conference tickets depending on sponsor level.</p>
          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="sponsor-faq">

        <h2>FAQ</h2>

        <details>
          <summary>How are sponsors selected?</summary>
          <p>Sponsors are confirmed once the payment is completed.</p>
        </details>

        <details>
          <summary>Where is the sponsorship money used?</summary>
          <p>
            It supports venue rental, speaker travel, recording,
            event operations, and conference merchandise.
          </p>
        </details>

        <details>
          <summary>Can sponsors run booths?</summary>
          <p>Yes, sponsors may run booths to showcase their company.</p>
        </details>

      </section>

    </div>
  );
}

export default Prospectus
