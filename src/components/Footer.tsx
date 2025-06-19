import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/footer.css";
import logo from '../components/officeHours/CCELogo.png';

const Footer = () => {

  const { t } = useTranslation("footer");
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
      <mask id="mask0_904_1691" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
        <rect x="0.5" width="20" height="20" fill="#FFF"/>
      </mask>
      <g mask="url(#mask0_904_1691)">
        <path d="M3.83333 16.6667C3.375 16.6667 2.98264 16.5035 2.65625 16.1771C2.32986 15.8507 2.16667 15.4584 2.16667 15V5.00004C2.16667 4.54171 2.32986 4.14935 2.65625 3.82296C2.98264 3.49657 3.375 3.33337 3.83333 3.33337H17.1667C17.625 3.33337 18.0174 3.49657 18.3438 3.82296C18.6701 4.14935 18.8333 4.54171 18.8333 5.00004V15C18.8333 15.4584 18.6701 15.8507 18.3438 16.1771C18.0174 16.5035 17.625 16.6667 17.1667 16.6667H3.83333ZM10.5 10.6875C10.5694 10.6875 10.6424 10.6771 10.7188 10.6563C10.7951 10.6355 10.8681 10.6042 10.9375 10.5625L16.8333 6.87504C16.9444 6.8056 17.0278 6.71879 17.0833 6.61462C17.1389 6.51046 17.1667 6.39587 17.1667 6.27087C17.1667 5.9931 17.0486 5.78476 16.8125 5.64587C16.5764 5.50699 16.3333 5.51393 16.0833 5.66671L10.5 9.16671L4.91667 5.66671C4.66667 5.51393 4.42361 5.51046 4.1875 5.65629C3.95139 5.80212 3.83333 6.00699 3.83333 6.27087C3.83333 6.40976 3.86111 6.53129 3.91667 6.63546C3.97222 6.73962 4.05556 6.81948 4.16667 6.87504L10.0625 10.5625C10.1319 10.6042 10.2049 10.6355 10.2813 10.6563C10.3576 10.6771 10.4306 10.6875 10.5 10.6875Z" fill="white"/>
      </g>
    </svg>
  );
  const MetaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M19.5 3H5.5C4.395 3 3.5 3.895 3.5 5V19C3.5 20.105 4.395 21 5.5 21H13.121V14.039H10.778V11.314H13.121V9.309C13.121 6.985 14.542 5.718 16.616 5.718C17.315 5.716 18.013 5.752 18.708 5.823V8.253H17.28C16.15 8.253 15.93 8.787 15.93 9.575V11.31H18.63L18.279 14.035H15.914V21H19.5C20.605 21 21.5 20.105 21.5 19V5C21.5 3.895 20.605 3 19.5 3Z" fill="white"/>
    </svg>
  );
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1964 0H1.85675C1.12297 0 0.5 0.580219 0.5 1.29519V16.7041C0.5 17.4198 0.908832 18 1.6423 18H16.9819C17.7166 18 18.5 17.4198 18.5 16.7041V1.29519C18.5 0.580219 17.9308 0 17.1964 0ZM7.35698 6.85698H9.78023V8.09223H9.80677C10.1761 7.4262 11.2672 6.75007 12.6165 6.75007C15.2059 6.75007 15.9287 8.12496 15.9287 10.6713V15.4287H13.3571V11.1404C13.3571 10.0004 12.9019 9 11.8374 9C10.5448 9 9.92859 9.875 9.92859 11.3118V15.4287H7.35698V6.85698ZM3.07129 15.4287H5.6429V6.85698H3.07129V15.4287ZM5.96427 3.8571C5.96427 4.74507 5.24507 5.46427 4.3571 5.46427C3.46912 5.46427 2.74993 4.74507 2.74993 3.8571C2.74993 2.96912 3.46912 2.24993 4.3571 2.24993C5.24507 2.24993 5.96427 2.96912 5.96427 3.8571Z" fill="white"/>
    </svg>
  );
  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M22.082 6.186C21.852 5.326 21.174 4.648 20.314 4.418C18.754 4 12.5 4 12.5 4C12.5 4 6.246 4 4.686 4.418C3.826 4.648 3.148 5.326 2.918 6.186C2.5 7.746 2.5 12 2.5 12C2.5 12 2.5 16.254 2.918 17.814C3.148 18.674 3.826 19.352 4.686 19.582C6.246 20 12.5 20 12.5 20C12.5 20 18.754 20 20.314 19.582C21.175 19.352 21.852 18.674 22.082 17.814C22.5 16.254 22.5 12 22.5 12C22.5 12 22.5 7.746 22.082 6.186ZM10.5 15.464V8.536L16.5 12L10.5 15.464Z" fill="white"/>
    </svg>
  );
  const EarthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path d="M10.5 19.2487C9.34721 19.2487 8.26388 19.0299 7.24999 18.5924C6.2361 18.1549 5.35416 17.5612 4.60416 16.8112C3.85416 16.0612 3.26041 15.1793 2.82291 14.1654C2.38541 13.1515 2.16666 12.0681 2.16666 10.9154C2.16666 9.76259 2.38541 8.67925 2.82291 7.66536C3.26041 6.65148 3.85416 5.76953 4.60416 5.01953C5.35416 4.26953 6.2361 3.67578 7.24999 3.23828C8.26388 2.80078 9.34721 2.58203 10.5 2.58203C11.6528 2.58203 12.7361 2.80078 13.75 3.23828C14.7639 3.67578 15.6458 4.26953 16.3958 5.01953C17.1458 5.76953 17.7396 6.65148 18.1771 7.66536C18.6146 8.67925 18.8333 9.76259 18.8333 10.9154C18.8333 12.0681 18.6146 13.1515 18.1771 14.1654C17.7396 15.1793 17.1458 16.0612 16.3958 16.8112C15.6458 17.5612 14.7639 18.1549 13.75 18.5924C12.7361 19.0299 11.6528 19.2487 10.5 19.2487ZM10.5 17.582C12.3611 17.582 13.9375 16.9362 15.2292 15.6445C16.5208 14.3529 17.1667 12.7765 17.1667 10.9154C17.1667 10.8181 17.1632 10.7174 17.1562 10.6133C17.1493 10.5091 17.1458 10.4223 17.1458 10.3529C17.0764 10.7556 16.8889 11.089 16.5833 11.3529C16.2778 11.6168 15.9167 11.7487 15.5 11.7487H13.8333C13.375 11.7487 12.9826 11.5855 12.6562 11.2591C12.3299 10.9327 12.1667 10.5404 12.1667 10.082V9.2487H8.83332V7.58203C8.83332 7.1237 8.99652 6.73134 9.32291 6.40495C9.6493 6.07856 10.0417 5.91536 10.5 5.91536H11.3333C11.3333 5.59592 11.4201 5.31467 11.5937 5.07161C11.7674 4.82856 11.9792 4.63064 12.2292 4.47786C11.9514 4.40842 11.6701 4.35286 11.3854 4.3112C11.1007 4.26953 10.8055 4.2487 10.5 4.2487C8.63888 4.2487 7.06249 4.89453 5.77082 6.1862C4.47916 7.47787 3.83332 9.05425 3.83332 10.9154H7.99999C8.91666 10.9154 9.70138 11.2418 10.3542 11.8945C11.0069 12.5473 11.3333 13.332 11.3333 14.2487V15.082H8.83332V17.3737C9.1111 17.4431 9.38541 17.4952 9.65624 17.5299C9.92707 17.5647 10.2083 17.582 10.5 17.582Z" fill="white"/>
    </svg>
  )

  return (
    <div className="footer">
      {/* Left Part */}
      <div className='footer-logo-box'>
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-logo-title">I Fly Young CCE</div>
      </div>
      <div className="texts-and-links">
        <div className="footer-texts">
          <div>{t("footerText1")}</div>
          <div>{t("footerText2")}</div>
          <div>© 2020 I FLY YOUNG CCE</div>
        </div>

        {/* Right Part */}
        <div className="footer-links">
          <div className="link-title">{t("contactUs")}</div>
          <div className="contact-info">
            <MailIcon/>
            <span>cce.info@iflyyoung.com</span>
          </div>

          <div className="mid-part">
            <div className="link-title">{t("followUs")}</div>
            <div className="logos">
              <a className="icon"
                href="https://www.facebook.com/IFLYYOUNGCCE"
                rel="noreferrer"
                target="_blank"
              ><MetaIcon /></a>
              <a className="icon"
                href="https://www.linkedin.com/company/i-fly-young-cce/"
                rel="noreferrer"
                target="_blank"
              ><LinkedInIcon /></a>
              <a className="mail-icon"
                href="mailto:ccepro+subscribe@iflyyoung.com"
                rel="noreferrer"
                target="_blank"
              ><MailIcon /></a>
              <a className="icon"
                href="https://www.youtube.com/@cce.jumpstart"
                rel="noreferrer"
                target="_blank"
              ><YoutubeIcon /></a>
            </div>
          </div>
          <div className="flyYoung">
            <div className="link-title">{t("aboutIfly")}</div>
            <div className="iflyyoung">
              <EarthIcon />
              <a href="https://iflyyoung.com/" rel="noreferrer" target="_blank"
              >iflyyoung.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      {/* <div className="feedback-container">
        <label className="fdbk-label">{t("fdbkTitle")}</label>
        <div className="feedback">
          <div className="fdbk-content">
            <label className="input-label">{t("fdbkDes")}</label>
            <textarea className="fdbk-input-box"></textarea>
            <label className="word-cnt">{t("wordCount")}</label>
          </div>
          <div className="email-box">
            <label className="input-label">{t("userEmail")}</label>
            <input className="email-input-box" type="text" />
            <button className="footer-sub-btn">{t("subBtn")}</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;