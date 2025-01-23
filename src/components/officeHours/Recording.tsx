import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Header from "../Header";
import "../../styles/recording.css";

type Recording = {
  date: string;
  title: string;
  question: string;
  category: string;
  audioUrl: string;
};



type RecordingProp = WithTranslation;

class recording extends Component<RecordingProp> {
  playRecording = (audioUrl: string): void => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing audio:", audioUrl);
  };

  render() {
    const { t } = this.props;
    const recordings: Recording[] = t("recordings", {ns: "officehour",returnObjects: true,}) as Recording[];

    
    // Filter recordings into three sections
    const recordingLst = recordings.slice(0, 10);

    // const workAndColleagues = recordings.filter(
    //   (r) => r.category === "Colleague"
    // );
    // const faithAndWork = recordings.filter((r) => r.category === "Faith");
    
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



  

    return (
      <div>
        <Header />
        <p>Office Hours</p>
        <p>All Recordings</p>
        <div>filter buttons</div>

        <div className="recording-container">
          {recordingLst.map((recording, index) => (
          <div key={index}>
            <div className="date">
              <p className="recording-date">{recording.date}</p>

            </div>
            {/* recording content */}
            <div className="recording-content">
              <h5 className="title">{recording.title}</h5>
              <p className="question">{recording.question}</p>
              <button className="play-now-btn" onClick={() => this.playRecording(recordingLst[0]?.audioUrl)}>
              Play Now
              <PlayIcon />
            </button>
            </div>
          </div>
        ))}

        </div>
      

      </div>





    );
  }
}

export default withTranslation()(recording);
