import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";


function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const { t, i18n } = useTranslation();

  const closeMenu = () => setOpenMenu(null);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          {t("logo")}
        </Link>

        <ul className="navbar-menu">

          {/* ABOUT */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={closeMenu}
          >
            <Link to="/pyconbusan" className="navbar-link">
              {t("about")}
            </Link>

            {openMenu === "about" && (
              <ul className="dropdown-menu">
                <li><Link to="/pyconbusan" className="dropdown-link">{t("pycon")}</Link></li>
                <li><Link to="/safety" className="dropdown-link">{t("health")}</Link></li>
                <li>
                  <a
                    href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-link"
                  >
                    {t("conduct")}
                  </a>
                </li>
                <li><Link to="/volunteer" className="dropdown-link">{t("volunteer")}</Link></li>
                <li><Link to="/team" className="dropdown-link">{t("team")}</Link></li>
              </ul>
            )}
          </li>

          {/* PROGRAM */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("program")}
            onMouseLeave={closeMenu}
          >
            <Link to="/timetable" className="navbar-link">
              {t("program")}
            </Link>

            {openMenu === "program" && (
              <ul className="dropdown-menu">
                <li><Link to="/timetable" className="dropdown-link">{t("timetable")}</Link></li>
                <li><Link to="/sprint" className="dropdown-link">{t("sprint")}</Link></li>
                <li><Link to="/lighttalk" className="dropdown-link">{t("lightning")}</Link></li>
              </ul>
            )}
          </li>

          {/* SESSION */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("session")}
            onMouseLeave={closeMenu}
          >
            <Link to="/session" className="navbar-link">
              {t("session")}
            </Link>

            {openMenu === "session" && (
              <ul className="dropdown-menu">
                <li><Link to="/schedule" className="dropdown-link">{t("schedule")}</Link></li>
                <li><Link to="/keynotes" className="dropdown-link">{t("keynotes")}</Link></li>
                <li><Link to="/session" className="dropdown-link">{t("session")}</Link></li>
              </ul>
            )}
          </li>

          {/* FINANCIAL AID */}
          <li>
            <Link to="/finance" className="navbar-link">
              {t("financialAid")}
            </Link>
          </li>

          {/* STORE */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("store")}
            onMouseLeave={closeMenu}
          >
            <Link to="/tickets" className="navbar-link">
              {t("store")}
            </Link>

            {openMenu === "store" && (
              <ul className="dropdown-menu">
                <li><Link to="/tickets" className="dropdown-link">{t("tickets")}</Link></li>
                <li><Link to="/tutorial" className="dropdown-link">{t("tutorial")}</Link></li>
              </ul>
            )}
          </li>

          {/* SPONSOR */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenMenu("sponsor")}
            onMouseLeave={closeMenu}
          >
            <Link to="/prospectus" className="navbar-link">
              {t("sponsor")}
            </Link>

            {openMenu === "sponsor" && (
              <ul className="dropdown-menu">
                <li><Link to="/prospectus" className="dropdown-link">{t("prospectus")}</Link></li>
                <li><Link to="/patrons" className="dropdown-link">{t("patrons")}</Link></li>
              </ul>
            )}
          </li>

          {/* LANGUAGE SWITCH */}
          <li>
            <div className="lang-switch">
              <div
                className={`lang-option ${i18n.language === "kr" ? "active" : ""}`}
                onClick={() => i18n.changeLanguage("kr")}
              >
                KR
              </div>

              <div
                className={`lang-option ${i18n.language === "en" ? "active" : ""}`}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </div>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;