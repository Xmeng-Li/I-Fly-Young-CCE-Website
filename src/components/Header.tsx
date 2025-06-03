import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {useLocation, NavLink } from "react-router-dom";
import logo from '../components/officeHours/CCELogo.png';
import "../styles/header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const [isChinese, setIsChinese] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = isChinese ? 'en' : 'zh';
    i18n.changeLanguage(newLang); 
    setIsChinese(!isChinese); 
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const location = useLocation();
  const programPaths = [
    "/focus-group",
    "/project",
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
                  <NavLink to="/project" onClick={closeDropdown}>
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
            <button className="language-btn" onClick={toggleLanguage}> {isChinese ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
