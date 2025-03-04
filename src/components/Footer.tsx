import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../styles/footer.css";
import logo from '../components/officeHours/CCELogo.png';

const Footer = () => {

  const { t } = useTranslation("footer");
  return (
    <div>
      <div className='footer-logo-box'>
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-logo-title">I Fly Young CCE</div>
      </div>

      <div className="texts-and-links">
        <div className="footer-texts">

        </div>
        <div className="footer-links">

        </div>
      </div>
      
    </div>
  );

};

export default Footer;