import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import logo from '../images/CCELogo.png';

import "../styles/header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const [isChinese, setIsChinese] = useState(false);
  const toggleLanguage = () => {
    const newLang = isChinese ? 'en' : 'zh';
    i18n.changeLanguage(newLang); 
    setIsChinese(!isChinese); 
  };

  return (
    <header>
      <nav className='header'>
        <div className='logo-box'>
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-title">I Fly Young CCE</span>
        </div>
        
        <div className='navbar'>
          <div className="nav-text">
            <span>{t("home")}</span>
            <span>{t("webinar")}</span>
            <span>{t("office_hours")}</span>
            <span>{t("our_team")}</span>
            <span>{t("chronicles")}</span>
            <span>{t("programs")}</span>
          </div>
          <button className="language-btn" onClick={toggleLanguage}>
            {isChinese ? 'EN' : '中文'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
