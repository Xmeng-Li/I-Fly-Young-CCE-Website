import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Header from "../Header";
import "../../styles/officehour.css";
import cloud from "../officeHours/Cloud_oh.png";

type Recording = {
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
type OfficeDetail = {
  icon: string;
  duration: string;
  title: string;
 };
 
// type Meeting = {
//   id: string;
//   passcode: string;
//   buttonText: string;
// };
// type TimeDetail = {
//   type: string;
//   dates: string;
//   times: Array<{ region: string; time: string }>;
// };



type OfficeHoursProps = WithTranslation;

class OfficeHours extends Component<OfficeHoursProps> {
  playRecording = (audioUrl: string): void => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing audio:", audioUrl);
  };

  render() {
    const { t } = this.props;

    // Fetch recordings from translations (assuming translations return an array)
    const recordings: Recording[] = t("recordings", {
      ns: "officehour",
      returnObjects: true,
    }) as Recording[];
    const newRecording = recordings.slice(0, 1);

    const viewMoreText: string = t("viewMore", { ns: "officehour" });
    // Filter recordings into three sections
    const mostRecent = recordings.slice(1, 5);
    const workAndColleagues = recordings.filter(
      (r) => r.category === "Colleague"
    );
    const faithAndWork = recordings.filter((r) => r.category === "Faith");

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

    const PlayIconRound = ({ onClick }: { onClick: () => void }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={onClick}
        style={{ cursor: "pointer" }}
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
 


    return (
      <div>
        <Header />
        {/* Top Section */}
        <div className="top-container">
          <img src={cloud} alt="cloud" />
          <div className="new-recording">
            {newRecording.map((recording, index) => (
              <div key={index}>
                <h3 className="new-audio-title">{recording.title}</h3>
                <p>{recording.date}</p>
                <p className="new-audio-question">{recording.question}</p>
              </div>
            ))}
            <button className="play-now-btn" onClick={() => this.playRecording(newRecording[0]?.audioUrl)}>
              Play Now
              <PlayIcon />
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="main-container">
          {/* <a className="view-more">View All Recordings</a> */}
          <div className="recording-card">
            {/* Left: Most Recent */}
            <div className="most-recent">
              <div className="cate-container">
                <h4 className="category-title">{t("Most Recent", { ns: "officehour" })}</h4>
                <div className="recording-view-more">{viewMoreText}</div>
              </div>

              <div className="recording">
                {mostRecent.map((recording, index) => (
                  <div key={index}>
                    <div className="date-and-icon">
                      <p className="recording-date">{recording.date}</p>
                      <PlayIconRound onClick={() => this.playRecording(recording.audioUrl)} />
                    </div>
                    {/* recording content */}
                    <div className="recording-content">
                      <h5 className="title">{recording.title}</h5>
                      <p className="question">{recording.question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Colleague */}
            <div className="colleagues">
              <h4 className="category-title">{t("Work & Colleague", { ns: "officehour" })}</h4>
              {workAndColleagues.map((recording, index) => (
                <div key={index}>
                  <p>{recording.date}</p>
                  <h5>{recording.title}</h5>
                  <p>{recording.question}</p>
                </div>
              ))}
            </div>

            {/* Faith & Work */}
            <div className="faith">
              <h4 className="category-title">{t("Faith & Work", { ns: "officehour" })}</h4>
              {faithAndWork.map((recording, index) => (
                <div key={index}>
                  <p>{recording.date}</p>
                  <h5>{recording.title}</h5>
                  <p>{recording.question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panelists */}
        <div className="panelists-section">
          <h5 className="panelists-title">{t("panelistsTitle", { ns: "officehour" })}</h5>
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
            <h5 className="office-title">{t("OfficeTitle", { ns: "officehour" })}</h5>
            <div className="three-parts">

              {/* Left part */}
                <p className="left-title">{t("leftTitle", { ns: "officehour" })}</p>
                <div className="left-detail">
                  <p className="section-text">{t("text", { ns: "officehour" })}</p>
                    {office.map((item: any, index: number) => (
                      <div key={index} className="office-text">
                        <span className="pencil"><Pencil /></span>
                        <span className="office-content">{item.title}</span>
                      </div>
                    ))}
                </div>


            </div>

            
          </div>

          {/* Zoom Meeting */}
          

          {/* Zoom Meeting 2 */}
          
        </div>
        


      </div>
    );
  }
}

export default withTranslation()(OfficeHours);
