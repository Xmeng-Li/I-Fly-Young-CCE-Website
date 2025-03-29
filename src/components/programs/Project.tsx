import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "../../styles/project.css";

import projTopImg from "./projTop.png";
import projBtmImg from "./projBtm.png";
import projTopBk from "./bg_top.png";
import projBtmBk from "./bg_bottom.png";
import projMain1 from "./projMain1.jpeg";
import projMain2 from "./projMain2.jpeg";
import projMain3 from "./projMain3.jpeg";


type projContents = {
  overview: string;
  projLeft: string;
  projLeftText: string;
  projMid: string;
  projMidText: string;
  projRight: string;
  projRightText: string;
  
  projMainTitle: string;
  projMainTop: string;
  projMainMid: string;
  projMainBtm: string;
  ohRecording: string;

  projBtmTitle: string;
  projBtmSub: string;
  projBtmLeftText: string;
  projBtmText: string;
  projBtmRightText: string;
}

const Project = () => {
  const { t } = useTranslation("programs");
  const mainContent: projContents[] = t("projContents", { ns: "programs", returnObjects: true });

  const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <mask id="mask0_440_2232" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_440_2232)">
      <path d="M9.00016 9.99996L12.2502 13.25C12.4029 13.4027 12.4793 13.5972 12.4793 13.8333C12.4793 14.0694 12.4029 14.2638 12.2502 14.4166C12.0974 14.5694 11.9029 14.6458 11.6668 14.6458C11.4307 14.6458 11.2363 14.5694 11.0835 14.4166L7.25016 10.5833C7.16683 10.5 7.1078 10.4097 7.07308 10.3125C7.03836 10.2152 7.021 10.1111 7.021 9.99996C7.021 9.88885 7.03836 9.78468 7.07308 9.68746C7.1078 9.59024 7.16683 9.49996 7.25016 9.41663L11.0835 5.58329C11.2363 5.43051 11.4307 5.35413 11.6668 5.35413C11.9029 5.35413 12.0974 5.43051 12.2502 5.58329C12.4029 5.73607 12.4793 5.93051 12.4793 6.16663C12.4793 6.40274 12.4029 6.59718 12.2502 6.74996L9.00016 9.99996Z" fill="#525252"/>
    </g>
  </svg>
  );


  return (
    <div>
      <Header />
      <div className="proj-backTo">
        <Link to="/programs">
          <div className="left-arrow">
            <LeftArrow />
          </div>
        </Link>
        <label className="proj-backTo-text">{t("backToText")}</label>
      </div>
      <div className="proj-top-part">
        <div className="proj-left-content">
          <span className="projTitle">{t("projTitle")}</span>
          <span className="projSub">{t("projSubTitle")}</span>
          <button className="proj-apply-btn"> {/* form need to be updated */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
        <img className="proj-top-img" src={projTopImg} alt="topImg" />
      </div>

      {/* Main Part */}
      <div className="proj-content-container">
        {/* Why Apply */}
        <div className="proj-main-top">
          <label className="proj-section-label">{mainContent[0].overview}</label>
          <img className="proj-top-bk" src={projTopBk} alt="top background" />
          <div className="proj-top-three">
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><GearIcon /></span> */}
              <div className="proj-three-titles">{mainContent[0].projLeft}</div>
              <div className="proj-three-text">{mainContent[0].projLeftText}</div>
            </div>
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><FaceIcon /></span> */}
              <div className="proj-three-titles">{mainContent[0].projMid}</div>
              <div className="proj-three-text">{mainContent[0].projMidText}</div>
            </div>
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><ThumbsIcon /></span> */}
              <div className="proj-three-titles">{mainContent[0].projRight}</div>
              <div className="proj-three-text">{mainContent[0].projRightText}</div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="proj-main">
          <div className="proj-main-three">
            <div className="proj-main-detail">
              <img className="proj-main-three-img" src={projMain1} alt="projMain1" />
              <div className="proj-main-three-text">{mainContent[1].projMainTop}</div>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Suit me */}
        <div className="proj-main-btm">
          <label className="proj-section-label">{mainContent[2].projBtmTitle}</label>
          <img className="proj-btm-bk" src={projTopBk} alt="btm background" />
          <div className="proj-top-three">
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><ThumbsIcon /></span> */}
              <div className="proj-three-text">{mainContent[2].projBtmLeftText}</div>
            </div>
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><ThumbsIcon /></span> */}
              <div className="proj-three-text">{mainContent[2].projBtmText}</div>
            </div>
            <div className="overview-part">
              {/* <span className="proj-top-three-icons"><ThumbsIcon /></span> */}
              <div className="proj-three-text">{mainContent[2].projBtmRightText}</div>
            </div>
          </div>
        </div>
      

      {/* Bottom Part */}
      <div className="proj-bottom-part">
         {/* <img className="proj-btm-img" src={btmImg} alt="btmImg" /> */}
        <div className="right-content">
          <span className="proj-btm-title">{t("projBtmTitle")}</span>
          <span className="proj-btm-text">{t("projBtmTitle")}</span>
          <button className="proj-apply-btn">{/* form need to be updated */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default Project;