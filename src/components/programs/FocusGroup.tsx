import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/focusGroup.css";

import focusTopImg from "./focusTop.png";
import focusBtmImg from "./focusBtm.png";
import focusTopBk from "./bg_top.png";
import focusBtmBk from "./bg_bottom.png";
import focusMain from "./meeting-img.jpeg";



type FocusContents = {
  focusOverview: string;
  overviewDes: string;
  focusLeft: string;
  focusLeftText: string;
  focusMid: string;
  focusMidText: string;
  focusRight: string;
  focusRightText: string;

  moreInfo: string;
  topic: string;
  topicDes: string;
  testimonial: string;
  testimonialsDes: string;
  leaders: string;
  leaderDes: string;
  group: string;
  newGuy: string;
  returnGuy: string;
}

const FocusGroup = () => {
  const { t } = useTranslation("programs");
  const focusContent: FocusContents[] = t("focusContents", { ns: "programs", returnObjects: true });

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
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <mask id="mask0_1245_3476" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1245_3476)">
        <path d="M17.3199 17.3199L17.3199 26.5595C17.3199 26.9052 17.1864 27.2116 16.9192 27.4787C16.6521 27.7458 16.3457 27.8794 16 27.8794C15.6543 27.8794 15.3479 27.7458 15.0808 27.4787C14.8136 27.2116 14.6801 26.9052 14.6801 26.5595L14.6801 17.3199L5.44053 17.3199C5.09483 17.3199 4.78842 17.1864 4.52129 16.9192C4.25416 16.6521 4.1206 16.3457 4.1206 16C4.1206 15.6543 4.25416 15.3479 4.52129 15.0808C4.78842 14.8136 5.09483 14.6801 5.44053 14.6801L14.6801 14.6801L14.6801 5.44054C14.6801 5.09484 14.8136 4.78843 15.0808 4.5213C15.3479 4.25417 15.6543 4.12061 16 4.12061C16.3457 4.12061 16.6521 4.25417 16.9192 4.5213C17.1864 4.78843 17.3199 5.09484 17.3199 5.44054L17.3199 14.6801L26.5595 14.6801C26.9051 14.6801 27.2116 14.8136 27.4787 15.0808C27.7458 15.3479 27.8794 15.6543 27.8794 16C27.8794 16.3457 27.7458 16.6521 27.4787 16.9192C27.2116 17.1864 26.9051 17.3199 26.5595 17.3199L17.3199 17.3199Z" fill="#333333"/>
      </g>
    </svg>
  );
  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <mask id="mask0_1245_2157" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1245_2157)">
        <path d="M16.0001 17.8667L9.46673 24.4001C9.22229 24.6445 8.91118 24.7667 8.5334 24.7667C8.15562 24.7667 7.84451 24.6445 7.60007 24.4001C7.35562 24.1556 7.2334 23.8445 7.2334 23.4667C7.2334 23.089 7.35562 22.7778 7.60007 22.5334L14.1334 16.0001L7.60007 9.46673C7.35562 9.22229 7.2334 8.91118 7.2334 8.5334C7.2334 8.15562 7.35562 7.84451 7.60007 7.60007C7.84451 7.35562 8.15562 7.2334 8.5334 7.2334C8.91118 7.2334 9.22229 7.35562 9.46673 7.60007L16.0001 14.1334L22.5334 7.60007C22.7778 7.35562 23.089 7.2334 23.4667 7.2334C23.8445 7.2334 24.1556 7.35562 24.4001 7.60007C24.6445 7.84451 24.7667 8.15562 24.7667 8.5334C24.7667 8.91118 24.6445 9.22229 24.4001 9.46673L17.8667 16.0001L24.4001 22.5334C24.6445 22.7778 24.7667 23.089 24.7667 23.4667C24.7667 23.8445 24.6445 24.1556 24.4001 24.4001C24.1556 24.6445 23.8445 24.7667 23.4667 24.7667C23.089 24.7667 22.7778 24.6445 22.5334 24.4001L16.0001 17.8667Z" fill="#0E426C"/>
      </g>
    </svg>
  );

  // Handle hidden description
  const [showDes, setShowDes] = useState<string | null>(null);
  const toggleSection = (key: string) => {
    setShowDes(prev => (prev === key ? null : key));
  };
  



  return (
    <div>
      <Header />
      <div className="focus-top-part">
        <div className="focus-left-content">
          <span className="focusTitle">{t("focusTitle")}</span>
          <span className="focusSub">{t("focusSubTitle")}</span>
          <button className="focus-apply-btn">
            <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATzJbylUMkQ2NlNPWlNUV0pXQlE3T01UTE02N1A1Ty4u&route=shorturl" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
        <img className="focus-top-img" src={focusTopImg} alt="topImg" />
      </div>


      {/* Main Part */}
      <div className="focus-content-container">
        {/* Overview */}
        <div className="focus-main-top">
          <label className="focus-section-label">{focusContent[0].focusOverview}</label>
          <div className="overview-des">{focusContent[0].overviewDes}</div>
          <img className="focus-top-bk" src={focusTopBk} alt="top background" />
          <div className="focus-top-three">
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><StarIcon /></span>
              <div className="focus-three-titles">{focusContent[0].focusLeft}</div>
              <div className="focus-three-text">{focusContent[0].focusLeftText}</div>

            </div>
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><PencilIcon /></span>
              <div className="focus-three-titles">{focusContent[0].focusMid}</div>
              <div className="focus-three-text">{focusContent[0].focusMidText}</div>
            </div>
            <div className="focus-three-parts">
              <span className="focus-top-three-icons"><PcIcon /></span>
              <div className="focus-three-titles">{focusContent[0].focusRight}</div>
              <div className="focus-three-text">{focusContent[0].focusRightText}</div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="focus-main">
          <label className="focus-section-label">{focusContent[1].moreInfo}</label>
          <img className="focus-btm-bk" src={focusBtmBk} alt="btm background" />
          
          <div className="focus-mid-main">
            <img className="focus-main-img" src={focusMain} alt="mainImg" />
            {/* Four Items */}
            <div className="focus-main-texts">
              <div className="item-detal-row">
                {showDes === "topic" ? (
                  <div className="section-des">
                    <div className="focus-main-title" onClick={() => toggleSection("topic")}>
                      <span className="inner-blue-title">{focusContent[1].topic}</span>
                      <span className="main-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="des-texts">
                      {focusContent[1].topicDes}
                    </div>
                  </div>
                ) : (
                  <div className="focus-main-title" onClick={() => toggleSection("topic")}>
                    <span className="main-text-left">{focusContent[1].topic}</span>
                    <span className="main-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 2 */}
              <div className="item-detal-row">
                {showDes === "testimonial" ? (
                  <div className="section-des">
                    <div className="focus-main-title" onClick={() => toggleSection("testimonial")}>
                      <span className="inner-blue-title">{focusContent[1].testimonial}</span>
                      <span className="main-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="des-texts">
                      <a href="https://www.youtube.com/watch?v=5T8BtfgZ-tM&list=PLQTND4OzgUVQfTRGbjAvXqWEY7A9w6Uz_&index=8" target="_blank" rel="noopener noreferrer">
                        {focusContent[1].testimonialsDes}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="focus-main-title" onClick={() => toggleSection("testimonial")}>
                    <span className="main-text-left">{focusContent[1].testimonial}</span>
                    <span className="main-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>

              {/* Item 3 */}
              <div className="item-detal-row">
                {showDes === "leaders" ? (
                  <div className="section-des">
                    <div className="focus-main-title" onClick={() => toggleSection("leaders")}>
                      <span className="inner-blue-title">{focusContent[1].leaders}</span>
                      <span className="main-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="des-texts">
                      <Link to="/our-team" onClick={() => window.scrollTo(0, 0)}>
                        {focusContent[1].leaderDes}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="focus-main-title" onClick={() => toggleSection("leaders")}>
                    <span className="main-text-left">{focusContent[1].leaders}</span>
                    <span className="main-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>

              {/* Item 4 */}
              <div className="item-detal-row">
                {showDes === "group" ? (
                  <div className="section-des">
                    <div className="focus-main-title" onClick={() => toggleSection("group")}>
                      <span className="inner-blue-title">{focusContent[1].group}</span>
                      <span className="main-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="des-texts">
                      <ul className="group-detail">
                        <li>{focusContent[1].newGuy}</li>
                        <li>{focusContent[1].returnGuy}</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="focus-main-title" onClick={() => toggleSection("group")}>
                    <span className="main-text-left">{focusContent[1].group}</span>
                    <span className="main-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="focus-bottom-part">
        <img className="focus-btm-img" src={focusBtmImg} alt="btmImg" />
        <div className="focus-right-content">
          <span className="focus-btm-title">{t("focusBtmTitle")}</span>
          <span className="focus-btm-text">{t("focusBtmText")}</span>
          <button className="focus-apply-btn">
            <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATzJbylUMkQ2NlNPWlNUV0pXQlE3T01UTE02N1A1Ty4u&route=shorturl" target="_blank" rel="noopener noreferrer">
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