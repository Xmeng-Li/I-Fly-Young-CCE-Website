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

type Meeting = {
  date: string;
  time: string;
  region: string;
};

type Content = {
  about?: string;
  speakers?: string;
  one: string;
  two: string;
  three: string;
}

const Webinar = () => {
  const { t } = useTranslation("webinar");
  const webinars: WebinarType[] = t("webinar", { ns: "webinar", returnObjects: true });

  const PlayIcon = () => (
    <svg
      className="play-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_85_1485"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_85_1485)">
        <path
          d="M6 18.5976V6.19809C6 5.85865 6.1198 5.57411 6.35941 5.34449C6.59901 5.11487 6.87855 5.00006 7.19802 5.00006C7.29786 5.00006 7.40269 5.01504 7.51251 5.04499C7.62233 5.07494 7.72715 5.11986 7.82699 5.17976L17.5909 11.3795C17.7706 11.4993 17.9054 11.6491 17.9952 11.8288C18.0851 12.0085 18.13 12.1982 18.13 12.3979C18.13 12.5975 18.0851 12.7872 17.9952 12.9669C17.9054 13.1466 17.7706 13.2964 17.5909 13.4162L7.82699 19.616C7.72715 19.6759 7.62233 19.7208 7.51251 19.7507C7.40269 19.7807 7.29786 19.7957 7.19802 19.7957C6.87855 19.7957 6.59901 19.6809 6.35941 19.4512C6.1198 19.2216 6 18.9371 6 18.5976Z"
          fill="#333333"
        />
      </g>
    </svg>
  );

  const zoomMeeting: Meeting[] = t("meeting", {ns: "webinar", returnObjects: true})

  const rightContent: Content[] = t("content", {ns: "webinar",returnObjects: true})

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
            <div className="series-container">
              <img className="new-webinar" src={newWebinar} alt="webinar-poster"/>
              <div className="description">
                {/* Left part */}
                <div className="left-info">
                  <p className="webinar-title">{t("leftTitle", { ns: "webinar" })}</p>
                  {zoomMeeting.map((meeting: Meeting, index: number) => (
                  <div className="meeting-info" key={index}>
                    {meeting.date} {meeting.time} {meeting.region}
                  </div>
                ))}
                </div>

                {/* Right part */}
                <div className="right-info">
                  <p className="webinar-title">{t("rightTitle", { ns: "webinar" })}</p>
                  <div className="content-container">
                    {rightContent.map((section: Content, index: number) => (
                    <div className="content-details" key={index}>
                      <div className="cnt-title">{section.about || section.speakers}</div>
                      <div className="item1">{section.one}</div>
                      <div className="item2">{section.two}</div>
                      <div className="item3">{section.three}</div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                    <button className="watch-now-btn">
                      {t("watchNow", { ns: "webinar" })}<PlayIcon />
                    </button>
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