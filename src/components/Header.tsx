import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from '../components/officeHours/CCELogo.png';
import "../styles/header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const [isChinese, setIsChinese] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="logo-title">I Fly Young CCE</div>
        </div>
        {/* Hamburger Icon*/}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar ${menuOpen ? "show" : ""}`}>
          <div className="nav-text">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              {t("home")}
            </NavLink>
            <NavLink to="/office-hours" onClick={() => setMenuOpen(false)}>
              {t("office_hours")}
            </NavLink>
            <NavLink to="/our-team" onClick={() => setMenuOpen(false)}>
              {t("our_team")}
            </NavLink>
          

            <span>{t("chronicles")}</span>
            <span>{t("programs")}</span>
            <span>{t("webinar")}</span>

            <a href="https://iflyyoung.com/" target="_blank" rel="noopener noreferrer">
              {t("iFlyYoung")}
            </a>
            <button className="language-btn" onClick={toggleLanguage}>{isChinese ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
