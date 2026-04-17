import React from "react";
import "./Footer.css";
import { FaEnvelope, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Organization */}
        <h3 className="footer-title">{t("pycon")}</h3>

        <p className="footer-info">
          {t("location")} |
          {t("representative")} :  | {t("phone")} :  | {t("businessNumber")} :
        </p>

        <p className="footer-info">
          {t("mailOrderNumber")} :  | {t("hosting")} : {t("aws")} | {t("contact")} : @pycon.kr
        </p>

        <button className="footer-btn">
          {t("checkBusiness")}
        </button>

        {/* Policy links */}
        <div className="footer-links">
          <a href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html">{t("codeOfConduct")}</a>
          <a href="#">{t("terms")}</a>
          <a href="#">{t("privacy")}</a>
        </div>

        {/* Social icons */}
        <div className="footer-social">
          <FaEnvelope to={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}/>
          <FaYoutube to={"https://www.youtube.com/results?search_query=pycon+busan"} />
          <FaXTwitter to={"https://x.com/home?lang=ko"}/>
          <FaGithub to={"https://github.com/pythonkr"}/>
          <FaInstagram to={"https://www.instagram.com/pythonkr/"}/>
          <FaLinkedin to={"https://www.linkedin.com/company/pythonkr/"}/>
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