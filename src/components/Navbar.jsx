import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {t("PyCon Busan 2026")}
        </Link>
        <ul className="navbar-menu">
          {/* ABOUT MENU */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link to="/pyconbusan" className="navbar-link">{t("about")}</Link>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/pyconbusan" className="dropdown-link" onClick={closeMenu}>PyCon Busan 2026</Link></li>
                <li><Link to="/safety" className="dropdown-link" onClick={closeMenu}>Health and Safety</Link></li>
                <li><a href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html"
                  className="dropdown-link" onClick={closeMenu} target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
                <li><Link to="/volunteer" className="dropdown-link" onClick={closeMenu}>Volunteer</Link></li>
                <li><Link to="/team" className="dropdown-link" onClick={closeMenu}>Organizing Team</Link></li>
              </ul>
            )}

          </li>

          {/* PROGRAM MENU */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link to="/timetable" className="navbar-link">{t("program")}</Link>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/timetable" className="dropdown-link" onClick={closeMenu}>{t("timetable")}</Link></li>
                <li><Link to="/sprint" className="dropdown-link" onClick={closeMenu}>{t("sprint")}</Link></li>
                <li><Link to="/lighttalk" className="dropdown-link" onClick={closeMenu}>{t("lightning")}</Link></li>
              </ul>
            )}

          </li>

          {/* Session MENU */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link to="/session" className="navbar-link">{t("session")}</Link>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/schedule" className="dropdown-link" onClick={closeMenu}>{t("schedule")}</Link></li>
                <li><Link to="/keynotes" className="dropdown-link" onClick={closeMenu}>{t("keynotes")}</Link></li>
                <li><Link to="/session" className="dropdown-link" onClick={closeMenu}>{t("session")}</Link></li>
              </ul>
            )}

          </li>
          {/* Session MENU */}
          <li>
            <Link to="/finance" className="navbar-link">{t("financialAid")}</Link>
          </li>

          {/* Store MENU */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link to="/session" className="navbar-link">{t("store")}</Link>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/tickets" className="dropdown-link" onClick={closeMenu}>{t("tickets")}</Link></li>
                <li><Link to="/tutorial" className="dropdown-link" onClick={closeMenu}>{t("tutorial")}</Link></li>
              </ul>
            )}

          </li>

          {/* Sponsoring MENU */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <Link to="/prospectus" className="navbar-link">{t("sponsor")}</Link>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/prospectus" className="dropdown-link" onClick={closeMenu}>{t("prospectus")}</Link></li>
                <li><Link to="/patrons" className="dropdown-link" onClick={closeMenu}>{t("patrons")}</Link></li>
              </ul>
            )}

          </li>

          {/* Language MENU */}
          <li
            className={`lang-link ${i18n.language === "kr" ? "active-lang" : ""}`}
            onClick={() => {
              i18n.changeLanguage("kr");
              closeMenu();
            }}
          >
            KR
          </li>

          <li
            className={`lang-link ${i18n.language === "en" ? "active-lang" : ""}`}
            onClick={() => {
              i18n.changeLanguage("en");
              closeMenu();
            }}
          >
            EN
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
