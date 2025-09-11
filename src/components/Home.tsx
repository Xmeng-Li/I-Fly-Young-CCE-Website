import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import "../styles/home.css";
import cloud from "../components/officeHours/CCELogo.png";
import bannerBk from "../components/bannerBk.png";
import mobileBannerBk from "../components/mobile-home-banner.png";
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

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_1803_7429" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.916016" width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1803_7429)">
        <path d="M10 12.0833L5.91671 16.1667C5.76393 16.3194 5.56949 16.3958 5.33337 16.3958C5.09726 16.3958 4.90282 16.3194 4.75004 16.1667C4.59726 16.0139 4.52087 15.8194 4.52087 15.5833C4.52087 15.3472 4.59726 15.1528 4.75004 15L8.83337 10.9167L4.75004 6.83333C4.59726 6.68056 4.52087 6.48611 4.52087 6.25C4.52087 6.01389 4.59726 5.81944 4.75004 5.66667C4.90282 5.51389 5.09726 5.4375 5.33337 5.4375C5.56949 5.4375 5.76393 5.51389 5.91671 5.66667L10 9.75L14.0834 5.66667C14.2362 5.51389 14.4306 5.4375 14.6667 5.4375C14.9028 5.4375 15.0973 5.51389 15.25 5.66667C15.4028 5.81944 15.4792 6.01389 15.4792 6.25C15.4792 6.48611 15.4028 6.68056 15.25 6.83333L11.1667 10.9167L15.25 15C15.4028 15.1528 15.4792 15.3472 15.4792 15.5833C15.4792 15.8194 15.4028 16.0139 15.25 16.1667C15.0973 16.3194 14.9028 16.3958 14.6667 16.3958C14.4306 16.3958 14.2362 16.3194 14.0834 16.1667L10 12.0833Z" fill="#525252"/>
      </g>
    </svg>
  );

  // handle email subscription
  const[email,setEmail] =  useState("");
  const handleSubscribe = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email.\n请输入有效邮箱');
      return;
    }
    try {
      await axios.post('/api/subscribe', { email });
      alert('Thank you! Your email has been submitted.\n谢谢！您的邮箱已提交');
      setEmail('');
    } catch (error) {
      alert('There was an error. Please try again later.\n出现错误，请稍后重试。');
    }
  };

  return (
    <div>
      <Header />
        <div className="home-top-part">
          <img className="home-cloud" src={cloud} alt="Logo"/>
          <div className="home-banner">
            <img className="banner-bk" src={bannerBk} alt="banner"/>
            <img className="mobile-banner-bk" src={mobileBannerBk} alt="banner"/>
            <label className="home-sub">{t("homeBannerSub")}</label>
            <div className="banner-content">
              <label className="home-title-ify">{t("homeBannerTop")}</label>
              <label className="home-title">{t("homeBanner")}</label>
              <label className="home-text">{t("homeTopText")}</label>
            </div>
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
                    <Link to={category.link} onClick={() => window.scrollTo(0, 0)}>
                      {t("homeLearnMore")}
                    </Link>
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

          <div className="home-joinUS">
            <label className="home-section-label">{t("homeJoin")}</label>
            <img className="home-bk" src={mainBk} alt="top background" />
            <div className="home-join-two">
              <div className="home-two-info">
                <div className="home-two-titles">{t("joinTitle1")}</div>
                <div className="home-two-text">{t("joinDes1")}</div>
                <div className="home-email-containter">
                  <input 
                    className="home-email-input" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="home-submit-btn"
                      onClick={handleSubscribe}>
                      {t("submitBtn")}
                  </button> 

                  {/* <button className="home-join-btn">
                    <a href="mailto:ccepro+subscribe@iflyyoung.com" target="_blank" rel="noopener noreferrer">
                      {t("joinBtn1")}
                    </a>
                  </button> */}
                </div>
              </div>
              <div className="home-two-info">
                <div className="home-two-titles">{t("joinTitle2")}</div>
                <div className="home-two-text">{t("joinDes2")}</div>
                <button className="home-join-btn">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMgl3WrOUriWkGdx3ooxiafXGs0digVF_ORyMfnn_BdhBz7Q/viewform" target="_blank" rel="noopener noreferrer">
                    {t("joinBtn2")}
                  </a>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("en")}
                    <div className="info-row">
                      <Link to="/cce-class" onClick={() => window.scrollTo(0, 0)}>
                        {t("class")}
                      </Link>
                      <Link to="/chronicle" onClick={() => window.scrollTo(0, 0)}>
                        {t("chronicle")}
                      </Link>
                    </div>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("en")}
                    <Link to="/chronicle" onClick={() => window.scrollTo(0, 0)}>
                      {t("chronicle")}
                    </Link>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("en")}
                    <div className="info-row">
                      <Link to="/chronicle" onClick={() => window.scrollTo(0, 0)}>
                        {t("chronicle")}
                      </Link>
                      <Link to="/cce-class" onClick={() => window.scrollTo(0, 0)}>
                        {t("class")}
                      </Link>
                    </div>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("zh")}
                    <div className="info-row">
                      <Link to="/office-hours" onClick={() => window.scrollTo(0, 0)}>
                        {t("officeHr")}
                      </Link>
                      <Link to="/beautiful-land-initiative" onClick={() => window.scrollTo(0, 0)}>
                        {t("proj")}
                      </Link>
                      <Link to="/focus-group" onClick={() => window.scrollTo(0, 0)}>
                        {t("group")}
                      </Link>
                    </div>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("en")}
                    <Link to="/interview" onClick={() => window.scrollTo(0, 0)}>
                      {t("interview")}
                    </Link>
                    <Link to="/intern" onClick={() => window.scrollTo(0, 0)}>
                      {t("intern")}
                    </Link>
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
                    <span className="home-close-icon">
                      <XIcon />
                    </span>
                    {t("zh")}
                    <Link to="/recording" onClick={() => window.scrollTo(0, 0)}>
                      {t("recording")}
                    </Link>
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