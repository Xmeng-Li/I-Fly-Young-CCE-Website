import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/home.css";
import cloud from "../components/officeHours/CCELogo.png";
import bannerBk from "../components/bannerBk.png";
import mainBk from "../components/homeBk.png";


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

        <div className="home-main">
          {/* Main Category */}
          <div className="home-container">
            {home.map((category, index) => (
              <div key={index} className="cat-card">
                <img src={category.image} alt={category.image} className="cat-image" />
                <div className="cat-info">
                  <h4 className="cat-title">{category.title}</h4>
                  <p className="cat-text">{category.description}</p>
                  <button className="home-learn-btn">
                    <Link to={category.link}>
                      {t("homeLearnMore")}
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="aboutUS">
            <label className="home-section-label">{t("homeAbout")}</label>
            <img className="home-bk" src={mainBk} alt="top background" />
            <div className="home-three">
              <div className="home-three-info">
                <div className="home-three-titles">{t("homeWho")}</div>
                <div className="home-three-text">{t("homeWhoDes")}</div>
              </div>
              <div className="home-three-info">
                <div className="home-three-titles">{t("homeWhat")}</div>
                <div className="home-three-text">{t("homeWhatDes")}</div>
              </div>
              <div className="home-three-info">
                <div className="home-three-titles">{t("homeHow")}</div>
                <div className="home-three-text">{t("homeHowDes")}</div>
              </div>
            </div>
          </div>

          <div className="home-joinUS">
            <label className="home-section-label">{t("homeJoin")}</label>
            <div className="home-join-two">
              <div className="home-two-info">
                <div className="home-two-titles">{t("joinTitle1")}</div>
                <div className="home-two-text">{t("joinDes1")}</div>
                <button className="home-join-btn">
                    {t("joinBtn1")}
                </button>
              </div>
              <div className="home-two-info">
                <div className="home-two-titles">{t("joinTitle2")}</div>
                <div className="home-two-text">{t("joinDes2")}</div>
                <button className="home-join-btn">
                    {t("joinBtn2")}
                </button>
              </div>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  ); 
}

export default Home;