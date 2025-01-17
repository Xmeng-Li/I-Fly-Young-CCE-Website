import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Header from "../Header";
import "../../styles/officehour.css";
import cloud from '../../images/Cloud_oh.png';

class OfficeHours extends Component {
  render() {
    const { t } = this.props;
    const recordings = t("recordings", { ns: "officehour", returnObjects: true });

    // filter recordings into three sections
    const mostRecent = recordings.slice(0, 5); 
    const workAndColleagues = recordings.filter((r) => r.category === "Colleague");
    const faithAndWork = recordings.filter((r) => r.category === "Faith");

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="top-container">
          <img src={cloud} alt="could"/>
        </div>

        <div className="main-container">
          {/* Left: Most Recent */}
          <div className="most-recent">
            <h4>Most Recent</h4>
            {mostRecent.map((recording, index) => (
              <div key={index} className="recording-card">
                <p>{recording.date}</p>
                <h5>{recording.title}</h5>
                <p>{recording.question}</p>
              </div>
              ))
            }
          </div>

          {/* Middle: Work & Colleague */}
          <div className="colleagues">
            <h4>Work & Colleagues</h4>
            {workAndColleagues.map((recording, index) => (
                <div key={index} className="recording-card">
                  <p>{recording.date}</p>
                  <h5>{recording.title}</h5>
                  <p>{recording.question}</p>
                </div>
              ))
            }
          </div>

          {/* Right: Faith & Work */}
          <div className="faith">
            <h4>Faith & Work</h4>
            {faithAndWork.map((recording, index) => (
                <div key={index} className="recording-card">
                  <p>{recording.date}</p>
                  <h5>{recording.title}</h5>
                  <p>{recording.question}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(OfficeHours);
