import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import "../../styles/officehour.css";
import cloud from "../officeHours/Cloud.png";
import blueAirplane from "../officeHours/blueAirplane.png";
import orangeAirplane from "../officeHours/orangeAirplane.png";


type Recording = {
  id: string;
  date: string;
  title: string;
  question: string;
  category: string;
  audioUrl: string;
};

type Panelist = {
  name: string;
  role: string;
  image: string;
};

// Bottom Part
type OfficeDetail = {
  title: string;
 };
type Meeting = {
  id: string;
  passcode: string;
};
type TimeDetail = {
  type: string;
  dates: string;
  times: Array<{ region: string; time: string }>;
};

type OfficeHoursProps = WithTranslation & {
  navigate: NavigateFunction;
};

class OfficeHours extends Component<OfficeHoursProps> {
  playRecording = (audioUrl: string): void => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing audio:", audioUrl);
  };


  // Handle Date
  formatDate = (date: string) => {
    const [month, day, year] = date.split("/");
    const monthDay = `${month}/${day}`;
    return {monthDay, year};
  };

  // Link round playIcon to its player
  PlayIconRound = ({ recordingId }: { recordingId: string }) => {
    const { navigate } = this.props;
    const handleClick = () => {
      navigate(`/recording?play=${recordingId}`);
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <mask
          id="mask0_86_4121"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_86_4121)">
          <path
            d="M10.65 15.75L15.525 12.625C15.7583 12.475 15.875 12.2667 15.875 12C15.875 11.7333 15.7583 11.525 15.525 11.375L10.65 8.25C10.4 8.08333 10.1458 8.07083 9.8875 8.2125C9.62917 8.35417 9.5 8.575 9.5 8.875V15.125C9.5 15.425 9.62917 15.6458 9.8875 15.7875C10.1458 15.9292 10.4 15.9167 10.65 15.75ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#333333"
          />
        </g>
      </svg>
    );
  };

  // Link play now icon to its player
  OhPlayIcon = ({ recordingId }: { recordingId: string }) => {
    const { navigate } = this.props;
    const handleClick = () => {
      navigate(`/recording?play=${recordingId}`);
    };
    return (
      <svg
        className="play-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
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
  };

  
  render() {
    const { t } = this.props;
    const recordings: Recording[] = t("recordings", {ns: "officehour",returnObjects: true,}) as Recording[];
    const newRecording = recordings.slice(0, 1);
    
    // Main Three Sections
    const viewAll: string = t("viewAll", { ns: "officehour" });
    const viewMoreText: string = t("viewMore", { ns: "officehour" });
    const mostRecent = recordings.slice(1, 6);
    const workAndColleagues = recordings.filter((r) => r.category === "Colleague").slice(0, 5);
    const faithAndWork = recordings.filter((r) => r.category === "Faith").slice(0, 5);

    // Bottom Section 
    const panelists: Panelist[] = t("speaker", { ns: "officehour", returnObjects: true });

    const office: OfficeDetail[] = t("detail", { ns: "officehour", returnObjects: true }); 
    const Pencil = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_85_1481" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_85_1481)">
        <path d="M4.20012 20.975C3.85012 21.0583 3.54595 20.9708 3.28762 20.7125C3.02928 20.4542 2.94178 20.15 3.02512 19.8L3.90012 15.55L8.45012 20.1L4.20012 20.975ZM10.0751 18.875L5.12512 13.925L15.4501 3.59999C15.8335 3.21666 16.3084 3.02499 16.8751 3.02499C17.4418 3.02499 17.9168 3.21666 18.3001 3.59999L20.4001 5.69999C20.7834 6.08333 20.9751 6.55833 20.9751 7.12499C20.9751 7.69166 20.7834 8.16666 20.4001 8.54999L10.0751 18.875Z" fill="#333333"/>
      </g>
    </svg>
    );

    const meeting: Meeting[] = t("zoomMeeting", {ns: "officehour",returnObjects: true,})

    const timeDetail: TimeDetail[] = t("meetingTime", {ns: "officehour",returnObjects: true,})
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


    return (
      <div>
        <Header />
        {/* Top Section */}
        <div className="top-container">
          <div className="banner">
            <img className="cloud" src={cloud} alt="cloud" />
            <label className="cloud-title">{t("banner", { ns: "officehour" })}</label>
          </div>
          
          <div className="new-recording">
            {newRecording.map((recording, index) => (
              <div key={index}>
                <h3 className="new-audio-title">{recording.title}</h3>
                <p className="new-audio-date">{recording.date}</p>
                <p className="new-audio-question">{recording.question}</p>
                
                <button 
                  className="oh-play-now-btn"
                  onClick={() => this.props.navigate(`/recording?play=${recording.id}`)}
                  >
                  {t("playNow", { ns: "officehour" })}
                  <div className="oh-play-icon">
                    <this.OhPlayIcon recordingId={recording.id} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Main Section */}
        <div className="main-container">
          <div className="view-all">
            <Link to="/recording">{viewAll}</Link>
          </div>
         
          <div className="recording-card">
            {/* Left: Most Recent */}
            <div className="most-recent">
              <div className="cate-container">
                <label className="category-title">{t("ohRecent", { ns: "officehour" })}</label>
                <div className="section-view-more">
                  <Link to="/recording">{viewMoreText}</Link>
                </div>
              </div>

              <div className="main-left">
                {mostRecent.map((recording, index) => {
                  const { monthDay, year } = this.formatDate(recording.date);
                  return (
                    <div className="oh-each-recording" key={index}>
                      <div className="oh-date-box">
                        <div className="left-month-day">{monthDay}</div>
                        <div className="left-year">{year}</div>
                      </div>
                      <div className="oh-content">
                        <div className="oh-title">{recording.title}</div>
                        <div className="oh-question">{recording.question}</div>
                      </div>
                      < this.PlayIconRound recordingId={recording.id} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Work & Colleague */}
            <div className="colleagues">
              <div className="cate-container">
                <label className="category-title">{t("ohColleague", { ns: "officehour" })}</label>
                <div className="section-view-more">
                  <Link to="/recording?filter=colleague">{viewMoreText}</Link>
                </div>
              </div>

              <div className="main-mid">
                {workAndColleagues.map((recording, index) => {
                  const { monthDay, year } = this.formatDate(recording.date);
                  return (
                    <div className="oh-each-recording" key={index}>
                      <div className="oh-date-box">
                        <div className="mid-month-day">{monthDay}</div>
                        <div className="mid-year">{year}</div>
                      </div>
                      <div className="oh-content">
                        <div className="oh-title">{recording.title}</div>
                        <div className="oh-question">{recording.question}</div>
                      </div>
                      <this.PlayIconRound recordingId={recording.id}  />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Faith & Work */}
            <div className="faith">
            <div className="cate-container">
                <label className="category-title">{t("ohFaith", { ns: "officehour" })}</label>
                <div className="section-view-more">
                  <Link to="/recording?filter=faith">{viewMoreText}</Link>
                </div>
              </div>

              <div className="main-right">
                {faithAndWork.map((recording, index) => {
                  const { monthDay, year } = this.formatDate(recording.date);
                  return (
                    <div className="oh-each-recording" key={index}>
                      <div className="oh-date-box">
                        <div className="right-month-day">{monthDay}</div>
                        <div className="right-year">{year}</div>
                      </div>
                      <div className="oh-content">
                        <div className="oh-title">{recording.title}</div>
                        <div className="oh-question">{recording.question}</div>
                      </div>
                      <this.PlayIconRound recordingId={recording.id} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        
        {/* Panelists */}
        <div className="panelists-section">
          <div className="title-and-airplane">
            <h5 className="panelists-title">{t("panelistsTitle", { ns: "officehour" })}</h5>
            <img className="blue-airplane" src={blueAirplane} alt="airplane" />
          </div>
          
          <div className="speaker-container">
            {panelists.map((panelist, index) => (
              <div key={index} className="speaker-card">
                <img src={panelist.image} alt={panelist.name} className="speaker-image" />
                
                <div className="speaker">
                  <h4 className="speaker-name">{panelist.name}</h4>
                  <p className="speaker-role">{panelist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Hours */}
        <div className="officehour-container">
          {/* Office Hour Section */}
          <div className="office-section">
            <div className="office-airplane">
              <h5 className="office-title">{t("OfficeTitle", { ns: "officehour" })}</h5>
              <img className="orange-airplane" src={orangeAirplane} alt="airplane" />
            </div>
            
            <div className="three-parts">
              <div className="left-and-mid">
                {/* Left part */}
                <div className="left">
                  <p className="left-title">{t("leftTitle", { ns: "officehour" })}</p>
                  <div className="left-detail">
                    <p className="section-text">{t("text", { ns: "officehour" })}</p>
                      {office.map((item: any, index: number) => (
                        <div key={index} className="office-text">
                          <span className="pencil"><Pencil /></span>
                          <span>{item.title}</span>
                        </div>
                      ))}
                  </div>
                </div>
                {/* Middle part */}
                <div className="mid">
                  <p className="mid-title">{t("midTitle", { ns: "officehour" })}</p>
                  <div className="mid-detail">
                    {meeting.map((zoomMeeting, index) => (
                      <div className="mid-part" key={index}>
                        <div className="mid-text">
                          {Object.entries(zoomMeeting).map(([key, value]) => (
                            <p key={key}>{key}: {value}</p>
                          ))}
                        </div>
                        <button className="join-btn">
                        <Link to="https://us02web.zoom.us/j/84100682160?pwd=b0Y5YklTSms3S1hXN0NvRDF5Z2hNUT09#success">
                          {t("joinUs", { ns: "officehour" })}
                        </Link>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right part */}
              <div className="right">
                <p className="right-title">{t("rightTitle", { ns: "officehour" })}</p>
                <div className="right-detail">
                  <div className="time-box">
                    {timeDetail.map((meetingTime: TimeDetail, index: number) => (
                      <div key={index} className="time-text">
                        <p className="time-type">{meetingTime.type}</p>
                        <div className="icon-and-date">
                          <span className="date-icon"><DateIcon /></span>
                          <p className="time-dates">{meetingTime.dates}</p>
                        </div>

                        <div className="time-list">
                          {meetingTime.times.map((time: any, timeIndex: number) => (
                            <div key={timeIndex} className="time-item">
                              <span className="region">{time.region}</span>{" "}
                              <span className="time">{time.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function withRouter(Component: any) {
  return function (props: any) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}


export default withTranslation()(withRouter(OfficeHours));
