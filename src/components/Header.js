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
      <nav className='nav-bar'>
        <img src={logo} alt="Logo" className="logo" />
        <p>I Fly Young CCE</p>
        
        {t("home")} {t("webinar")} {t("office_hours")} {t("our_team")} {t("chronicles")} {t("programs")}

        <button className="language-btn" onClick={toggleLanguage}>
          {isChinese ? 'EN' : '中文'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
