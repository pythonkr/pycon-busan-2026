import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { findSessionByCode } from "../data/schedule";
import { sessionDetails } from "../data/sessionDetails";
import { speakerAvatars } from "../data/speakerAvatars";
import "./TimetableDetail.css";

function TimeRange({ start, end }) {
  if (!start) return <span>TBA</span>;
  if (!end) return <span>{start}</span>;
  return (
    <span>
      {start} ~ {end}
    </span>
  );
}

function pickLang(valKo, valEn, isEn) {
  if (isEn) return valEn || valKo || "";
  return valKo || valEn || "";
}

function TimetableDetail() {
  const { code } = useParams();
  const { t, i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const session = findSessionByCode(code);

  if (!session) {
    return (
      <div className="tt-detail-page">
        <div className="tt-detail-container">
          <h1 className="tt-detail-title">{t("timetableDetailNotFoundTitle")}</h1>
          <p className="tt-detail-abstract">
            {t("timetableDetailNotFoundDesc", { code })}
          </p>
          <Link to="/timetable" className="tt-detail-back">
            ← {t("timetableDetailBack")}
          </Link>
        </div>
      </div>
    );
  }

  const detail = sessionDetails[code] || {};
  const title =
    isEn && session.titleEn != null ? session.titleEn : session.title;
  const room = isEn ? session.roomEn : session.room;
  const speakerName = isEn && session.speakerEn != null ? session.speakerEn : session.speaker || "TBD";
  const speakerInitial = speakerName.trim().slice(0, 1) || "?";
  const avatarUrl = speakerAvatars[code];

  const description = pickLang(detail.descriptionKo, detail.descriptionEn, isEn);
  const bio = pickLang(detail.bioKo, detail.bioEn, isEn);

  return (
    <div className="tt-detail-page">
      <div className="tt-detail-container">
        <Link to="/timetable" className="tt-detail-back">
          ← {t("timetableDetailBack")}
        </Link>

        <header className="tt-detail-header">
          {session.tag && (
            <div className="tt-detail-tags">
              <kbd className={`tag tag-${session.tag}`}>{session.tag}</kbd>
            </div>
          )}
          <h1 className="tt-detail-title">{title}</h1>
        </header>

        <section className="tt-detail-meta">
          <div className="meta-row">
            <span className="meta-label">{t("timetableDetailTime")}</span>
            <span className="meta-value">
              <TimeRange start={session.time} end={session.endTime} />
            </span>
          </div>
          <div className="meta-row">
            <span className="meta-label">{t("timetableDetailLocation")}</span>
            <span className="meta-value">{room}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">{t("timetableDetailSpeaker")}</span>
            <span className="meta-value">{speakerName}</span>
          </div>
        </section>

        <section className="tt-detail-section">
          <h2 className="section-heading">{t("timetableDetailSessionIntro")}</h2>
          <div className="description-box">
            {description || t("timetableDetailPlaceholder")}
          </div>
        </section>

        <section className="tt-detail-section">
          <h2 className="section-heading">{t("timetableDetailSpeakerIntro")}</h2>
          <article className="speaker-card">
            <div className="speaker-avatar">
              {avatarUrl ? (
                <img src={avatarUrl} alt={speakerName} />
              ) : (
                <div className="speaker-avatar-placeholder">
                  {speakerInitial}
                </div>
              )}
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">{speakerName}</h3>
              <p className="speaker-bio">{bio || t("timetableDetailPlaceholder")}</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default TimetableDetail;
