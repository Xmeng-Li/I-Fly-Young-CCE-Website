import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Header from "../Header";
import "../../styles/officehour.css";
import cloud from '../../images/Cloud_oh.png';


class OfficeHours extends Component {
  render() {
    const { t } = this.props;
    const recordings = t("recordings", 'viewMore', { ns: "officehour", returnObjects: true });
    const newRecording = recordings.slice(0, 1); 

    // filter recordings into three sections
    const mostRecent = recordings.slice(1, 5); 
    const workAndColleagues = recordings.filter((r) => r.category === "Colleague");
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

    const PlayIconRound = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_86_4121" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_86_4121)">
          <path d="M10.65 15.75L15.525 12.625C15.7583 12.475 15.875 12.2667 15.875 12C15.875 11.7333 15.7583 11.525 15.525 11.375L10.65 8.25C10.4 8.08333 10.1458 8.07083 9.8875 8.2125C9.62917 8.35417 9.5 8.575 9.5 8.875V15.125C9.5 15.425 9.62917 15.6458 9.8875 15.7875C10.1458 15.9292 10.4 15.9167 10.65 15.75ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#333333"/>
        </g>
      </svg>
    );

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="top-container">
          <img src={cloud} alt="could"/>
          <div className="new-recording">
            {newRecording.map((recording, index) => (
                <div key={index}>
                  <h3 className="new-audio-title">{recording.title}</h3>
                  <p>{recording.date}</p>
                  <p className="new-audio-question">{recording.question}</p>
                </div>
                ))
              }
            <button className="play-now-btn">
              Play Now
              <PlayIcon />
            </button>
          </div>
        </div>


        <div className="main-container">
          {/* <a className="view-more">View All Recordings</a> */}

          <div className="recording-card">
            {/* Left: Most Recent */}
            <div className="most-recent">
              <div className="cate-container">
                <h4 className="category-title">Most Recent</h4>
                <div className="recording-view-more">{t('viewMore', { ns: 'officehour' })}</div>
              </div>

              {/* Recording */}
              <div className="recording">
                {mostRecent.map((recording, index) => (
                  <div key={index}>
                    <div className="date-and-icon">
                      {/* date */}
                      <div className="recording-date">
                        <p className="date">{recording.date}</p>
                      </div>
                      <div className="play-icon-round">
                        <PlayIconRound onClick={() => this.playRecording(recording.audioUrl)} />
                      </div>
                    </div>
                    
                    {/* recording content */}
                    <div className="recording-content">
                      <h5 className="title">{recording.title}</h5>
                      <p className="question">{recording.question}</p>
                    </div>
                    <div>
                    
                    </div>
                  </div>
                  ))
                }
              </div>
            </div>

            {/* Middle: Work & Colleague */}
            <div className="colleagues">
              <h4 className="category-title">Work & Colleagues</h4>
              {workAndColleagues.map((recording, index) => (
                  <div key={index}>
                    <p>{recording.date}</p>
                    <h5>{recording.title}</h5>
                    <p>{recording.question}</p>
                  </div>
                ))
              }
            </div>

            {/* Right: Faith & Work */}
            <div className="faith">
              <h4 className="category-title">Faith & Work</h4>
              {faithAndWork.map((recording, index) => (
                  <div key={index}>
                    <p>{recording.date}</p>
                    <h5>{recording.title}</h5>
                    <p>{recording.question}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div>
          <div>Office Hours Panelists</div>
          {/* <div className="panelists">
            {panelists.map(panelist => (
              <div key={panelist.id} className="panelist-card">
                <img src={panelist.image} alt={panelist.name} />
                <h4>{panelist.name}</h4>
                <p>{panelist.role}</p>
              </div>
            ))}
          </div> */}
        </div>


        <div>Office Hours</div>
      </div>
    );
  }
  // play audio
  playRecording = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing audio:", audioUrl); 
  };
}

export default withTranslation()(OfficeHours);
