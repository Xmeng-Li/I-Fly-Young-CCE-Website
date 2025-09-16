import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/cceCase.css";

import topImg from "./mockUp.png";
import logo from "./Logo-white-font.png";
import timelineImg from "./timeline.png";
import oldSite from "./old-site.png";
import fontImg from "./font-color.png";
import report from "./ux-report.png";
import newSite from "./new-site.png";



type Content = {
  works: string;
  leftText: string;
  midText: string;
  rightText: string;

  timeline: string;
  notes: string;

  stratTitle: string;
  stratStep1: string;
  stratStep2: string;
  stratStep3: string;
  stratStep4: string;

  desTitle: string;
  desStep1: string;
  desStep2: string;
  desStep3: string;
  desStep4: string;

  uxTitle: string;
  uxStep1: string;
  uxStep2: string;
  uxStep3: string;

  devTitle: string;
  devStep1: string;
  devStep2: string;

  btmTitle: string;
  btmTexts: string;
  caseBtmBtn: string;
}

const CceCase = () => {
  const { t } = useTranslation("digital");
  const caseContent: Content[] = t("contents", { ns: "digital", returnObjects: true });

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
  const FaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <mask id="mask0_1069_385" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_1069_385)">
      <path d="M27 39.375C28.9875 39.375 30.8719 38.9438 32.6531 38.0812C34.4344 37.2188 35.8687 35.9625 36.9562 34.3125C37.3688 33.675 37.425 33.0469 37.125 32.4281C36.825 31.8094 36.3375 31.5 35.6625 31.5C35.3625 31.5 35.0906 31.5656 34.8469 31.6969C34.6031 31.8281 34.4062 32.025 34.2563 32.2875C33.3938 33.45 32.325 34.3594 31.05 35.0156C29.775 35.6719 28.425 36 27 36C25.575 36 24.225 35.6719 22.95 35.0156C21.675 34.3594 20.6063 33.45 19.7438 32.2875C19.5563 32.025 19.3406 31.8281 19.0969 31.6969C18.8531 31.5656 18.5813 31.5 18.2812 31.5C17.6062 31.5 17.1187 31.8 16.8187 32.4C16.5188 33 16.575 33.6 16.9875 34.2C18.075 35.8875 19.5094 37.1719 21.2906 38.0531C23.0719 38.9344 24.975 39.375 27 39.375ZM34.875 24.75C35.8125 24.75 36.6094 24.4219 37.2656 23.7656C37.9219 23.1094 38.25 22.3125 38.25 21.375C38.25 20.4375 37.9219 19.6406 37.2656 18.9844C36.6094 18.3281 35.8125 18 34.875 18C33.9375 18 33.1406 18.3281 32.4844 18.9844C31.8281 19.6406 31.5 20.4375 31.5 21.375C31.5 22.3125 31.8281 23.1094 32.4844 23.7656C33.1406 24.4219 33.9375 24.75 34.875 24.75ZM19.125 24.75C20.0625 24.75 20.8594 24.4219 21.5156 23.7656C22.1719 23.1094 22.5 22.3125 22.5 21.375C22.5 20.4375 22.1719 19.6406 21.5156 18.9844C20.8594 18.3281 20.0625 18 19.125 18C18.1875 18 17.3906 18.3281 16.7344 18.9844C16.0781 19.6406 15.75 20.4375 15.75 21.375C15.75 22.3125 16.0781 23.1094 16.7344 23.7656C17.3906 24.4219 18.1875 24.75 19.125 24.75ZM27 49.5C23.8875 49.5 20.9625 48.9094 18.225 47.7281C15.4875 46.5469 13.1062 44.9438 11.0812 42.9188C9.05625 40.8938 7.45313 38.5125 6.27188 35.775C5.09062 33.0375 4.5 30.1125 4.5 27C4.5 23.8875 5.09062 20.9625 6.27188 18.225C7.45313 15.4875 9.05625 13.1062 11.0812 11.0812C13.1062 9.05625 15.4875 7.45313 18.225 6.27188C20.9625 5.09062 23.8875 4.5 27 4.5C30.1125 4.5 33.0375 5.09062 35.775 6.27188C38.5125 7.45313 40.8938 9.05625 42.9188 11.0812C44.9438 13.1062 46.5469 15.4875 47.7281 18.225C48.9094 20.9625 49.5 23.8875 49.5 27C49.5 30.1125 48.9094 33.0375 47.7281 35.775C46.5469 38.5125 44.9438 40.8938 42.9188 42.9188C40.8938 44.9438 38.5125 46.5469 35.775 47.7281C33.0375 48.9094 30.1125 49.5 27 49.5Z" fill="#37ACF4"/>
    </g>
  </svg>
  );
  const ThumbsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <mask id="mask0_1069_2873" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_1069_2873)">
      <path d="M47.25 18C48.45 18 49.5 18.45 50.4 19.35C51.3 20.25 51.75 21.3 51.75 22.5V27C51.75 27.2625 51.7219 27.5437 51.6656 27.8437C51.6094 28.1437 51.525 28.425 51.4125 28.6875L44.6625 44.55C44.325 45.3 43.7625 45.9375 42.975 46.4625C42.1875 46.9875 41.3625 47.25 40.5 47.25H22.5C21.2625 47.25 20.2031 46.8094 19.3219 45.9281C18.4406 45.0469 18 43.9875 18 42.75V19.8562C18 19.2562 18.1219 18.6844 18.3656 18.1406C18.6094 17.5969 18.9375 17.1187 19.35 16.7062L31.5563 4.55623C32.1188 4.03123 32.7844 3.71248 33.5531 3.59998C34.3219 3.48748 35.0625 3.61873 35.775 3.99373C36.4875 4.36873 37.0031 4.89373 37.3219 5.56873C37.6406 6.24373 37.7062 6.93748 37.5187 7.64998L34.9875 18H47.25ZM9 47.25C7.7625 47.25 6.70312 46.8094 5.82188 45.9281C4.94063 45.0469 4.5 43.9875 4.5 42.75V22.5C4.5 21.2625 4.94063 20.2031 5.82188 19.3219C6.70312 18.4406 7.7625 18 9 18C10.2375 18 11.2969 18.4406 12.1781 19.3219C13.0594 20.2031 13.5 21.2625 13.5 22.5V42.75C13.5 43.9875 13.0594 45.0469 12.1781 45.9281C11.2969 46.8094 10.2375 47.25 9 47.25Z" fill="#37ACF4"/>
    </g>
  </svg>
  );
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


  useEffect(() => {
    document.body.style.backgroundColor = "#F0F8FF";
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);


  return (
    <div>
      <Header />
      <div className="cceCase-top">
        <div className="cceCase-backTo">
          <Link to="/chronicle" className="left-arrow">
            <LeftArrow />
          </Link>
          <label className="cceCase-backTo-text">{t("backToSol")}</label>
        </div>
        <div className="cceCase-banner">
          <div className="cceCase-left-content">
            <span className="cceCase-sub">{t("caseSub")}</span>
            <span className="cceCase-title">{t("caseTitle")}</span>
            <img className="case-logo" src={logo} alt="logo" />
          </div>
          <img className="case-mockUp" src={topImg} alt="mockup" />
        </div>
      </div>

      {/* Our Work */}
      <div className="case-top-three">
        <label className="case-section-label">{caseContent[0].works}</label>
        <div className="work-three">
          <div className="work-part">
            <span className="top-three-icons"><GearIcon /></span>
            <div className="work-text">{caseContent[0].leftText}</div>
          </div>
          <div className="work-part">
            <span className="top-three-icons"><FaceIcon /></span>
            <div className="work-text">{caseContent[0].midText}</div>
          </div>
          <div className="work-part">
            <span className="top-three-icons"><ThumbsIcon /></span>
            <div className="work-text">{caseContent[0].rightText}</div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="cceCase-main">
        <div className="timeline-wrap">
          <div className="timeline">
            <label className="case-section-label">{caseContent[1].timeline}</label>
            <img className="time-img" src={timelineImg} alt="timeline" />
            <span className="case-notes">{caseContent[1].notes}</span>
          </div>
          <div className="process-texts">
            <div className="process-titles">{caseContent[1].stratTitle}</div>
            <ul className="case-process-lst">
              <li>{caseContent[1].stratStep1}</li>
              <li>{caseContent[1].stratStep2}</li>
              <li>{caseContent[1].stratStep3}</li>
              <li>{caseContent[1].stratStep4}</li>
            </ul>
            <div className="process-titles">{caseContent[1].desTitle}</div>
            <ul className="case-process-lst">
              <li>{caseContent[1].desStep1}</li>
              <li>{caseContent[1].desStep2}</li>
              <li>{caseContent[1].desStep3}</li>
              <li>{caseContent[1].desStep4}</li>
            </ul>
            <div className="process-titles">{caseContent[1].uxTitle}</div>
            <ul className="case-process-lst">
              <li>{caseContent[1].uxStep1}</li>
              <li>{caseContent[1].uxStep2}</li>
              <li>{caseContent[1].uxStep3}</li>
            </ul>
            <div className="process-titles">{caseContent[1].devTitle}</div>
            <ul className="case-process-lst">
              <li>{caseContent[1].devStep1}</li>
              <li>{caseContent[1].devStep2}</li>
            </ul>
          </div>
        </div>
        <div className="process-imgs">
          <img className="proc-img" src={oldSite} alt="oldSite" />
          <img className="proc-img" src={fontImg} alt="fontImg" />
          <img className="proc-img" src={report} alt="report" />
          <img className="proc-img" src={newSite} alt="newSite" />
        </div>
      </div>

      {/* Bottom Part */}
      <div className="cceCase-btm">
        <div className="cceCase-btm-detail">
          <label className="cceCase-btm-title">{caseContent[2].btmTitle}
          </label>
          <div className="cceCase-btm-texts">{caseContent[2].btmTexts}</div>
          <button className="cceCase-btm-btn">
            <a href="https://forms.cloud.microsoft/Pages/DesignPageV2.aspx?subpage=design&FormId=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAApSLa8JUOUlLTU9JS1U0TzBFNVAwQlFNTlpSVThGQS4u&Token=8acc61a875824515b60f1ca83447b16c" target="_blank" rel="noopener noreferrer">
            {caseContent[2].caseBtmBtn}
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default CceCase;