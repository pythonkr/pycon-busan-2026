import React from "react";
import "./Sponsor.css";

const patrons = [
  {
    name: "박조은",
    message: "Now is better than never.",
  },
  {
    name: "파이썬 커뮤니티와 함께 성장하며, 더 많은 이들에게 기회가 되기를 응원합니다!",
    message: "",
  },
  {
    name: "김강인",
    message: "파이썬 화이팅",
  },
];

const Patrons = () => {
  return (
    <div className="patrons-page">
      <h1 className="patrons-title">Patrons</h1>

      <p className="patrons-description">
        This is a list of patrons who supported PyCon Korea 2025. <br />
        Thank you for your support.
      </p>

      <div className="patrons-list">
        {patrons.map((patron, index) => (
          <div key={index} className="patron-card">
            <h3 className="patron-name">{patron.name}</h3>

            {patron.message && (
              <p className="patron-message">{patron.message}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patrons;