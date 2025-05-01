import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";
import OurTeam from "./components/OurTeam";
import Webinar from "./components/webinar/Webinar";
import AllVideo from "./components/webinar/Video";
import Programs from "./components/programs/LandingPage";
import Interview from "./components/programs/Interview";
import Intern from "./components/programs/Intern";
import Project from "./components/programs/Project";
import FocusGroup from "./components/programs/FocusGroup";


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

          <Route path="/programs" element={<Programs />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/focus-group" element={<FocusGroup />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
