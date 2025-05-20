import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; 
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/articles.css";
import img1 from "./hold_flower.jpg";
import img2 from "./rainbow.jpg";
import { useLocation } from 'react-router-dom';


type ArticleType = {
  title: string;
  date: string;
  duration: string;
  image: string;
  responder: string;
  role: string;
  bio: string;
  content: Array<{ question: string; answer: string }>;
};

const YouCanDoThis = () => {
  const { t } = useTranslation("articles");
  const articleTexts: ArticleType[] = t("article7", { ns: "articles", returnObjects: true });

  const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <mask id="mask0_440_2232" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_440_2232)">
      <path d="M9.00016 9.99996L12.2502 13.25C12.4029 13.4027 12.4793 13.5972 12.4793 13.8333C12.4793 14.0694 12.4029 14.2638 12.2502 14.4166C12.0974 14.5694 11.9029 14.6458 11.6668 14.6458C11.4307 14.6458 11.2363 14.5694 11.0835 14.4166L7.25016 10.5833C7.16683 10.5 7.1078 10.4097 7.07308 10.3125C7.03836 10.2152 7.021 10.1111 7.021 9.99996C7.021 9.88885 7.03836 9.78468 7.07308 9.68746C7.1078 9.59024 7.16683 9.49996 7.25016 9.41663L11.0835 5.58329C11.2363 5.43051 11.4307 5.35413 11.6668 5.35413C11.9029 5.35413 12.0974 5.43051 12.2502 5.58329C12.4029 5.73607 12.4793 5.93051 12.4793 6.16663C12.4793 6.40274 12.4029 6.59718 12.2502 6.74996L9.00016 9.99996Z" fill="#525252"/>
    </g>
  </svg>
  );

  useEffect(() => {
    document.body.style.backgroundColor = "#F0F8FF";
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);

  const location = useLocation();
  const fromPage = location.state?.fromPage || 1; 
 
  return (
    <div>
      <Header />
      <div className="article-backTo">
        <Link to="/chronicle" className="left-arrow">
          <LeftArrow />
        </Link>
        <label className="article-backTo-text">{t("backTo")}</label>
      </div>
      <div className="article-container">
        {articleTexts.map((article7, index) => (
          <div key={index} className="art-card">
            <h4 className="art-title">{article7.title}</h4>
            <div className="authors-box">
              <span className="date-and-duration">{article7.date} &#183; {article7.duration}</span>
              <span className="authors">{t("authors")}</span>
            </div>
            <div className="responder-box">
              <div className="resp-left">
                <img className="resp-square-image" src={article7.image} alt={article7.image} />
                <div className="resp-name">{article7.responder}</div>
                <div className="resp-role">{article7.role}</div>
              </div>
              <div className="resp-right">
                <span className="resp-label">{t("guest")}</span>
                <div className="resp-bio">
                  {article7.bio}
                </div>
              </div>
            </div>
            <div className="art-detail">
              {article7.content.map((item, index) => (
                <div key={index}>
                  <div className="qa-pair">
                    <h5 className="resp-question">{item.question}</h5>
                    <p className="resp-answer" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                  </div>
                  {index === 2 && (
                    <img className="article-inner-img" src={img1} alt="mainImg" />
                  )}
                  {index === 5 && (
                    <img className="article-inner-img" src={img2} alt="mainImg" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="backTo-btn-box">
          <button className="art-btm-btn">
            <Link to="/chronicle" state={{ page: fromPage }} onClick={() => window.scrollTo(0, 0)}>
              {t("backToAll")}
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default YouCanDoThis;