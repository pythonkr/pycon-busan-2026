import React from "react";
import "./Footer.css";
import { FaEnvelope, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Organization */}
        <h3 className="footer-title">Python Busan</h3>

        <p className="footer-info">
          Busan, Republic of Korea |
          Representative :  |
          Phone Number :  |
          Business Registration Number :
        </p>

        <p className="footer-info">
          Mail Order Sales Registration Number :  |
          Hosting Provider : Amazon Web Services(Korea LLC) |
          Contact : @pycon.kr
        </p>

        <button className="footer-btn">
          {t("checkBusiness")}
        </button>

        {/* Policy links */}
        <div className="footer-links">
          <a href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html">{t("codeOfConduct")}</a>
          <a href="#">{t("termsOfService")}</a>
          <a href="#">{t("privacyPolicy")}</a>
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
          © 2026, Python Busan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;