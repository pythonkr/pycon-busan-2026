import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../lib/analytics";

const SPONSOR_ENABLED = false;

const CODE_OF_CONDUCT_URL =
  "https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html";
const TICKETS_URL = "https://event-us.kr/pythonkorea/event/122855";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const { t, i18n } = useTranslation();

  const closeDropdown = () => setOpenMenu(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    trackEvent("language_toggle", { language: lang });
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
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
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        )}

        <Link to="/" className="navbar-logo">
          {t("logo")}
        </Link>

        <div className="navbar-right">
          <div className="lang-switch">
            <div
              className={`lang-option ${i18n.language === "kr" ? "active" : ""}`}
              onClick={() => changeLanguage("kr")}
            >
              KR
            </div>
            <div
              className={`lang-option ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        {!isMobile && (
          <ul className="navbar-menu">

            {/* 준비위원회 */}
            <li>
              <Link to="/team" className="navbar-link">
                {t("committee")}
              </Link>
            </li>

            {/* 세션 */}
            <li>
              <Link to="/timetable" className="navbar-link">
                {t("session")}
              </Link>
            </li>

            {/* 커뮤니티 */}
            <li>
              <Link to="/communities" className="navbar-link">
                {t("communities")}
              </Link>
            </li>

            {/* 티켓 */}
            <li>
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
              >
                {t("tickets")}
              </a>
            </li>

            {/* 행동 강령 */}
            <li>
              <a
                href={CODE_OF_CONDUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
              >
                {t("conduct")}
              </a>
            </li>

            {/* 후원사 – 확정 후 SPONSOR_ENABLED = true 로 변경 */}
            {SPONSOR_ENABLED && (
              <li
                className="dropdown"
                onMouseEnter={() => setOpenMenu("sponsor")}
                onMouseLeave={closeDropdown}
              >
                <Link to="/patrons" className="navbar-link">
                  {t("sponsor")}
                </Link>
                {openMenu === "sponsor" && (
                  <ul className="dropdown-menu">
                    <li><Link to="/patrons" className="dropdown-link">{t("sponsorInfo")}</Link></li>
                    <li><Link to="/prospectus" className="dropdown-link">{t("sponsorRecruit")}</Link></li>
                  </ul>
                )}
              </li>
            )}

            {/* 언어 전환 */}
            <li>
              <div className="lang-switch">
                <div
                  className={`lang-option ${i18n.language === "kr" ? "active" : ""}`}
                  onClick={() => changeLanguage("kr")}
                >
                  KR
                </div>
                <div
                  className={`lang-option ${i18n.language === "en" ? "active" : ""}`}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </div>
              </div>
            </li>

          </ul>
        )}

        {/* Mobile sidebar */}
        {isMobile && (
          <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>

            <div className="sidebar-header">
              <div className="menu-toggle" onClick={toggleMenu}>☰</div>
              <Link to="/" className="sidebar-logo" onClick={handleLinkClick}>
                {t("pycon")}
              </Link>
            </div>

            {mobileSubmenu && (
              <li className="back-btn" onClick={() => setMobileSubmenu(null)}>
                ←
              </li>
            )}

            {!mobileSubmenu && (
              <>
                <li>
                  <Link to="/team" className="navbar-link" onClick={handleLinkClick}>
                    {t("committee")}
                  </Link>
                </li>
                <li>
                  <Link to="/timetable" className="navbar-link" onClick={handleLinkClick}>
                    {t("session")}
                  </Link>
                </li>
                <li>
                  <Link to="/communities" className="navbar-link" onClick={handleLinkClick}>
                    {t("communities")}
                  </Link>
                </li>
                <li>
                  <a
                    href={TICKETS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                  >
                    {t("tickets")}
                  </a>
                </li>
                <li>
                  <a
                    href={CODE_OF_CONDUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                  >
                    {t("conduct")}
                  </a>
                </li>
                {/* 후원사 – 확정 후 SPONSOR_ENABLED = true 로 변경 */}
                {SPONSOR_ENABLED && (
                  <li onClick={() => setMobileSubmenu("sponsor")} className="navbar-link">
                    {t("sponsor")}
                  </li>
                )}
              </>
            )}

            {/* 후원사 – 확정 후 SPONSOR_ENABLED = true 로 변경 */}
            {SPONSOR_ENABLED && mobileSubmenu === "sponsor" && (
              <>
                <li><Link to="/patrons" className="navbar-link" onClick={handleLinkClick}>{t("sponsorInfo")}</Link></li>
                <li><Link to="/prospectus" className="navbar-link" onClick={handleLinkClick}>{t("sponsorRecruit")}</Link></li>
              </>
            )}

          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
