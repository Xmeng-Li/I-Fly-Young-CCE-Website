import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";
import OurTeam from "./components/OurTeam";
import Webinar from "./components/webinar/Webinar";
import AllVideo from "./components/webinar/Video";
import Programs from "./components/programs/LandingPage";
import Interview from "./components/programs/Interview";
import Project from "./components/programs/Project";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<OfficeHours />} />
          <Route path="/office-hours" element={<OfficeHours />} />
          <Route path="/recording" element={<Recording />} />

          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/allVideo" element={<AllVideo />} /> 

          <Route path="/programs" element={<Programs />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
