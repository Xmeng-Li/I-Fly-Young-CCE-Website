import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/landing.css";
import cloud from "../../components/officeHours/Cloud.png";
import table from "./img1.jpeg";
import pcImg from "./pc-img.jpeg";
import meetingImg from "./meeting-img.jpeg";
import handsImg from "./hands-img.jpeg";



const Programs = () => {
  const { t } = useTranslation("programs");
  

  return (
    <div>
      <Header />
        <div className="prog-top-part">
          <div className="program-banner">
            <img className="program-cloud" src={cloud} alt="cloud" />
            <label className="landing-title">{t("pageBanner")}</label>
            <div className="landing-text">{t("bannerText")}</div>
          </div>
          <div className="program-right-text-container">
            <div className="prog-page-title">{t("pageTitle")}</div>
            <div className="prog-page-text">{t("pageText")}</div>
          </div>
        </div>

        {/* Main Part */}
        <div className="prog-main-container">
          <label className="section-title">{t("EnSection")}</label>
          <div className="en-section">
            <div className="top-left">
              <img className="table" src={table} alt="table" />
              <div className="program-title">{t("Interview")}</div>
              <div className="program-text">{t("InterviewText")}</div>
              <button className="learn-more-btn">
                <Link to = "/interview">{t("LearnMore")}</Link>
              </button>
            </div>

            <div className="top-right">
              <img className="pc" src={pcImg} alt="pc" />
              <div className="program-title">{t("Internship")}</div>
              <div className="program-text">{t("InternshipText")}</div>
              <button className="learn-more-btn">
                {/* <Link> */}
                  {t("LearnMore")}
                {/* </Link> */}
              </button>
            </div>
          </div>

          {/* Chinese Part */}
          <label className="section-title">{t("ZhSection")}</label>
          <div className="zh-section">
            <div className="bottom-left">
              <img className="meeting" src={meetingImg} alt="meeting" />
              <div className="program-title">{t("FocusGroup")}</div>
              <div className="program-text">{t("FocusGroupText")}</div>
              <button className="learn-more-btn">
                {/* <Link> */}
                  {t("LearnMore")}
                {/* </Link> */}
              </button>
            </div>

            <div className="bottom-right">
              <img className="hands" src={handsImg} alt="hands" />
              <div className="program-title">{t("Project")}</div>
              <div className="program-text">{t("ProjectText")}</div>
              <button className="learn-more-btn">
                {/* <Link> */}
                  {t("LearnMore")}
                {/* </Link> */}
              </button>
            </div>
          </div>  
        </div>

        

        
      <Footer />
    </div>
  ); 
}

export default Programs;