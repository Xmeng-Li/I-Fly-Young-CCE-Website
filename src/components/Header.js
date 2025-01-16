import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


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
      <nav>
        {t("home")} {t("webinar")} {t("office_hours")} {t("our_team")} {t("chronicles")} {t("programs")}
        <button className="language-btn" onClick={toggleLanguage}>
          {isChinese ? 'EN' : '中文'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
