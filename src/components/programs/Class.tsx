import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; 
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/class.css";
// import { useNavigate } from "react-router-dom";
import topImg from "./classTop.png";
import btmImg from "./bottom_framed_picture.png";
import topBk from "./bg_top.png";
import btmBk from "./bg_bottom.png";
import mainImg1 from "./classMain1.jpg";
import mainImg2 from "./classMain2.jpeg";
import mainBtm from "./classBtm.png";



type ClassType = {
  aboutClass: string;
  left: string;
  leftTime: string;
  leftAge: string;
  leftSize: string;
  leftContent: string;
  mid: string;
  midTime: string;
  midAge: string;
  midSize: string;
  midContent: string;
  right: string;
  rightText: string;

  notes: string;
  notesDes: string;
  topics: string;
  topic1: string;
  topic2: string;
  topic3: string;
  topic4: string;
  topic5: string;
  topic6: string;
  topic7: string;
  topic8: string;
  topic9: string;
  topic10: string;
  topic11: string;
  topic12: string;

  testimony1: string;
  testimony1Sub: string;
  testimony1Des: string;
  testimony1Link: string;
  testimony2: string;
  testimony2Des: string;
  testimony3: string;
  testimony3Des: string;
  testimony4: string;
  testimony4Des: string;
  testimony4Des2: string;
  testimony5: string;
  testimony5Des: string;

  testimony6: string;
  testimony6Des: string;
  testimony7: string;
  testimony7Des: string;
  testimony8: string;
  testimony8Des: string;
}

const Class = () => {
  const { t } = useTranslation("class");
  const classContent: ClassType[] = t("contents", { ns: "class", returnObjects: true });

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
  const GearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <mask id="mask0_1069_3219" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_1069_3219)">
      <path d="M24.3563 49.5C23.3438 49.5 22.4719 49.1625 21.7406 48.4875C21.0094 47.8125 20.5688 46.9875 20.4188 46.0125L19.9125 42.3C19.425 42.1125 18.9656 41.8875 18.5344 41.625C18.1031 41.3625 17.6813 41.0812 17.2688 40.7812L13.7813 42.2437C12.8438 42.6562 11.9063 42.6938 10.9688 42.3563C10.0313 42.0188 9.30002 41.4188 8.77502 40.5562L6.13127 35.9438C5.60627 35.0813 5.45627 34.1625 5.68127 33.1875C5.90627 32.2125 6.41252 31.4062 7.20002 30.7688L10.1813 28.5188C10.1438 28.2563 10.125 28.0031 10.125 27.7594V26.2406C10.125 25.9969 10.1438 25.7437 10.1813 25.4812L7.20002 23.2312C6.41252 22.5938 5.90627 21.7875 5.68127 20.8125C5.45627 19.8375 5.60627 18.9187 6.13127 18.0563L8.77502 13.4438C9.30002 12.5813 10.0313 11.9812 10.9688 11.6437C11.9063 11.3063 12.8438 11.3438 13.7813 11.7563L17.2688 13.2188C17.6813 12.9187 18.1125 12.6375 18.5625 12.375C19.0125 12.1125 19.4625 11.8875 19.9125 11.7L20.4188 7.9875C20.5688 7.0125 21.0094 6.1875 21.7406 5.5125C22.4719 4.8375 23.3438 4.5 24.3563 4.5H29.6438C30.6563 4.5 31.5281 4.8375 32.2594 5.5125C32.9906 6.1875 33.4313 7.0125 33.5813 7.9875L34.0875 11.7C34.575 11.8875 35.0344 12.1125 35.4656 12.375C35.8969 12.6375 36.3188 12.9187 36.7313 13.2188L40.2188 11.7563C41.1563 11.3438 42.0938 11.3063 43.0313 11.6437C43.9688 11.9812 44.7 12.5813 45.225 13.4438L47.8688 18.0563C48.3938 18.9187 48.5438 19.8375 48.3188 20.8125C48.0938 21.7875 47.5875 22.5938 46.8 23.2312L43.8188 25.4812C43.8563 25.7437 43.875 25.9969 43.875 26.2406V27.7594C43.875 28.0031 43.8375 28.2563 43.7625 28.5188L46.7438 30.7688C47.5313 31.4062 48.0375 32.2125 48.2625 33.1875C48.4875 34.1625 48.3375 35.0813 47.8125 35.9438L45.1125 40.5562C44.5875 41.4188 43.8563 42.0188 42.9188 42.3563C41.9813 42.6938 41.0438 42.6562 40.1063 42.2437L36.7313 40.7812C36.3188 41.0812 35.8875 41.3625 35.4375 41.625C34.9875 41.8875 34.5375 42.1125 34.0875 42.3L33.5813 46.0125C33.4313 46.9875 32.9906 47.8125 32.2594 48.4875C31.5281 49.1625 30.6563 49.5 29.6438 49.5H24.3563ZM27.1125 34.875C29.2875 34.875 31.1438 34.1063 32.6813 32.5688C34.2188 31.0312 34.9875 29.175 34.9875 27C34.9875 24.825 34.2188 22.9688 32.6813 21.4312C31.1438 19.8938 29.2875 19.125 27.1125 19.125C24.9 19.125 23.0344 19.8938 21.5156 21.4312C19.9969 22.9688 19.2375 24.825 19.2375 27C19.2375 29.175 19.9969 31.0312 21.5156 32.5688C23.0344 34.1063 24.9 34.875 27.1125 34.875Z" fill="#37ACF4"/>
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
  const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" viewBox="0 0 55 54" fill="none">
      <mask id="mask0_1659_7560" maskUnits="userSpaceOnUse" x="0" y="0" width="55" height="54">
        <rect x="0.666992" width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1659_7560)">
        <path d="M13.8295 38.475C15.742 37.0125 17.8795 35.8594 20.242 35.0156C22.6045 34.1719 25.0795 33.75 27.667 33.75C30.2545 33.75 32.7295 34.1719 35.092 35.0156C37.4545 35.8594 39.592 37.0125 41.5045 38.475C42.817 36.9375 43.8389 35.1938 44.5701 33.2438C45.3014 31.2938 45.667 29.2125 45.667 27C45.667 22.0125 43.9139 17.7656 40.4076 14.2594C36.9014 10.7531 32.6545 9 27.667 9C22.6795 9 18.4326 10.7531 14.9264 14.2594C11.4201 17.7656 9.66699 22.0125 9.66699 27C9.66699 29.2125 10.0326 31.2938 10.7639 33.2438C11.4951 35.1938 12.517 36.9375 13.8295 38.475ZM27.667 29.25C25.4545 29.25 23.5889 28.4906 22.0701 26.9719C20.5514 25.4531 19.792 23.5875 19.792 21.375C19.792 19.1625 20.5514 17.2969 22.0701 15.7781C23.5889 14.2594 25.4545 13.5 27.667 13.5C29.8795 13.5 31.7451 14.2594 33.2639 15.7781C34.7826 17.2969 35.542 19.1625 35.542 21.375C35.542 23.5875 34.7826 25.4531 33.2639 26.9719C31.7451 28.4906 29.8795 29.25 27.667 29.25ZM27.667 49.5C24.5545 49.5 21.6295 48.9094 18.892 47.7281C16.1545 46.5469 13.7732 44.9438 11.7482 42.9188C9.72324 40.8938 8.12012 38.5125 6.93887 35.775C5.75762 33.0375 5.16699 30.1125 5.16699 27C5.16699 23.8875 5.75762 20.9625 6.93887 18.225C8.12012 15.4875 9.72324 13.1062 11.7482 11.0812C13.7732 9.05625 16.1545 7.45313 18.892 6.27188C21.6295 5.09062 24.5545 4.5 27.667 4.5C30.7795 4.5 33.7045 5.09062 36.442 6.27188C39.1795 7.45313 41.5607 9.05625 43.5857 11.0812C45.6107 13.1062 47.2139 15.4875 48.3951 18.225C49.5764 20.9625 50.167 23.8875 50.167 27C50.167 30.1125 49.5764 33.0375 48.3951 35.775C47.2139 38.5125 45.6107 40.8938 43.5857 42.9188C41.5607 44.9438 39.1795 46.5469 36.442 47.7281C33.7045 48.9094 30.7795 49.5 27.667 49.5Z" fill="#37ACF4"/>
      </g>
    </svg>
  );
  const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="#3067F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      <div className="class-top-part">
        <div className="class-left-content">
          <span className="classTitle">{t("title")}</span>
          <span className="classDes">{t("des")}</span>
          <button className="class-apply-btn">
            <a href="http://bit.ly/cceifyreg" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
        <img className="class-top-img" src={topImg} alt="topImg" />
      </div>

      {/* Main Part */}
      <div className="class-content-container">
        {/* About Class */}
        <div className="class-main-top">
          {/* <label className="class-section-label">{classContent[0].aboutClass}</label> */}
          <img className="class-top-bk" src={topBk} alt="top background" />
          <div className="class-top-three">
            <div className="about-class">
              <span className="class-three-icons"><GearIcon /></span>
              <div className="class-three-titles">{classContent[0].left}</div>
              <div className="class-three-text">
                <ul className="class-detail">
                  <li>{classContent[0].leftTime}</li>
                  <li>{classContent[0].leftAge}</li>
                  <li>{classContent[0].leftSize}</li>
                  <li>{classContent[0].leftContent}</li>
                </ul>
              </div>
            </div>
            <div className="about-class">
              <span className="class-three-icons"><StarIcon /></span>
              <div className="class-three-titles">{classContent[0].mid}</div>
              <div className="class-three-text">
                <ul className="class-detail">
                  <li>{classContent[0].midTime}</li>
                  <li>{classContent[0].midAge}</li>
                  <li>{classContent[0].midSize}</li>
                  <li>{classContent[0].midContent}</li>
                </ul>
              </div>
            </div>
            <div className="about-class">
              <span className="class-three-icons"><PersonIcon /></span>
              <div className="class-three-titles">{classContent[0].right}</div>
              <div className="class-three-text">{classContent[0].rightText}</div>
              <div className="mentor-link-icon">
                <Link to="/our-team" onClick={() => window.scrollTo(0, 0)} className="mentor-link">
                  {t("learnMore")}
                </Link>
                <div className="right-arrow-icon"><ArrowRight /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="class-main">
          <div className="class-main-two">
            <div className="class-main-detail">
              <img className="class-main-img" src={mainImg1} alt="mainImg1" />
              <div className="class-main-texts">
                <div className="class-main-two-titles">{classContent[1].notes}</div>
                <div className="class-notes-text">{classContent[1].notesDes}</div>
              </div>
            </div>
            <div className="class-main-detail swap-on-mobile">
              <div className="class-topic-texts">
                <div className="class-main-two-titles">{classContent[1].topics}</div>
                <div className="class-lsts">
                  <ul className="class-main-lst">
                    <li>{classContent[1].topic1}</li>
                    <li>{classContent[1].topic2}</li>
                    <li>{classContent[1].topic3}</li>
                    <li>{classContent[1].topic4}</li>
                    <li>{classContent[1].topic5}</li>
                    <li>{classContent[1].topic6}</li>
                  </ul>
                  <ul className="class-main-lst">
                    <li>{classContent[1].topic7}</li>
                    <li>{classContent[1].topic8}</li>
                    <li>{classContent[1].topic9}</li>
                    <li>{classContent[1].topic10}</li>
                    <li>{classContent[1].topic11}</li>
                    <li>{classContent[1].topic12}</li>
                  </ul>
                </div>
                <a href="https://youtu.be/AEGILKCOZyM" target="_blank" rel="noreferrer" className="overview-link">{t("overview")}</a>
              </div>
              <img className="class-main-img" src={mainImg2} alt="mainImg2" />
            </div>
          </div>
          <img className="class-btm-bk" src={btmBk} alt="btm background" />
        </div>

        {/* Testimonies */}
        <div className="class-main-btm">
          <label className="class-section-label">{t("btmLabel")}</label>
          <div className="class-btm">
            <img className="class-main-btm-img" src={mainBtm} alt="mainImg" />
            {/* 8 Items */}
            <div className="class-expanded-texts">
              <div className="class-detail-row">
                {showDes === "testimony1" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony1")}>
                      <span className="class-blue-text-left">{classContent[2].testimony1}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="class-des-sub">{classContent[2].testimony1Sub}</div>
                    <div className="class-des-texts">{classContent[2].testimony1Des}</div>
                    <a href="https://www.youtube.com/watch?v=pj3CORE1SEQ" target="_blank" rel="noreferrer" className="class-des-link">{classContent[2].testimony1Link}</a>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony1")}>
                    <span className="class-text-left">{classContent[2].testimony1}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 2 */}
              <div className="class-detail-row">
                {showDes === "testimony2" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony2")}>
                      <span className="class-blue-text-left">{classContent[2].testimony2}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <a href="https://www.youtube.com/watch?v=34bvk7hW_Ds" target="_blank" rel="noreferrer" className="class-des-link">{classContent[2].testimony2Des}</a>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony2")}>
                    <span className="class-text-left">{classContent[2].testimony2}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 3 */}
              <div className="class-detail-row">
                {showDes === "testimony3" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony3")}>
                      <span className="class-blue-text-left">{classContent[2].testimony3}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <a href="https://youtu.be/yG-WoryjAzk" target="_blank" rel="noreferrer" className="class-des-link">{classContent[2].testimony3Des}</a>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony3")}>
                    <span className="class-text-left">{classContent[2].testimony3}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 4 */}
              <div className="class-detail-row">
                {showDes === "testimony4" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony4")}>
                      <span className="class-blue-text-left">{classContent[2].testimony4}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <a href="https://youtu.be/970qyUCZ71c" target="_blank" rel="noreferrer" className="class-des-link">{classContent[2].testimony4Des}</a>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony4")}>
                    <span className="class-text-left">{classContent[2].testimony4}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 5 */}
              <div className="class-detail-row">
                {showDes === "testimony5" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony5")}>
                      <span className="class-blue-text-left">{classContent[2].testimony5}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="class-des-texts">{classContent[2].testimony5Des}</div>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony5")}>
                    <span className="class-text-left">{classContent[2].testimony5}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 6 */}
              <div className="class-detail-row">
                {showDes === "testimony6" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony6")}>
                      <span className="class-blue-text-left">{classContent[2].testimony6}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="class-des-texts">{classContent[2].testimony6Des}</div>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony6")}>
                    <span className="class-text-left">{classContent[2].testimony6}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 7 */}
              <div className="class-detail-row">
                {showDes === "testimony7" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony7")}>
                      <span className="class-blue-text-left">{classContent[2].testimony7}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <div className="class-des-texts">{classContent[2].testimony7Des}</div>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony7")}>
                    <span className="class-text-left">{classContent[2].testimony7}</span>
                    <span className="class-icon-right">
                      <PlusIcon />
                    </span>
                  </div>
                )}
              </div>
              {/* Item 8 */}
              <div className="class-detail-row">
                {showDes === "testimony8" ? (
                  <div className="class-section-des">
                    <div className="class-main-title" onClick={() => toggleSection("testimony8")}>
                      <span className="class-blue-text-left">{classContent[2].testimony8}</span>
                      <span className="class-icon-right">
                        <XIcon />
                      </span>
                    </div>
                    <a href="https://youtu.be/gpf6QMnXbj8" target="_blank" rel="noreferrer" className="class-des-link">{classContent[2].testimony8Des}</a>
                  </div>
                ) : (
                  <div className="class-main-title" onClick={() => toggleSection("testimony8")}>
                    <span className="class-text-left">{classContent[2].testimony8}</span>
                    <span className="class-icon-right">
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
      <div className="class-bottom">
        <img className="class-btm-img" src={btmImg} alt="btmImg" />
        <div className="class-right-content">
          <span className="class-btm-text">{t("btmText")}</span>
          <button className="class-apply-btn">
            <a href="http://bit.ly/cceifyreg" target="_blank" rel="noopener noreferrer">
              {t("applyNow")}
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default Class;