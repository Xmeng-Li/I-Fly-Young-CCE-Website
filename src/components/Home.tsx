import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/home.css";
import cloud from "../components/officeHours/CCELogo.png";
import bannerBk from "../components/bannerBk.png";
import mainBk from "../components/homeBk.png";
import lineDele from "../components/line.png";

type HomeType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const Home = () => {
  const { t } = useTranslation("home");
  const home: HomeType[] = t("category", { ns: "home", returnObjects: true });

  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? 9 : 6;
  const toggleView = () => setExpanded((prev) => !prev);

  const [selectedRole, setSelectedRole] = useState<string | null>(null);

 
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
            {home.slice(0, visibleCount).map((category, index) => (
              <div key={index} className="cat-card">
                <img className="cat-image" src={category.image} alt={category.image} />
                <div className="cat-info">
                  <h4 className="cat-title">{category.title}</h4>
                  <p className="cat-text">{category.description}</p>
                  <button className="home-learn-btn">
                    <a href={category.link}>
                      {t("homeLearnMore")}
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Section */}
          <div className="viewMore_container">
            <label className="viewMore-sub">
              {expanded ? t("viewMoreSubExpand") : t("viewMoreSub")}
            </label>
            <div className="line-and-btn">
              <button className="home-viewmore-btn" onClick={toggleView}>
                {expanded ? t("homeViewLess") : t("homeViewMore")}
              </button>
              <img className="line-decor" src={lineDele} alt="line"/>
            </div>
          </div>

          {/* About CCE Section */}
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

          {/* How to Start Section */}
          <div className="home-btm-container">
            <label className="home-section-label">{t("homeBtmTitle")}</label>
            <div className="home-btm-row">
              {/* Card 1 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "role1" ? null : "role1"))}>
                {selectedRole === "role1" ? (
                  <div className="extra-info">
                    {t("en")}
                    <a href="/cceClass">{t("class")}</a>
                    {t("en")}
                    <a href="/chronicle">{t("chronicle")}</a>
                  </div>
                ) : (
                  <>
                    <span className="about-me">{t("aboutMe")}</span>
                    <span className="person-role">{t("role1")}</span>
                  </>
                )}
              </div>

              {/* Card 2 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "role2" ? null : "role2"))}>
                {selectedRole === "role2" ? (
                  <div className="extra-info">
                    {t("en")}
                    <a href="/chronicle">{t("chronicle")}</a>
                  </div>
                ) : (
                  <>
                    <span className="about-me">{t("aboutMe")}</span>
                    <span className="person-role">{t("role2")}</span>
                  </>
                )}
              </div>

              {/* Card 3 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "role3" ? null : "role3"))}>
                {selectedRole === "role3" ? (
                  <div className="extra-info">
                    {t("en")}
                    <a href="/chronicle">{t("chronicle")}</a>
                    <a href="/cceClass">{t("class")}</a>
                  </div>
                ) : (
                  <>
                    <span className="about-me">{t("aboutMe")}</span>
                    <span className="person-role">{t("role3")}</span>
                  </>
                )}
              </div>
            </div>

            <div className="home-btm-row">
              {/* Card 4 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "role4" ? null : "role4"))}>
                {selectedRole === "role4" ? (
                  <div className="extra-info">
                    {t("zh")}
                    <a href="/office-hours">{t("officeHr")}</a>
                    {t("zh")}
                    <a href="/focus-group">{t("group")}</a>
                    {t("zh")}
                    <a href="/project">{t("proj")}</a>
                  </div>
                ) : (
                  <>
                    <span className="about-me">{t("aboutMe")}</span>
                    <span className="person-role">{t("role4")}</span>
                    <span className="lang">{t("zh")}</span>
                  </>
                )}
              </div>

              {/* Card 5 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "role5" ? null : "role5"))}>
                {selectedRole === "role5" ? (
                  <div className="extra-info">
                    {t("en")}
                    <a href="/interview">{t("interview")}</a>
                    {t("en")}
                    <a href="/intern">{t("intern")}</a>
                  </div>
                ) : (
                  <>
                    <span className="about-me">{t("aboutMe")}</span>
                    <span className="person-role">{t("role5")}</span>
                    <span className="lang">{t("en")}</span>
                  </>
                )}
              </div>

              {/* Card 6 */}
              <div className="home-each-card"
                onClick={() =>
                  setSelectedRole((prev) => (prev === "otherResource" ? null : "otherResource"))}>
                {selectedRole === "otherResource" ? (
                  <div className="extra-info">
                    {t("zh")}
                    <a href="/recording">{t("recording")}</a>
                  </div>
                ) : (
                  <>
                    <span className="person-role">{t("otherResource")}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  ); 
}

export default Home;