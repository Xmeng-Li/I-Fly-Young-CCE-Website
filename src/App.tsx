import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// All Webpage
import Home from "./components/Home";
import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";
import OurTeam from "./components/OurTeam";
import Webinar from "./components/webinar/Webinar";
import AllVideo from "./components/webinar/Video";
import Interview from "./components/programs/Interview";
import Intern from "./components/programs/Intern";
import Project from "./components/programs/Project";
import FocusGroup from "./components/programs/FocusGroup";
import Chronicle from "./components/chronicles/Chronicles";

// Chronicle Contents
import EveryoneIsDifferent from "./components/chronicles/EveryoneIsDifferent";
import GoAheadAndAsk from "./components/chronicles/GoAheadAndAsk";
import FailEarly from "./components/chronicles/FailEarly";
import RemindYourself from "./components/chronicles/RemindYourself";
import  StrongestPerson from "./components/chronicles/BecomeStrongestPerson";
import CommunicationIsKey from "./components/chronicles/CommunicationIsKey";
import CertificationHelps from "./components/chronicles/CertificationHelps";
import BiggestHappiness from "./components/chronicles/BiggestHappiness";
import DoSomethingYouLike from "./components/chronicles/DoSomethingYouLike";
import YouCanDoThis from "./components/chronicles/YouCanDoThis";
import PsychIsCalling from "./components/chronicles/PsychIsCalling";
import InternshipsAreOpp from "./components/chronicles/InternshipsAreOpp";
import ExploreRealWorld from "./components/chronicles/ExploreRealWorld";
import GoodTech from "./components/chronicles/GoodTech";
import ConstExposure from "./components/chronicles/ConstExposure";
import StemNotNerds from "./components/chronicles/StemNotNerds";


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office-hours" element={<OfficeHours />} />
          <Route path="/recording" element={<Recording />} />

          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/allVideo" element={<AllVideo />} /> 

          <Route path="/interview" element={<Interview />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/focus-group" element={<FocusGroup />} />
          <Route path="/project" element={<Project />} />
          <Route path="/chronicle" element={<Chronicle />} />


          <Route path="/everyone-is-different" element={<EveryoneIsDifferent />}/>
          <Route path="/go-ahead-and-ask" element={<GoAheadAndAsk />}/>
          <Route path="/fail-early" element={<FailEarly />}/>
          <Route path="/remind-yourself" element={<RemindYourself />}/>
          <Route path="/strongest-person" element={<StrongestPerson />}/>
          <Route path="/communication-is-key" element={<CommunicationIsKey />}/>
          <Route path="/certification-helps" element={<CertificationHelps />}/>
          <Route path="/biggest-happiness" element={<BiggestHappiness />}/>
          <Route path="/do-something-you-like" element={<DoSomethingYouLike />}/>
          <Route path="/you-can-do-this" element={<YouCanDoThis />}/>
          <Route path="/psychology" element={<PsychIsCalling />}/>
          <Route path="/internships-are-opp" element={<InternshipsAreOpp />}/>
          <Route path="/explore-real-world" element={<ExploreRealWorld />}/>
          <Route path="/good-tech" element={<GoodTech />}/>
          <Route path="/const-exposure" element={<ConstExposure />}/>
          <Route path="/stem-not-nerds" element={<StemNotNerds />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
