import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
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

  const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="#3067F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  const NumOneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="54" viewBox="0 0 12 54"    fill="none">
      <path d="M4.75 7H3.625C2.6875 7 1.89062 6.67188 1.23438 6.01562C0.578125 5.35938 0.25 4.5625 0.25 3.625C0.25 2.6875 0.578125 1.89062 1.23438 1.23438C1.89062 0.578125 2.6875 0.25 3.625 0.25H9.25C9.8875 0.25 10.4219 0.465625 10.8531 0.896875C11.2844 1.32812 11.5 1.8625 11.5 2.5V28.375C11.5 29.3125 11.1719 30.1094 10.5156 30.7656C9.85938 31.4219 9.0625 31.75 8.125 31.75C7.1875 31.75 6.39062 31.4219 5.73438 30.7656C5.07812 30.1094 4.75 29.3125 4.75 28.375V7Z" fill="#37ACF4"/>
    </svg>
  );
  const NumTwoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <mask id="mask0_1171_4276" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
        <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1171_4276)">
        <path d="M31.5 11.25H21.375C20.4375 11.25 19.6406 11.5781 18.9844 12.2344C18.3281 12.8906 18 13.6875 18 14.625C18 15.5625 18.3281 16.3594 18.9844 17.0156C19.6406 17.6719 20.4375 18 21.375 18H31.5V23.625H21.375C20.4375 23.625 19.6406 23.9531 18.9844 24.6094C18.3281 25.2656 18 26.0625 18 27V39.375C18 40.3125 18.3281 41.1094 18.9844 41.7656C19.6406 42.4219 20.4375 42.75 21.375 42.75H34.875C35.8125 42.75 36.6094 42.4219 37.2656 41.7656C37.9219 41.1094 38.25 40.3125 38.25 39.375C38.25 38.4375 37.9219 37.6406 37.2656 36.9844C36.6094 36.3281 35.8125 36 34.875 36H24.75V30.375H33.75C34.9875 30.375 36.0469 29.9344 36.9281 29.0531C37.8094 28.1719 38.25 27.1125 38.25 25.875V18C38.25 16.125 37.5938 14.5312 36.2812 13.2188C34.9688 11.9062 33.375 11.25 31.5 11.25Z" fill="#37ACF4"/>
      </g>
    </svg>
  );
  const NumThreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <mask id="mask0_1171_1534" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_1171_1534)">
      <path d="M31.5 42.75H21.375C20.4375 42.75 19.6406 42.4219 18.9844 41.7656C18.3281 41.1094 18 40.3125 18 39.375C18 38.4375 18.3281 37.6406 18.9844 36.9844C19.6406 36.3281 20.4375 36 21.375 36H31.5V30.375H23.625C22.6875 30.375 21.8906 30.0469 21.2344 29.3906C20.5781 28.7344 20.25 27.9375 20.25 27C20.25 26.0625 20.5781 25.2656 21.2344 24.6094C21.8906 23.9531 22.6875 23.625 23.625 23.625H31.5V18H21.375C20.4375 18 19.6406 17.6719 18.9844 17.0156C18.3281 16.3594 18 15.5625 18 14.625C18 13.6875 18.3281 12.8906 18.9844 12.2344C19.6406 11.5781 20.4375 11.25 21.375 11.25H31.5C33.375 11.25 34.9688 11.9062 36.2812 13.2188C37.5938 14.5312 38.25 16.125 38.25 18V22.275C38.25 23.5875 37.7906 24.7031 36.8719 25.6219C35.9531 26.5406 34.8375 27 33.525 27C34.8375 27 35.9531 27.4594 36.8719 28.3781C37.7906 29.2969 38.25 30.4125 38.25 31.725V36C38.25 37.875 37.5938 39.4688 36.2812 40.7812C34.9688 42.0938 33.375 42.75 31.5 42.75Z" fill="#37ACF4"/>
    </g>
  </svg>
  );

  const extractLink = (text: string) => {
    const regex = /(2025 CCE Focus Group|2025 CCE 焦點小組|2025 CCE 焦点小组)/g;
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <Link to="/focus-group" onClick={() => window.scrollTo(0, 0)} key={index}>
          {part}
        </Link>
      ) : (
        part
      )
    );
  };


  return (
    <div>
      <Header />
      <div className="proj-top-part">
        <div className="proj-left-content">
          <span className="projTitle">{t("projTitle")}</span>
          <span className="projSub">{t("projSubTitle")}</span>
          <button className="proj-apply-btn"> {/* form need to be updated */}
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__5qkf4FUQTVTMU1FVjhFVFVVU0RLTjVGV1FWS05aQS4u" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
        <img className="proj-top-img" src={projTopImg} alt="topImg" />
      </div>

      {/* Main Part */}
      <div className="proj-content-container">
        {/* Overview */}
        <div className="proj-main-top">
          <img className="proj-top-bk" src={projTopBk} alt="top background" />
          <div className="proj-top-three">
            <div className="overview-part">
              <span className="proj-top-three-icons"><StarIcon /></span>
              <div className="proj-three-titles">{mainContent[0].projLeft}</div>
              <div className="proj-three-text">{mainContent[0].projLeftText}</div>
            </div>
            <div className="overview-part">
              <span className="proj-top-three-icons"><PencilIcon /></span>
              <div className="proj-three-titles">{mainContent[0].projMid}</div>
              <div className="proj-three-text">{mainContent[0].projMidText}</div>
            </div>
            <div className="overview-part">
              <span className="proj-top-three-icons"><PcIcon /></span>
              <div className="proj-three-titles">{mainContent[0].projRight}</div>
              <div className="proj-three-text">{mainContent[0].projRightText}</div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="proj-main">
          <label className="proj-section-label">{mainContent[1].projMainTitle}</label>
          <div className="proj-main-three">
            <div className="proj-main-detail">
              <img className="proj-main-three-img" src={projMain1} alt="projMain1" />
              <div className="proj-main-three-text">{mainContent[1].projMainTop}</div>
            </div>
            <div className="proj-main-detail swap-on-mobile">
              <div className="proj-main-three-text">{mainContent[1].projMainMid}</div>
              <img className="proj-main-three-img" src={projMain2} alt="projMain2" />
            </div>
            <div className="proj-main-detail">
              <img className="proj-main-three-img" src={projMain3} alt="projMain3" />
              <div className="proj-main-btm-link">
                <div className="proj-main-btm-text">{mainContent[1].projMainBtm}</div>
                <Link to="/recording" onClick={() => window.scrollTo(0, 0)} >
                  <div className="proj-ohLink-icon">
                    <div className="proj-ohLink">{mainContent[1].ohRecording}</div>
                    <div className="right-arrow-icon"><ArrowRight /></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Suit me */}
        <div className="proj-main-btm">
          <label className="proj-section-label">{mainContent[2].projBtmTitle}</label>
          <label className="proj-main-sub">{mainContent[2].projBtmSub}</label>
          <img className="proj-btm-bk" src={projBtmBk} alt="btm background" />
          <div className="proj-top-three">
            <div className="overview-part">
              <span className="proj-btm-icon-lt"><NumOneIcon /></span>
              <div className="proj-three-text">{mainContent[2].projBtmLeftText}</div>
            </div>
            <div className="overview-part">
              <span className="proj-btm-icons"><NumTwoIcon /></span>
              <div className="proj-three-text">{mainContent[2].projBtmText}</div>
            </div>
            <div className="overview-part">
              <span className="proj-btm-icons"><NumThreeIcon /></span>
              <div className="proj-three-text">
                {extractLink(mainContent[2].projBtmRightText)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="proj-bottom-part">
        <img className="proj-btm-img" src={projBtmImg} alt="btmImg" />
        <div className="proj-right-content">
          <span className="proj-btm-text">{t("projBtmText")}</span>
          <span className="proj-btm-title">{t("projBtmTitle")}</span>
          <button className="proj-apply-btn">{/* form need to be updated */}
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__5qkf4FUQTVTMU1FVjhFVFVVU0RLTjVGV1FWS05aQS4u" target="_blank" rel="noopener noreferrer">
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