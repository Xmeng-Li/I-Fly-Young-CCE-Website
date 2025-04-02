import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "../../styles/intern.css";

import projTopImg from "./projTop.png";
import projBtmImg from "./projBtm.png";
import projTopBk from "./bg_top.png";
// import projBtmBk from "./bg_bottom.png";
// import projMain1 from "./projMain1.jpeg";
// import projMain2 from "./projMain2.jpeg";
// import projMain3 from "./projMain3.jpeg";


type FocusContents = {
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

const FocusGroup = () => {
  const { t } = useTranslation("programs");
  const mainContent: FocusContents[] = t("projContents", { ns: "programs", returnObjects: true });

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
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <mask id="mask0_1171_3735" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
        <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1171_3735)">
        <path d="M17.1562 14.4L23.4563 6.24375C23.9062 5.64375 24.4406 5.20312 25.0594 4.92188C25.6781 4.64062 26.325 4.5 27 4.5C27.675 4.5 28.3219 4.64062 28.9406 4.92188C29.5594 5.20312 30.0938 5.64375 30.5437 6.24375L36.8438 14.4L46.4062 17.6063C47.3812 17.9063 48.15 18.4594 48.7125 19.2656C49.275 20.0719 49.5562 20.9625 49.5562 21.9375C49.5562 22.3875 49.4906 22.8375 49.3594 23.2875C49.2281 23.7375 49.0125 24.1688 48.7125 24.5813L42.525 33.3562L42.75 42.5813C42.7875 43.8938 42.3563 45 41.4563 45.9C40.5563 46.8 39.5063 47.25 38.3063 47.25C38.2313 47.25 37.8188 47.1938 37.0688 47.0813L27 44.2688L16.9313 47.0813C16.7438 47.1563 16.5375 47.2031 16.3125 47.2219C16.0875 47.2406 15.8812 47.25 15.6937 47.25C14.4937 47.25 13.4438 46.8 12.5437 45.9C11.6438 45 11.2125 43.8938 11.25 42.5813L11.475 33.3L5.34375 24.5813C5.04375 24.1688 4.82812 23.7375 4.69687 23.2875C4.56562 22.8375 4.5 22.3875 4.5 21.9375C4.5 21 4.77188 20.1281 5.31563 19.3219C5.85938 18.5156 6.61875 17.9438 7.59375 17.6063L17.1562 14.4Z" fill="#37ACF4"/>
      </g>
    </svg>
  );
  const PencilIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <mask id="mask0_1171_3828" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
        <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1171_3828)">
        <path d="M9.45002 47.1941C8.66252 47.3816 7.97814 47.1848 7.39689 46.6035C6.81564 46.0223 6.61877 45.3379 6.80627 44.5504L8.77502 34.9879L19.0125 45.2254L9.45002 47.1941ZM22.6688 42.4691L11.5313 31.3316L34.7625 8.10039C35.625 7.23789 36.6938 6.80664 37.9688 6.80664C39.2438 6.80664 40.3125 7.23789 41.175 8.10039L45.9 12.8254C46.7625 13.6879 47.1938 14.7566 47.1938 16.0316C47.1938 17.3066 46.7625 18.3754 45.9 19.2379L22.6688 42.4691Z" fill="#37ACF4"/>
      </g>
    </svg>
  );
  const PcIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <mask id="mask0_1171_3878" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
        <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1171_3878)">
        <path d="M7.875 45C6.9375 45 6.14062 44.6719 5.48438 44.0156C4.82812 43.3594 4.5 42.5625 4.5 41.625C4.5 40.6875 4.82812 39.8906 5.48438 39.2344C6.14062 38.5781 6.9375 38.25 7.875 38.25H9V13.5C9 12.2625 9.44063 11.2031 10.3219 10.3219C11.2031 9.44063 12.2625 9 13.5 9H45C45.6375 9 46.1719 9.21562 46.6031 9.64687C47.0344 10.0781 47.25 10.6125 47.25 11.25C47.25 11.8875 47.0344 12.4219 46.6031 12.8531C46.1719 13.2844 45.6375 13.5 45 13.5H13.5V38.25H23.625C24.5625 38.25 25.3594 38.5781 26.0156 39.2344C26.6719 39.8906 27 40.6875 27 41.625C27 42.5625 26.6719 43.3594 26.0156 44.0156C25.3594 44.6719 24.5625 45 23.625 45H7.875ZM33.75 45C33.1125 45 32.5781 44.7844 32.1469 44.3531C31.7156 43.9219 31.5 43.3875 31.5 42.75V20.25C31.5 19.6125 31.7156 19.0781 32.1469 18.6469C32.5781 18.2156 33.1125 18 33.75 18H47.25C47.8875 18 48.4219 18.2156 48.8531 18.6469C49.2844 19.0781 49.5 19.6125 49.5 20.25V42.75C49.5 43.3875 49.2844 43.9219 48.8531 44.3531C48.4219 44.7844 47.8875 45 47.25 45H33.75Z" fill="#37ACF4"/>
      </g>
    </svg>    
  );



  return (
    <div>
      <Header />
      <div className="focus-backTo">
        <Link to="/programs">
          <div className="left-arrow">
            <LeftArrow />
          </div>
        </Link>
        <label className="focus-backTo-text">{t("backToText")}</label>
      </div>
      <div className="focus-top-part">
        <div className="focus-left-content">
          <span className="focusTitle">{t("projTitle")}</span>
          <button className="focus-apply-btn"> {/* form need to be updated */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpSAC9LCf8O73iJss12DqnA3AHWjdhZQ9QFA7qfkGPlA8OoQ/viewform" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
        <img className="focus-top-img" src={projTopImg} alt="topImg" />
      </div>





      {/* Main Part */}
      <div className="focus-content-container">
        {/* Overview */}
        <div className="focus-main-top">
          <label className="focus-section-label">{mainContent[0].overview}</label>
          <img className="focus-top-bk" src={projTopBk} alt="top background" />
          <div className="focus-top-three">
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><StarIcon /></span>
              <div className="focus-three-titles">{mainContent[0].projLeft}</div>
              <div className="focus-three-text">{mainContent[0].projLeftText}</div>

            </div>
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><PencilIcon /></span>
              <div className="focus-three-titles">{mainContent[0].projLeft}</div>
              <div className="focus-three-text">{mainContent[0].projLeftText}</div>
            </div>
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><PcIcon /></span>
              <div className="focus-three-titles">{mainContent[0].projLeft}</div>
              <div className="focus-three-text">{mainContent[0].projLeftText}</div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="focus-main">
          <label className="focus-section-label">{mainContent[1].projMainTitle}</label>
          
        </div>
      </div>

      {/* Bottom Part */}
      <div className="focus-bottom-part">
        <img className="focus-btm-img" src={projBtmImg} alt="btmImg" />
        <div className="focus-right-content">
          <span className="focus-btm-title">{t("projBtmTitle")}</span>
          <button className="focus-apply-btn">{/* form need to be updated */}
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

export default FocusGroup;