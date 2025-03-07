import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";
import OurTeam from "./components/OurTeam";
import Webinar from "./components/webinar/Webinar";

// import Footer from "./components/Footer";


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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
