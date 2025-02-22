import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Link, useNavigate, NavigateFunction } from "react-router-dom";

import Header from "./Header";
import "../styles/ourteam.css";
import cloud from "../components/officeHours/Cloud.png";

// import { render } from "@testing-library/react";

type Mentor = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const OurTeam = () => {

  const { t } = useTranslation("team");
  const mentor: Mentor[] = t("mentors", { ns: "team", returnObjects: true });
  const [clickedMentor, setClickedMentor] = useState<Mentor | null>(null);

  // Handle Popup
  const handleMentorPopup = (mentor: Mentor) => {
    setClickedMentor(mentor);
  }
  const closeMentorPopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClickedMentor(null);
  }

  const CloseIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"
      onClick={closeMentorPopup}
      >
      <mask id="mask0_537_3868" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
        <rect width="14" height="14" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_537_3868)">
        <path d="M6.99997 7.81712L4.14163 10.6755C4.03469 10.7824 3.89858 10.8359 3.7333 10.8359C3.56802 10.8359 3.43191 10.7824 3.32497 10.6755C3.21802 10.5685 3.16455 10.4324 3.16455 10.2671C3.16455 10.1018 3.21802 9.96573 3.32497 9.85879L6.1833 7.00046L3.32497 4.14212C3.21802 4.03518 3.16455 3.89907 3.16455 3.73379C3.16455 3.56851 3.21802 3.4324 3.32497 3.32546C3.43191 3.21851 3.56802 3.16504 3.7333 3.16504C3.89858 3.16504 4.03469 3.21851 4.14163 3.32546L6.99997 6.18379L9.8583 3.32546C9.96525 3.21851 10.1014 3.16504 10.2666 3.16504C10.4319 3.16504 10.568 3.21851 10.675 3.32546C10.7819 3.4324 10.8354 3.56851 10.8354 3.73379C10.8354 3.89907 10.7819 4.03518 10.675 4.14212L7.81663 7.00046L10.675 9.85879C10.7819 9.96573 10.8354 10.1018 10.8354 10.2671C10.8354 10.4324 10.7819 10.5685 10.675 10.6755C10.568 10.7824 10.4319 10.8359 10.2666 10.8359C10.1014 10.8359 9.96525 10.7824 9.8583 10.6755L6.99997 7.81712Z" fill="#525252"/>
      </g>
    </svg>
    )
  }

  return (
    <div>
      <Header />
      <div>
          <div className="top-part">
            <div className="team-banner">
              <img className="team-cloud" src={cloud} alt="cloud" />
              <label className="team-title">{t("pageBanner")}</label>
              <div className="banner-text">{t("bannerText")}</div>
            </div>
            <div className="right-text-container">
              <div className="page-title">{t("pageTitle")}</div>
              <div className="page-text">{t("pageText")}</div>
            </div>
          </div>

          <div className="mentor-container">
            {mentor.map((mentors, index) => (
              <div key={index} 
              className="mentor-card" onClick={() => handleMentorPopup(mentors)}>
                <img src={mentors.image} alt={mentors.name} className="mentor-image" />
                
                <div className="mentors">
                  <h4 className="mentor-name">{mentors.name}</h4>
                  <p className="mentor-role">{mentors.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Popup for selected mentor */}
          {clickedMentor && (
            <>
              <div className="overlay" onClick={closeMentorPopup}></div>
              <div className="mentor-popup">
                <div className="popup-top">
                  <img src={clickedMentor.image} alt={clickedMentor.name} className="popup-image"/>
                  <div className="mentor-info">
                    <h5 className="popup-name">{clickedMentor.name}</h5>
                    <p className="popup-role">{clickedMentor.role}</p>
                  </div>
                  <div className="close-popup-btn">
                    <CloseIcon />
                  </div>
                </div>
                <p className="popup-bio" >{clickedMentor.bio}</p>
              </div>
              </>
          )}
      </div>
    </div>
  ); 
};


export default OurTeam;