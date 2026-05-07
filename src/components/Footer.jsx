import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import hostBusanLogo from "../images/host-busan.png";
import hostPythonKrLogo from "../images/host-pythonkr.png";
import organizerBipaLogo from "../images/organizer-bipa.png";
import flittoLogo from "../images/flitto-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Hosts & Organizers */}
        <div className="footer-hosts">
          <div className="footer-hosts-row">
            <span className="footer-hosts-label">{t("hostsOrganizers")}</span>
            <div className="footer-hosts-logos">
              <div className="footer-logo">
                <img src={hostBusanLogo} alt={t("hostBusanCity")} />
              </div>
              <div className="footer-logo">
                <img src={organizerBipaLogo} alt={t("organizerBipa")} />
              </div>
              <div className="footer-logo">
                <img src={hostPythonKrLogo} alt={t("hostPythonKorea")} />
              </div>
            </div>
          </div>
          <div className="footer-hosts-row footer-hosts-row--stacked">
            <span className="footer-hosts-label">{t("aiInterpretationSponsor")}</span>
            <div className="footer-hosts-logos">
              <a
                href="https://livetr.flitto.com/ko/livetr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-logo"
                aria-label={t("sponsorFlitto")}
              >
                <img src={flittoLogo} alt={t("sponsorFlitto")} />
              </a>
            </div>
          </div>
        </div>

        {/* Organization */}
        <h3 className="footer-title">{t("footerOrgName")}</h3>

        <p className="footer-info">{t("footerOrganizationInfo")}</p>
        <p className="footer-info">{t("footerContactInfo")}</p>

        {/* Policy links */}
        <div className="footer-links">
          <a href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html">
            {t("codeOfConduct")}
          </a>
          <a href="#">{t("termsOfService")}</a>
          <a href="#">{t("privacyPolicy")}</a>
        </div>

        {/* Social icons */}
        <div className="footer-social">
          <a href="mailto:seminar@python.or.kr" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>

          <a href="https://x.com/PyConKR" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://www.youtube.com/@PyConKRtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>

          <a href="https://www.instagram.com/pycon_korea/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/pyconkorea/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/pythonkr" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          {t("copyright")}
        </p>

        {/* Analytics notice */}
        <p className="footer-analytics-note">
          {t("analyticsNote")}
        </p>

      </div>
    </footer>
  );
};

export default Footer;
