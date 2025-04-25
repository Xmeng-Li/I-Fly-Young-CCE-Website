import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/home.css";
import cloud from "../components/officeHours/CCELogo.png";
import bannerBk from "../components/bannerBk.png";


type HomeType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const Home = () => {
  const { t } = useTranslation("home");
  const home: HomeType[] = t("category", { ns: "home", returnObjects: true });

 
  return (
    <div>
      <Header />
        <div className="home-top-part">
          <img className="home-cloud" src={cloud} alt="Logo"/>
          <div className="home-banner">
            <img className="banner-bk" src={bannerBk} alt="banner"/>
            <label className="home-sub">{t("homeBannerSub")}</label>
            <label className="home-title">{t("homeBanner")}</label>
            <label className="home-text">{t("homeTopText")}</label>
          </div>
        </div>


        {/* Main Category */}
        <div className="home-container">
          {home.map((category, index) => (
            <div key={index} className="webinar-card">
              <img src={category.image} alt={category.image} className="webinar-image" />
              <div className="cat-info">
                <h4 className="cat-title">{category.title}</h4>
                <p className="cat-text">{category.description}</p>
                <button className="home-learn-btn">
                  <Link to={category.link} className="home-learn-btn">
                    {t("homeLearnMore")}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        
      <Footer />
    </div>
  ); 
}

export default Home;