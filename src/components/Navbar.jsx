import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // adjust path

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const closeDropdown = () => setOpenMenu(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const handleLinkClick = () => {
    setMenuOpen(false);   // close mobile menu
    setOpenMenu(null);    // close dropdown
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      setMobileSubmenu(null);
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* MENU BUTTON */}
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        )}
        <Link to="/" className="navbar-logo">
          {t("pycon")}
        </Link>
        <div className="navbar-right">

          {/* LANGUAGE (mobile only visible via CSS) */}
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



        </div>
        {!isMobile && (
          <ul className="navbar-menu">

            {/* ABOUT */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenMenu("about")}
              onMouseLeave={closeDropdown}
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
                      {t("codeOfConduct")}
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
              onMouseLeave={closeDropdown}
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
              onMouseLeave={closeDropdown}
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
            {/* TICKETS */}
            <li className="dropdown">
              <a
                href="https://event-us.kr/pythonkorea/event/122855"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
              >
                {t("tickets")}
              </a>
            </li>

            {/* SPONSOR */}
            <li
              className="dropdown"
              onMouseEnter={() => setOpenMenu("sponsor")}
              onMouseLeave={closeDropdown}
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
        )}
        {isMobile && (
          <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>

          {/* SIDEBAR HEADER */}
          <div className="sidebar-header">
            <div className="menu-toggle" onClick={toggleMenu}>
              ☰
            </div>
            <Link to="/" className="sidebar-logo" onClick={handleLinkClick}>
              {t("pycon")}
            </Link>
          </div>

            {/* BACK BUTTON */}
            {mobileSubmenu && (
              <li className="back-btn" onClick={() => setMobileSubmenu(null)}>
                ← 
              </li>
            )}

            {/* MAIN MENU */}
            {!mobileSubmenu && (
              <>
                <li onClick={() => setMobileSubmenu("about")} className="navbar-link">{t("about")}</li>
                <li onClick={() => setMobileSubmenu("program")} className="navbar-link">{t("program")}</li>
                <li>
                  <a
                    href="https://event-us.kr/pythonkorea/event/122855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                  >
                    {t("tickets")}
                  </a>
                </li>
                <li onClick={() => setMobileSubmenu("session")} className="navbar-link">{t("session")}</li>
                <li onClick={() => setMobileSubmenu("sponsor")} className="navbar-link">{t("sponsor")}</li>
              </>
            )}

            {/* SUBMENUS */}
            {mobileSubmenu === "about" && (
              <>
                <li><Link to="/pyconbusan" className="navbar-link" onClick={handleLinkClick}>{t("pycon")}</Link></li>
                <li><Link to="/safety" className="navbar-link" onClick={handleLinkClick}>{t("health")}</Link></li>
                <li><Link to="/volunteer" className="navbar-link" onClick={handleLinkClick}>{t("volunteer")}</Link></li>
                <li><Link to="/team" className="navbar-link" onClick={handleLinkClick}>{t("team")}</Link></li>
              </>
            )}

            {mobileSubmenu === "program" && (
              <>
                <li><Link to="/timetable" className="navbar-link" onClick={handleLinkClick}>{t("timetable")}</Link></li>
                <li><Link to="/sprint" className="navbar-link" onClick={handleLinkClick}>{t("sprint")}</Link></li>
                <li><Link to="/lighttalk" className="navbar-link" onClick={handleLinkClick}>{t("lightning")}</Link></li>
              </>
            )}

            {mobileSubmenu === "session" && (
              <>
                <li><Link to="/schedule" className="navbar-link" onClick={handleLinkClick}>{t("schedule")}</Link></li>
                <li><Link to="/keynotes" className="navbar-link" onClick={handleLinkClick}>{t("keynotes")}</Link></li>
                <li><Link to="/session" className="navbar-link" onClick={handleLinkClick}>{t("session")}</Link></li>
              </>
            )}

            {mobileSubmenu === "sponsor" && (
              <>
                <li><Link to="/prospectus" className="navbar-link" onClick={handleLinkClick}>{t("prospectus")}</Link></li>
                <li><Link to="/patrons" className="navbar-link" onClick={handleLinkClick}>{t("patrons")}</Link></li>
              </>
            )}

          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;