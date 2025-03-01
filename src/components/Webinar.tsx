import React from "react";
import { useTranslation } from "react-i18next";

import Header from "./Header";
import "../styles/webinar.css";
import cloud from "../components/officeHours/Cloud.png";
import newWebinar from "../components/03312024.png";

type WebinarType = {
  image: string;
  title: string;
  date: string;
  description: string;
};

const Webinar = () => {
  const { t } = useTranslation("webinar");
  const webinars: WebinarType[] = t("webinar", { ns: "webinar", returnObjects: true });

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
            </div>
          </div>

          {/* Webinar Series*/}
          <div className="webinar-series">
            <label className="section-label">{t("sectionTitle")}</label>
            <img className="new-webinar" src={newWebinar} alt="webinar-poster"/>

          </div>

          {/* Past Webinar */}
          <div className="past-webinar">
            <label className="section-label">{t("pastWebinar")}</label>
            <div className="webinar-container">
              {webinars.map((webinar, index) => (
                <div key={index} className="webinar-card">
                  <img src={webinar.image} alt={webinar.title} className="webinar-image" />
                  <div className="webinar-info">
                    <h4 className="webinar-title">{webinar.title}</h4>
                    <p className="webinar-date">{webinar.date}</p>
                    <p className="webinar-text">{webinar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

  
      </div>
    </div>
  ); 
}

export default Webinar;