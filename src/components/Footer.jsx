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

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Organization */}
        <h3 className="footer-title">{t("pycon")}</h3>

        <p className="footer-info">
          {t("location")} |
          {t("representative")} : |
          {t("phone")} : |
          {t("businessNumber")} :
        </p>

        <p className="footer-info">
          {t("mailOrderNumber")} : |
          {t("hosting")} : {t("aws")} |
          {t("contact")} : @pycon.kr
        </p>

        <button className="footer-btn">
          {t("checkBusiness")}
        </button>

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
          <a href="mailto:contact@pycon.kr" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>

          <a href="https://www.youtube.com/results?search_query=pycon+busan" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>

          <a href="https://x.com/home?lang=ko" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://github.com/pythonkr" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.instagram.com/pythonkr/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/pythonkr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          {t("copyright")}
        </p>

      </div>
    </footer>
  );
};

export default Footer;