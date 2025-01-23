import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";



import OfficeHours from "./components/officeHours/OfficeHours";
import Recording from "./components/officeHours/Recording";

function App() {
  return (
    <div className="container">
      {/* <OfficeHours /> */}
      <Recording />
      
    </div>
  );
}

export default App;
