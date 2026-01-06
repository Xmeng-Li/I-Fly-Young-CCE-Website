import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/cmmcCase.css";

import topImg from "./cmmc_mockup.png";
import logo from "./cmmcicu_logo.png";
import oldSite1 from "./Old1.png";
import newSite1 from "./New1.png";
import oldSite2 from "./Old2.png";
import newSite2 from "./New2.png";
import oldSite3 from "./Old3.png";
import newSite3 from "./New3.png";
import oldSite4 from "./Old4.png";
import newSite4 from "./New4.png";
import oldSite5 from "./Old5.png";
import newSite5 from "./New5.png";
import oldSite6 from "./Old6.png";
import newSite6 from "./New6.jpg";
import oldSite7 from "./Old7.png";
import newSite7 from "./New7.png";



type Content = {
  works: string;
  workSub: string;
  leftText: string;
  midText: string;
  rightText: string;
 
  oldSite: string;
  newSite: string;
  issue: string;
  impr: string;

  secTitle1: string;
  issue1: string[];
  impr1: string[];

  secTitle2: string;
  issue2: string[];
  impr2: string[];

  secTitle3: string;
  issue3: string[];
  impr3: string[];

  secTitle4: string;
  issue4: string[];
  impr4: string[];

  secTitle5: string;
  issue5: string[];
  impr5: string[];

  secTitle6: string;
  issue6: string[];
  impr6: string[];

  secTitle7: string;
  issue7: string[];
  impr7: string[];
  
  btmTitle: string;
  btmTexts: string;
  caseBtmBtn: string;
}

const CmmcCase = () => {
  const { t } = useTranslation("cmmc");
  const caseContent: Content[] = t("contents", { ns: "cmmc", returnObjects: true });

  const StarIcon = () => (
    <svg width="54" height="54" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_2310_10110" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_2310_10110)">
      <path d="M26.9998 38.8689L17.6623 44.4939C17.2498 44.7564 16.8185 44.8689 16.3685 44.8314C15.9185 44.7939 15.5248 44.6439 15.1873 44.3814C14.8498 44.1189 14.5873 43.7908 14.3998 43.3971C14.2123 43.0033 14.1748 42.5627 14.2873 42.0752L16.7623 31.4439L8.49354 24.3002C8.11854 23.9627 7.88416 23.5783 7.79041 23.1471C7.69666 22.7158 7.72479 22.2939 7.87479 21.8814C8.02479 21.4689 8.24979 21.1314 8.54979 20.8689C8.84979 20.6064 9.26229 20.4377 9.78729 20.3627L20.6998 19.4064L24.9185 9.39395C25.106 8.94395 25.3967 8.60645 25.7904 8.38145C26.1842 8.15645 26.5873 8.04395 26.9998 8.04395C27.4123 8.04395 27.8154 8.15645 28.2092 8.38145C28.6029 8.60645 28.8935 8.94395 29.081 9.39395L33.2998 19.4064L44.2123 20.3627C44.7373 20.4377 45.1498 20.6064 45.4498 20.8689C45.7498 21.1314 45.9748 21.4689 46.1248 21.8814C46.2748 22.2939 46.3029 22.7158 46.2092 23.1471C46.1154 23.5783 45.881 23.9627 45.506 24.3002L37.2373 31.4439L39.7123 42.0752C39.8248 42.5627 39.7873 43.0033 39.5998 43.3971C39.4123 43.7908 39.1498 44.1189 38.8123 44.3814C38.4748 44.6439 38.081 44.7939 37.631 44.8314C37.181 44.8689 36.7498 44.7564 36.3373 44.4939L26.9998 38.8689Z" fill="#494484"/>
      </g>
      </svg>

  );
  const LabtopIcon = () => (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_2310_10118" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_2310_10118)">
      <path d="M7.875 45C6.9375 45 6.14062 44.6719 5.48438 44.0156C4.82812 43.3594 4.5 42.5625 4.5 41.625C4.5 40.6875 4.82812 39.8906 5.48438 39.2344C6.14062 38.5781 6.9375 38.25 7.875 38.25H9V13.5C9 12.2625 9.44063 11.2031 10.3219 10.3219C11.2031 9.44063 12.2625 9 13.5 9H45C45.6375 9 46.1719 9.21562 46.6031 9.64687C47.0344 10.0781 47.25 10.6125 47.25 11.25C47.25 11.8875 47.0344 12.4219 46.6031 12.8531C46.1719 13.2844 45.6375 13.5 45 13.5H13.5V38.25H23.625C24.5625 38.25 25.3594 38.5781 26.0156 39.2344C26.6719 39.8906 27 40.6875 27 41.625C27 42.5625 26.6719 43.3594 26.0156 44.0156C25.3594 44.6719 24.5625 45 23.625 45H7.875ZM33.75 45C33.1125 45 32.5781 44.7844 32.1469 44.3531C31.7156 43.9219 31.5 43.3875 31.5 42.75V20.25C31.5 19.6125 31.7156 19.0781 32.1469 18.6469C32.5781 18.2156 33.1125 18 33.75 18H47.25C47.8875 18 48.4219 18.2156 48.8531 18.6469C49.2844 19.0781 49.5 19.6125 49.5 20.25V42.75C49.5 43.3875 49.2844 43.9219 48.8531 44.3531C48.4219 44.7844 47.8875 45 47.25 45H33.75Z" fill="#494484"/>
      </g>
      </svg>

  );
  const ThumbsIcon = () => (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_2310_10114" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
      <rect width="54" height="54" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_2310_10114)">
      <path d="M47.25 18.0005C48.45 18.0005 49.5 18.4505 50.4 19.3505C51.3 20.2505 51.75 21.3005 51.75 22.5005V27.0005C51.75 27.263 51.7219 27.5442 51.6656 27.8442C51.6094 28.1442 51.525 28.4255 51.4125 28.688L44.6625 44.5505C44.325 45.3005 43.7625 45.938 42.975 46.463C42.1875 46.988 41.3625 47.2505 40.5 47.2505H22.5C21.2625 47.2505 20.2031 46.8098 19.3219 45.9286C18.4406 45.0473 18 43.988 18 42.7505V19.8567C18 19.2567 18.1219 18.6848 18.3656 18.1411C18.6094 17.5973 18.9375 17.1192 19.35 16.7067L31.5563 4.55672C32.1188 4.03172 32.7844 3.71297 33.5531 3.60047C34.3219 3.48797 35.0625 3.61922 35.775 3.99422C36.4875 4.36922 37.0031 4.89422 37.3219 5.56922C37.6406 6.24422 37.7062 6.93797 37.5187 7.65047L34.9875 18.0005H47.25ZM9 47.2505C7.7625 47.2505 6.70312 46.8098 5.82188 45.9286C4.94063 45.0473 4.5 43.988 4.5 42.7505V22.5005C4.5 21.263 4.94063 20.2036 5.82188 19.3223C6.70312 18.4411 7.7625 18.0005 9 18.0005C10.2375 18.0005 11.2969 18.4411 12.1781 19.3223C13.0594 20.2036 13.5 21.263 13.5 22.5005V42.7505C13.5 43.988 13.0594 45.0473 12.1781 45.9286C11.2969 46.8098 10.2375 47.2505 9 47.2505Z" fill="#494484"/>
      </g>
      </svg>
  );
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
  const Circle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="373" height="98" viewBox="0 0 373 98" fill="none">
    <path d="M85.6717 91.8441C76.2903 90.8423 66.9567 89.6966 57.9213 88.1093C48.8858 86.524 40.1524 84.5068 32.3174 81.8205C24.4785 79.1342 17.5299 75.8371 12.2748 71.97C9.62339 70.0385 7.49272 67.9804 5.87087 65.7941C4.28082 63.6154 3.28703 61.3746 2.88554 59.0695C2.48803 56.7664 2.66294 54.475 3.41424 52.1952C4.16554 49.9155 5.37 47.696 7.02763 45.5349C8.68129 43.3738 10.7245 41.3021 13.1493 39.3219C15.5503 37.3378 18.2892 35.4705 21.362 33.7198C27.6069 30.2107 34.6111 27.1159 42.3864 24.4373C50.1896 21.751 58.3506 19.3526 66.8613 17.246C83.9146 12.9374 101.64 9.44964 120.037 6.77889C129.219 5.45227 138.521 4.33573 147.946 3.42927C157.367 2.52281 166.852 1.85367 176.404 1.41988C195.56 0.528992 214.712 0.542603 233.865 1.46268C236.25 1.57161 238.631 1.72139 241.012 1.85172C243.397 1.9801 245.762 2.16489 248.135 2.32051C250.512 2.47613 252.87 2.69788 255.235 2.88461C257.6 3.06941 259.945 3.31645 262.299 3.53236C271.7 4.45049 280.994 5.58843 290.176 6.94228C291.333 7.0979 292.446 7.29826 293.583 7.47527L295.28 7.7476C295.845 7.83902 296.413 7.93044 296.966 8.03743C299.196 8.44786 301.446 8.83884 303.62 9.30959L305.27 9.6461L306.093 9.81728L306.904 9.99818L310.139 10.7296L310.95 10.9144L311.741 11.1147L313.328 11.5174C314.381 11.7878 315.454 12.0348 316.48 12.3324L319.58 13.1922C320.081 13.3342 320.606 13.4879 321.111 13.6435L322.602 14.1045C324.645 14.6997 326.585 15.3747 328.548 16.0263C329.542 16.3551 330.46 16.713 331.414 17.0553L332.841 17.5747C333.342 17.7478 333.768 17.9385 334.233 18.1174L336.995 19.2164L339.655 20.3719L340.971 20.9516L342.243 21.5585C343.081 21.9669 343.948 22.3618 344.771 22.7761C346.369 23.6281 348.03 24.4548 349.513 25.3555C351.079 26.2191 352.463 27.1587 353.894 28.0729C354.585 28.5417 355.225 29.026 355.885 29.5007L356.883 30.2165L357.789 30.9479C360.258 32.9125 362.353 34.9706 364.07 37.118C364.48 37.6549 364.905 38.1898 365.298 38.7306L366.332 40.3743C366.71 40.9189 366.924 41.4831 367.206 42.0413C367.489 42.5996 367.779 43.152 367.934 43.72L368.51 45.424C368.645 45.9959 368.741 46.5658 368.86 47.1299C368.904 47.4159 368.983 47.6999 369.007 47.9858L369.059 48.8456L369.103 49.7034C369.103 49.9894 369.158 50.2753 369.103 50.5593L368.952 52.2769L368.92 52.7068C368.92 52.8488 368.852 52.9908 368.824 53.1348L368.63 53.9867L368.431 54.8426L368.331 55.2686L368.172 55.6927L367.544 57.383C367.489 57.525 367.445 57.6651 367.381 57.8071L367.167 58.2234L366.733 59.0559L366.304 59.8923L366.089 60.3086L365.823 60.721C365.076 61.8084 364.444 62.9132 363.514 63.9753L362.21 65.5801L360.715 67.144C359.753 68.1847 358.668 69.1904 357.448 70.1649C352.574 74.03 345.741 77.261 338.037 79.8675C330.329 82.4741 321.723 84.4951 312.882 86.1602C303.962 87.8039 294.855 89.1402 285.557 90.1693C276.279 91.2352 266.866 92.0366 257.401 92.7408C252.667 93.0831 247.917 93.3905 243.158 93.6648C238.404 93.9488 233.642 94.2055 228.868 94.4467L214.549 95.1392L207.378 95.4466L200.207 95.6897C190.647 96.0146 181.067 96.1779 171.467 96.1779C161.875 96.1779 152.275 96.0496 142.699 95.7247C133.119 95.3999 123.563 94.9136 114.05 94.2775C104.538 93.6414 95.0768 92.8108 85.6717 91.8441ZM85.5882 92.0366C94.9854 93.0345 104.458 93.869 113.967 94.5693C123.471 95.2715 133.031 95.8298 142.611 96.2635C161.831 97.1039 181.079 97.347 200.358 96.993L207.581 96.8335L214.8 96.6117C219.598 96.4483 224.396 96.2713 229.19 96.0807C233.988 95.8881 238.778 95.678 243.568 95.4466C248.358 95.1976 253.148 94.9175 257.934 94.6062C267.502 93.9838 277.039 93.1824 286.483 92.1358C295.98 91.1146 305.286 89.7783 314.405 88.1249C323.5 86.4306 332.364 84.3337 340.466 81.5987C342.457 80.9062 344.445 80.1826 346.357 79.4065C348.269 78.6284 350.086 77.8173 351.835 76.9711C355.353 75.238 358.413 73.3317 361.017 71.2484C362.297 70.2077 363.438 69.132 364.444 68.0232L365.982 66.3893L367.322 64.7106C368.272 63.6018 368.928 62.4405 369.687 61.3007L369.957 60.8688L370.184 60.4312L371.058 58.6766L371.277 58.2389C371.345 58.0911 371.388 57.9413 371.444 57.7954L372.239 55.5682L372.338 55.1208L372.533 54.2182L372.728 53.3195C372.756 53.1698 372.796 53.02 372.815 52.8683L372.851 52.4189L372.982 50.6079C373.022 50.3084 372.982 50.0069 372.982 49.7054L372.923 48.8009L372.855 47.8983C372.827 47.5948 372.74 47.2953 372.68 46.9957C372.553 46.3966 372.442 45.7955 372.291 45.1964L371.663 43.4146C371.488 42.8155 371.166 42.2358 370.872 41.6484C370.577 41.0629 370.327 40.4735 369.925 39.9036L368.82 38.1782C368.395 37.6121 367.938 37.0558 367.501 36.4917C365.68 34.2528 363.462 32.115 360.838 30.0764L359.88 29.3081L358.835 28.5787C358.131 28.0904 357.455 27.5866 356.728 27.1042C355.233 26.1608 353.767 25.1999 352.129 24.3109C350.571 23.3869 348.853 22.5388 347.148 21.6713C346.289 21.2492 345.387 20.8465 344.508 20.4341L343.181 19.8175L341.793 19.2028L339.027 18.0357L336.157 16.927C335.66 16.7441 335.211 16.5515 334.714 16.3784L333.223 15.8571C332.225 15.5147 331.259 15.1529 330.234 14.8223C328.198 14.1745 326.191 13.5015 324.08 12.9101L322.518 12.453C321.997 12.3013 321.477 12.1476 320.94 12.0095L317.764 11.1634C316.71 10.8716 315.597 10.6284 314.512 10.36L312.882 9.96706L312.063 9.77059L311.233 9.58969L307.909 8.8583L307.079 8.68129L306.232 8.51595L304.542 8.18721C302.304 7.73203 300.007 7.35078 297.721 6.9559C297.157 6.85475 296.576 6.76138 295.996 6.6758L294.259 6.41514C293.102 6.24591 291.949 6.05333 290.773 5.90356C281.499 4.60416 272.109 3.53431 262.613 2.69204C260.24 2.49363 257.87 2.27383 255.489 2.09682C253.108 1.9198 250.727 1.73695 248.338 1.58328C245.945 1.42961 243.564 1.26816 241.167 1.14367C238.774 1.02113 236.381 0.883011 233.98 0.785751C214.744 -0.0565109 195.509 -0.0623474 176.273 0.774086C166.685 1.18452 157.137 1.80309 147.636 2.6298C138.135 3.4565 128.73 4.48746 119.421 5.72459C110.127 6.97147 100.952 8.4323 91.8967 10.1091C82.8414 11.7839 73.9927 13.6785 65.3548 15.791C56.7486 17.9112 48.2418 20.2455 40.3194 23.0135C36.3363 24.3945 32.5202 25.8768 28.871 27.4641C25.2258 29.0591 21.831 30.7709 18.6867 32.5994C15.5106 34.4356 12.6882 36.3944 10.2236 38.4758C7.76303 40.561 5.70391 42.7377 4.05026 45.0058C0.758847 49.5206 -0.743752 54.3991 0.35736 59.1882C0.897978 61.5886 2.07064 63.915 3.87138 66.1636C5.67211 68.3987 7.99757 70.4936 10.8398 72.4524C13.6621 74.3937 16.8502 76.1794 20.4 77.8114C23.9219 79.4415 27.7063 80.914 31.749 82.227C35.7837 83.5303 39.9855 84.6896 44.3541 85.7031C48.7149 86.7107 53.1789 87.5958 57.7424 88.3602C66.8693 89.8697 76.1512 91.0952 85.5882 92.0366Z" fill="#494484"/>
  </svg>
  );

  const section = caseContent[1];

  useEffect(() => {
    document.body.style.backgroundColor = "#EFEEF8";
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImg(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  

  // Handle Image
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);


  return (
    <div>
      <Header />
      <div className="cmmcCase-backTo">
        <Link to="/digital-service" className="left-arrow">
          <LeftArrow />
        </Link>
        <label className="cmmcCase-backTo-text">{t("backToSol")}</label>
      </div>
      <div className="cmmcCase-banner">
        <div className="cmmcCase-left-content">
          <span className="cmmcCase-sub">{t("caseSub")}</span>
          <span className="cmmcCase-title">{t("caseTitle")}</span>
          <img className="cmmc-logo" src={logo} alt="logo" />
        </div>
        <img className="cmmc-mockUp" src={topImg} alt="mockup" />
      </div>

      {/* Our Work */}
      <div className="cmmc-top-three">
        <label className="cmmc-work-label">{caseContent[0].works}</label>
        <label className="cmmc-work-sub">{caseContent[0].workSub}</label>
        <div className="cmmc-work-three">
          <div className="cmmc-work-part">
            <span className="cmmc-top-three-icons"><StarIcon /></span>
            <div
              className="cmmc-work-text"
              dangerouslySetInnerHTML={{ __html: caseContent[0].leftText }}
            />
          </div>
          <div className="cmmc-work-part">
            <span className="cmmc-top-three-icons"><ThumbsIcon /></span>
            <div className="cmmc-work-text">{caseContent[0].midText}</div>
          </div>
          <div className="cmmc-work-part">
            <span className="cmmc-top-three-icons"><LabtopIcon /></span>
            <div
              className="cmmc-work-text"
              dangerouslySetInnerHTML={{ __html: caseContent[0].rightText }}
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="cmmc-section-wrap">
        {/* 1.Visual Hierarchy & Layout */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle1}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite1}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite1)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue1?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite1}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite1)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr1?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2.Typography */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle2}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite2}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite2)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue2?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite2}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite2)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr2?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3.Color & Branding */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle3}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite3}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite3)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue3?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite3}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite3)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr3?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Navigation  */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle4}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite4}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite4)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue4?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite4}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite4)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr4?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Content Flow  */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle5}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite5}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite5)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue5?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite5}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite5)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr5?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6. CTA  */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle6}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite6}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite6)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue6?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite6}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite6)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr6?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Trust Signals */}
        <div className="sec-detail">
          <label className="cmmc-section-label">
            {caseContent[1].secTitle7}
          </label>
          <div className="cmmc-comp-wrap">
            {/* Old Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].oldSite}</span>
              <img
                className="cmmc-site-img"
                src={oldSite7}
                alt="Old site preview"
                onClick={() => setPreviewImg(oldSite7)}
              />

              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].issue}</span>
                <ul className="cmmc-lst">
                  {section?.issue7?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* New Site */}
            <div className="cmmc-comp">
              <span className="cmmc-comp-label">{caseContent[1].newSite}</span>
              <img
                className="cmmc-site-img"
                src={newSite7}
                alt="New site preview"
                onClick={() => setPreviewImg(newSite7)}
              />
              <div className="cmmc-texts">
                <span className="cmmc-comp-tile">{caseContent[1].impr}</span>
                <ul className="cmmc-lst">
                  {section?.impr7?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Part */}
      <div className="cmmc-btm">
        <div className="cmmc-btm-header">
          <label className="cmmc-btm-title">
            {t("svcBtmTitle")}
          </label>
          <span className="cmmc-btm-circle"><Circle /></span>
        </div>
        <div className="cmmc-btm-texts">{t("svcBtmTexts")}</div>
        <button className="cmmc-btm-btn">
          <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAApSLa8JUOUlLTU9JS1U0TzBFNVAwQlFNTlpSVThGQS4u" target="_blank" rel="noopener noreferrer">
          {t("caseBtmBtn")}
          </a>
        </button>
      </div>

      {previewImg && (
        <div className="cmmc-lightbox" onClick={() => setPreviewImg(null)}>
          <img
            className={`cmmc-lightbox-img ${zoomed ? "zoomed" : ""}`}
            src={previewImg}
            alt="Full preview"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(!zoomed);
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  ); 
}

export default CmmcCase;