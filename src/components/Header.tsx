import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {useLocation, NavLink } from "react-router-dom";
import logo from '../components/officeHours/CCELogo.png';
import "../styles/header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const [, setIsChinese] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const LangIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.8844M10 14C9.38747 13.7248 8.76265 13.3421 8.16555 12.8844M8.16555 12.8844C6.81302 11.8478 5.60276 10.4266 5 9M8.16555 12.8844C6.56086 15.0229 4.47143 16.7718 2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const toggleLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsChinese(langCode !== 'en');
    setLangMenuOpen(false);
    setMenuOpen(false);
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setLangMenuOpen(false);
  };

  const handleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
    setDropdownOpen(false);
  };
  const closeDropdown = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setLangMenuOpen(false);
  };

  const location = useLocation();
  const programPaths = [
    "/focus-group",
    "/beautiful-land-initiative",
    "/interview",
    "/intern",
    "/cce-class",
    "/webinar",
    "/chronicle",
  ];
  const isProgramPage = programPaths.includes(location.pathname);

  return (
    <header>
      <nav className='header'>
        <a href='/' className='logo-link'>
          <div className='logo-box'>
            <img src={logo} alt="Logo" className="logo" />
            <div className="logo-title">I Fly Young CCE</div>
          </div>
        </a>
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

            {/* Dropdown menu for Programs */}
            <div className='home-dropdown'>
              <div onClick={handleDropdown}
                   className={isProgramPage ? "active" : ""}>
                {t("programs")} 
              </div>
              {dropdownOpen && i18n.language && (
                <div className="home-dropdown-content">
                  <NavLink to="/focus-group" onClick={closeDropdown}>
                    {t("focus_group")}
                  </NavLink>
                  <NavLink to="/beautiful-land-initiative" onClick={closeDropdown}>
                    {t("proj")}
                  </NavLink>
                  <NavLink to="/interview" onClick={closeDropdown}>
                    {t("interview")}
                  </NavLink>
                  <NavLink to="/intern" onClick={closeDropdown}>
                    {t("intern")}
                  </NavLink>
                  <NavLink to="/cce-class" onClick={closeDropdown}>
                    {t("class")}
                  </NavLink>
                  <NavLink to="/webinar" onClick={closeDropdown}>
                    {t("webinar")}
                  </NavLink>
                  <NavLink to="/chronicle" onClick={closeDropdown}>
                    {t("chronicles")}
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/digital-service" onClick={() => setMenuOpen(false)}>
              {t("digital_sol")}
            </NavLink>
            
            <div className="lang-dropdown">
              <div className="language-icon" onClick={handleLangMenu}>
                <LangIcon /><span className="lang-arrow">▼</span>
              </div>
              {langMenuOpen && (
                <div className="lang-dropdown-menu">
                  <label onClick={() => toggleLanguage('en')}
                    className={i18n.language === 'en' ? 'active-lang' : ''}
                    >English
                  </label>
                  <label onClick={() => toggleLanguage('zh')}
                    className={i18n.language === 'zh' ? 'active-lang' : ''}
                    >繁體中文
                  </label>
                  <label onClick={() => toggleLanguage('zh-CN')}
                    className={i18n.language === 'zh-CN' ? 'active-lang' : ''}
                    >简体中文
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
