import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/webinar.css";
import cloud from "../../components/officeHours/Cloud.png";
import newWebinar from "./03312024.png";

type WebinarType = {
  image: string;
  title: string;
  date: string;
  description: string;
  videoLink: string;
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

  const DateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <mask id="mask0_85_1490" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_85_1490)">
      <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20Z" fill="#333333"/>
    </g>
  </svg>
  );

  const NoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <mask id="mask0_820_4956" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
        <rect width="28" height="28" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_820_4956)">
        <path d="M24.9667 16.7416L17.5583 24.1499C17.4417 24.2666 17.3104 24.3541 17.1646 24.4124C17.0188 24.4708 16.8681 24.4999 16.7125 24.4999H15.75C15.5944 24.4999 15.4583 24.4416 15.3417 24.3249C15.225 24.2083 15.1667 24.0721 15.1667 23.9166V22.9541C15.1667 22.7985 15.1958 22.6478 15.2542 22.502C15.3125 22.3562 15.4 22.2249 15.5167 22.1083L22.925 14.6999L24.9667 16.7416ZM2.33334 19.8333V8.16659C2.33334 7.52492 2.56181 6.97561 3.01875 6.51867C3.4757 6.06172 4.025 5.83325 4.66667 5.83325H23.3333C23.975 5.83325 24.5243 6.06172 24.9813 6.51867C25.4382 6.97561 25.6667 7.52492 25.6667 8.16659C25.6667 8.38047 25.55 8.62839 25.3167 8.91034C25.0833 9.19228 24.8111 9.33325 24.5 9.33325H24.2958C23.9847 9.33325 23.6882 9.39159 23.4063 9.50825C23.1243 9.62492 22.8764 9.7902 22.6625 10.0041L18.1708 14.4958C17.9569 14.7096 17.709 14.8749 17.4271 14.9916C17.1451 15.1083 16.8486 15.1666 16.5375 15.1666H8.16667C7.83611 15.1666 7.55903 15.2784 7.33542 15.502C7.11181 15.7256 7 16.0027 7 16.3333C7 16.6638 7.11181 16.9409 7.33542 17.1645C7.55903 17.3881 7.83611 17.4999 8.16667 17.4999H13.7667C14.0389 17.4999 14.2236 17.6166 14.3208 17.8499C14.4181 18.0833 14.3694 18.2971 14.175 18.4916L11.1708 21.4958C10.9569 21.7096 10.709 21.8749 10.4271 21.9916C10.1451 22.1083 9.84861 22.1666 9.5375 22.1666H4.66667C4.025 22.1666 3.4757 21.9381 3.01875 21.4812C2.56181 21.0242 2.33334 20.4749 2.33334 19.8333ZM8.16667 12.8333H12.8333C13.1639 12.8333 13.441 12.7214 13.6646 12.4978C13.8882 12.2742 14 11.9971 14 11.6666C14 11.336 13.8882 11.0589 13.6646 10.8353C13.441 10.6117 13.1639 10.4999 12.8333 10.4999H8.16667C7.83611 10.4999 7.55903 10.6117 7.33542 10.8353C7.11181 11.0589 7 11.336 7 11.6666C7 11.9971 7.11181 12.2742 7.33542 12.4978C7.55903 12.7214 7.83611 12.8333 8.16667 12.8333ZM25.6667 16.0416L23.625 13.9999L24.675 12.9499C24.7722 12.8527 24.8792 12.8041 24.9958 12.8041C25.1125 12.8041 25.2194 12.8527 25.3167 12.9499L26.7167 14.3499C26.8139 14.4471 26.8625 14.5541 26.8625 14.6708C26.8625 14.7874 26.8139 14.8944 26.7167 14.9916L25.6667 16.0416Z" fill="#1C1B1F"/>
      </g>
  </svg>
  )

  const zoomMeeting: Meeting[] = t("meeting", {ns: "webinar", returnObjects: true})

  const rightContent: Content[] = t("content", {ns: "webinar",returnObjects: true})

  const mostRecent = webinars.slice(0, 6);


  return (
    <div>
      <Header />
        <div className="web-top-part">
          <div className="web-banner">
            <img className="web-cloud" src={cloud} alt="cloud" />
            <label className="web-title">{t("pageBanner")}</label>
            <div className="web-text">{t("bannerText")}</div>
          </div>
          <div className="web-right-text-container">
            <div className="web-page-title">{t("pageTitle")}</div>
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
                <div className="icon-and-title">
                  <span className="title-icons"><DateIcon /></span>
                  <p className="webinar-title">
                    {t("leftTitle", { ns: "webinar" })}
                  </p>
                </div>
                {zoomMeeting.map((meeting: Meeting, index: number) => (
                <div className="meeting-info" key={index}>
                  {meeting.date} {meeting.time} {meeting.region}
                </div>
                ))}
                <button className="web-join-btn">
                  <Link to="https://us02web.zoom.us/j/84100682160?pwd=b0Y5YklTSms3S1hXN0NvRDF5Z2hNUT09#success">
                    {t("joinUs", { ns: "webinar" })}
                  </Link>
                </button>
              </div>

              {/* Right part */}
              <div className="right-info">
                <div className="icon-and-title">
                  <span className="title-icons"><NoteIcon /></span>
                  <p className="webinar-title">
                    {t("rightTitle", { ns: "webinar" })}
                  </p>
                </div>
                <div className="content-row">
                  <div className="content-details">
                    <label className="cnt-title">{rightContent[0].about}</label>
                    <div className="item1">{rightContent[0].one}</div>
                    <div className="item2">{rightContent[0].two}</div>
                    <div className="item3">{rightContent[0].three}</div>
                  </div>
                  <div className="content-details">
                    <label className="cnt-title">{rightContent[1].speakers}</label>
                    <div className="item1">{rightContent[1].one}</div>
                    <div className="item2">{rightContent[1].two}</div>
                    <div className="item3">{rightContent[1].three}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Webinar */}
        <div className="past-webinar">
          <div className="past-webinar-title">
            <label className="section-label">{t("pastWebinar")}</label>
            <label className="web-view-more">
              <Link to="/allVideo">{t("viewMore")}</Link>
            </label>
          </div>
          
          <div className="webinar-container">
            {mostRecent.map((webinar, index) => (
              <div key={index} className="webinar-card">
                <img src={webinar.image} alt={webinar.title} className="webinar-image" />
                <div className="webinar-info">
                  <h4 className="webinar-title">{webinar.title}</h4>
                  <p className="webinar-date">{webinar.date}</p>
                  <p className="webinar-text">{webinar.description}</p>
                  <button className="web-watch-now-btn" 
                    onClick={() => window.open(webinar.videoLink, "_blank")}>
                    {t("watchNow", { ns: "webinar" })}<PlayIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  ); 
}

export default Webinar;