import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";
import OurTeam from "./components/OurTeam";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<OfficeHours />} />
          <Route path="/office-hours" element={<OfficeHours />} />
          <Route path="/recording" element={<Recording />} />
        </Routes> */}


      <OurTeam />
      </div>
    </BrowserRouter>
  );
}

export default App;
