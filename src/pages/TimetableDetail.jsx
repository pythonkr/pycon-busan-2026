import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { findSessionByCode } from "../data/schedule";
import { sessionDetails } from "../data/sessionDetails";
import { speakerAvatars } from "../data/speakerAvatars";
import "./TimetableDetail.css";

const PLACEHOLDER_TEXT =
  "해당 정보가 아직 준비되지 않았습니다. 확정되는 대로 업데이트됩니다.";

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
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const session = findSessionByCode(code);

  if (!session) {
    return (
      <div className="tt-detail-page">
        <div className="tt-detail-container">
          <h1 className="tt-detail-title">세션을 찾을 수 없습니다</h1>
          <p className="tt-detail-abstract">
            요청하신 세션 코드 <code>{code}</code> 에 해당하는 정보가 없습니다.
          </p>
          <Link to="/timetable" className="tt-detail-back">
            ← 타임테이블로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const detail = sessionDetails[code] || {};
  const title =
    isEn && session.titleEn != null ? session.titleEn : session.title;
  const room = isEn ? session.roomEn : session.room;
  const speakerName = session.speaker || "TBD";
  const speakerInitial = speakerName.trim().slice(0, 1) || "?";
  const avatarUrl = speakerAvatars[code];

  const description = pickLang(detail.descriptionKo, detail.descriptionEn, isEn);
  const bio = pickLang(detail.bioKo, detail.bioEn, isEn);

  return (
    <div className="tt-detail-page">
      <div className="tt-detail-container">
        <Link to="/timetable" className="tt-detail-back">
          ← 타임테이블로 돌아가기
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
            <span className="meta-label">시간</span>
            <span className="meta-value">
              <TimeRange start={session.time} end={session.endTime} />
            </span>
          </div>
          <div className="meta-row">
            <span className="meta-label">장소</span>
            <span className="meta-value">{room}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">발표자</span>
            <span className="meta-value">{speakerName}</span>
          </div>
        </section>

        <section className="tt-detail-section">
          <h2 className="section-heading">세션 소개</h2>
          <div className="description-box">{description || PLACEHOLDER_TEXT}</div>
        </section>

        <section className="tt-detail-section">
          <h2 className="section-heading">발표자 소개</h2>
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
              <p className="speaker-bio">{bio || PLACEHOLDER_TEXT}</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default TimetableDetail;
