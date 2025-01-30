import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import OfficeHours from "./components/officeHours/OfficeHours";  
import Recording from "./components/officeHours/Recording";


function App() {
  return (
    <Router>
      <div className="container">
        <OfficeHours />
        {/* <Recording /> */}
        
        {/* <Routes>
          <Route path="/office-hours" element={<OfficeHours />} />
          <Route path="/recording" element={<Recording />} />
        </Routes> */}

      </div>
    </Router>
  );
}

export default App;
