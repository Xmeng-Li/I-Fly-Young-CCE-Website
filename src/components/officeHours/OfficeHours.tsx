import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import "../../styles/officehour.css";
import QAImg from "../officeHours/QA-banner.png";


type Recording = {
  id: string;
  date: string;
  title: string;
  question: string;
  category: string;
  audioUrl: string;
};

type Panelist = {
  name: string;
  role: string;
  image: string;
};

// Mid Part
type Meeting = {
  id: string;
  passcode: string;
};
type TimeDetail = {
  type: string;
  dates: string;
  times: Array<{ region: string; time: string }>;
};

type OfficeHoursProps = WithTranslation & {
  navigate: NavigateFunction;
};

class OfficeHours extends Component<OfficeHoursProps> {
  playRecording = (audioUrl: string): void => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing audio:", audioUrl);
  };

  state = {
    searchQuery: "",
  };

  // Handle Date
  // formatDate = (date: string) => {
  //   const [month, day, year] = date.split("/");
  //   const monthDay = `${month}/${day}`;
  //   return {monthDay, year};
  // };

  // Link round playIcon to its player
  PlayIconRound = ({ recordingId }: { recordingId: string }) => {
    const { navigate } = this.props;
    const handleClick = () => {
      navigate(`/recording?play=${recordingId}`);
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <mask
          id="mask0_86_4121"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_86_4121)">
          <path
            d="M10.65 15.75L15.525 12.625C15.7583 12.475 15.875 12.2667 15.875 12C15.875 11.7333 15.7583 11.525 15.525 11.375L10.65 8.25C10.4 8.08333 10.1458 8.07083 9.8875 8.2125C9.62917 8.35417 9.5 8.575 9.5 8.875V15.125C9.5 15.425 9.62917 15.6458 9.8875 15.7875C10.1458 15.9292 10.4 15.9167 10.65 15.75ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#333333"
          />
        </g>
      </svg>
    );
  };

  // Link play now icon to its player
  OhPlayIcon = ({ recordingId }: { recordingId: string }) => {
    const { navigate } = this.props;
    const handleClick = () => {
      navigate(`/recording?play=${recordingId}`);
    };
    return (
      <svg
        className="play-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <mask
          id="mask0_85_1485"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_85_1485)">
          <path
            d="M6 18.5976V6.19809C6 5.85865 6.1198 5.57411 6.35941 5.34449C6.59901 5.11487 6.87855 5.00006 7.19802 5.00006C7.29786 5.00006 7.40269 5.01504 7.51251 5.04499C7.62233 5.07494 7.72715 5.11986 7.82699 5.17976L17.5909 11.3795C17.7706 11.4993 17.9054 11.6491 17.9952 11.8288C18.0851 12.0085 18.13 12.1982 18.13 12.3979C18.13 12.5975 18.0851 12.7872 17.9952 12.9669C17.9054 13.1466 17.7706 13.2964 17.5909 13.4162L7.82699 19.616C7.72715 19.6759 7.62233 19.7208 7.51251 19.7507C7.40269 19.7807 7.29786 19.7957 7.19802 19.7957C6.87855 19.7957 6.59901 19.6809 6.35941 19.4512C6.1198 19.2216 6 18.9371 6 18.5976Z"
            fill="#333333"
          />
        </g>
      </svg>
    );
  };

  // Handle search bar
  handleSearchChange = (value: string) => {
    this.setState({ searchQuery: value });
  };

  handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.navigate(
        `/recording?search=${encodeURIComponent(this.state.searchQuery)}`
      );
    }
  };


  render() {
    const { t } = this.props;
    const recordings: Recording[] = t("recordings", {ns: "officehour",returnObjects: true,}) as Recording[];
    
    // Main 6 Sections
    const viewAll: string = t("viewAll", { ns: "officehour" });
    const viewMoreText: string = t("viewMore", { ns: "officehour" });
    const mostRecent = recordings.slice(0, 3);
    const workAndColleagues = recordings.filter((r) => r.category === "Colleague").slice(0, 3);
    const faithAndWork = recordings.filter((r) => r.category === "Faith").slice(0, 3);
    const workAndBoss = recordings.filter((r) => r.category === "Boss").slice(0, 3);
    const selfDev = recordings.filter((r) => r.category === "Development").slice(0, 3);
    const focusGrp = recordings.filter((r) => r.category === "Focus").slice(0, 3);

    // Bottom Section 
    const panelists: Panelist[] = t("speaker", { ns: "officehour", returnObjects: true });

    const meeting: Meeting[] = t("zoomMeeting", {ns: "officehour",returnObjects: true,})

    const timeDetail: TimeDetail[] = t("meetingTime", {ns: "officehour",returnObjects: true,})
    const DateIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_85_1490" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_85_1490)">
        <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20Z" fill="#333333"/>
      </g>
    </svg>
    );

    // Icons
    const SandglassIcon = () => (
      <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4 4.80005H6V6.00005C6 6.31831 6.12643 6.62353 6.35147 6.84858C6.57652 7.07362 6.88174 7.20005 7.2 7.20005C7.51826 7.20005 7.82348 7.07362 8.04853 6.84858C8.27357 6.62353 8.4 6.31831 8.4 6.00005V4.80005Z" fill="#0E426C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V2.4H1.2V6C1.2 7.5913 1.83214 9.11742 2.95736 10.2426C4.08258 11.3679 5.6087 12 7.2 12C5.6087 12 4.08258 12.6321 2.95736 13.7574C1.83214 14.8826 1.2 16.4087 1.2 18V21.6H0V24H14.4V21.6H13.2V18C13.2 16.4087 12.5679 14.8826 11.4426 13.7574C10.3174 12.6321 8.7913 12 7.2 12C7.98793 12 8.76815 11.8448 9.4961 11.5433C10.2241 11.2417 10.8855 10.7998 11.4426 10.2426C11.9998 9.68549 12.4417 9.02405 12.7433 8.2961C13.0448 7.56815 13.2 6.78793 13.2 6V2.4H14.4V0H0ZM3.6 2.4H10.8V6C10.8 6.95478 10.4207 7.87045 9.74558 8.54559C9.07045 9.22072 8.15478 9.6 7.2 9.6C6.24522 9.6 5.32955 9.22072 4.65441 8.54559C3.97928 7.87045 3.6 6.95478 3.6 6V2.4ZM3.6 18V21.6H10.8V18C10.8 17.0452 10.4207 16.1295 9.74558 15.4544C9.07045 14.7793 8.15478 14.4 7.2 14.4C6.24522 14.4 5.32955 14.7793 4.65441 15.4544C3.97928 16.1295 3.6 17.0452 3.6 18Z" fill="#0E426C"/>
      </svg>
    );
    const CoWorker = () => (
      <svg width="26" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.47059 8.57143C9.30825 8.57143 10.1271 8.32008 10.8236 7.84916C11.5201 7.37824 12.0629 6.7089 12.3835 5.92579C12.704 5.14268 12.7879 4.28096 12.6245 3.44961C12.4611 2.61827 12.0577 1.85463 11.4654 1.25526C10.8731 0.65589 10.1184 0.247716 9.29685 0.0823507C8.47529 -0.0830145 7.62371 0.00185694 6.84981 0.326232C6.07591 0.650608 5.41445 1.19992 4.94907 1.9047C4.48369 2.60948 4.23529 3.43808 4.23529 4.28572C4.23529 5.42236 4.68151 6.51245 5.47578 7.31617C6.27005 8.1199 7.34732 8.57143 8.47059 8.57143ZM8.47059 2.85714C8.74981 2.85714 9.02276 2.94093 9.25492 3.0979C9.48709 3.25488 9.66804 3.47799 9.77489 3.73903C9.88174 4.00006 9.9097 4.2873 9.85522 4.56442C9.80075 4.84153 9.6663 5.09608 9.46886 5.29587C9.27142 5.49566 9.01987 5.63172 8.74601 5.68684C8.47215 5.74196 8.18829 5.71367 7.93033 5.60554C7.67236 5.49742 7.45188 5.31432 7.29675 5.07939C7.14162 4.84446 7.05882 4.56826 7.05882 4.28572C7.05882 3.90683 7.20756 3.54347 7.47232 3.27556C7.73708 3.00765 8.09616 2.85714 8.47059 2.85714ZM14.2729 8.37143C15.0989 7.1729 15.5417 5.74688 15.5417 4.28572C15.5417 2.82455 15.0989 1.39853 14.2729 0.200001C14.6789 0.0675074 15.1028 2.67212e-05 15.5294 1.63568e-06C16.6527 1.63568e-06 17.7299 0.451531 18.5242 1.25526C19.3185 2.05899 19.7647 3.14907 19.7647 4.28572C19.7647 5.42236 19.3185 6.51245 18.5242 7.31617C17.7299 8.1199 16.6527 8.57143 15.5294 8.57143C15.1028 8.5714 14.6789 8.50392 14.2729 8.37143ZM8.47059 11.4286C0 11.4286 0 17.1429 0 17.1429V20H16.9412V17.1429C16.9412 17.1429 16.9412 11.4286 8.47059 11.4286ZM2.82353 17.1429C2.82353 16.7286 3.27529 14.2857 8.47059 14.2857C13.4118 14.2857 14.0329 16.5143 14.1176 17.1429M24 17.1429V20H19.7647V17.1429C19.7317 16.0809 19.49 15.0363 19.0537 14.0699C18.6174 13.1035 17.9952 12.2347 17.2235 11.5143C24 12.2143 24 17.1429 24 17.1429Z" fill="#0E426C"/>
      </svg>
    );
    const Cross = () => (
      <svg width="21" height="26" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03748 2.49998C6.03748 1.86346 6.2877 1.25301 6.7331 0.802919C7.1785 0.352832 7.78259 0.0999756 8.41248 0.0999756H10.7875C11.4174 0.0999756 12.0215 0.352832 12.4669 0.802919C12.9123 1.25301 13.1625 1.86346 13.1625 2.49998V6.09998H16.725C17.3549 6.09998 17.959 6.35283 18.4044 6.80292C18.8498 7.25301 19.1 7.86346 19.1 8.49998V10.9C19.1 11.5365 18.8498 12.1469 18.4044 12.597C17.959 13.0471 17.3549 13.3 16.725 13.3H13.1625V21.7C13.1625 22.3365 12.9123 22.9469 12.4669 23.397C12.0215 23.8471 11.4174 24.1 10.7875 24.1H8.41248C7.78259 24.1 7.1785 23.8471 6.7331 23.397C6.2877 22.9469 6.03748 22.3365 6.03748 21.7V13.3H2.47498C1.84509 13.3 1.241 13.0471 0.795597 12.597C0.350198 12.1469 0.0999756 11.5365 0.0999756 10.9V8.49998C0.0999756 7.86346 0.350198 7.25301 0.795597 6.80292C1.241 6.35283 1.84509 6.09998 2.47498 6.09998H6.03748V2.49998ZM10.7875 2.49998H8.41248V7.29998C8.41248 7.61824 8.28736 7.92346 8.06466 8.1485C7.84197 8.37355 7.53992 8.49998 7.22498 8.49998H2.47498V10.9H7.22498C7.53992 10.9 7.84197 11.0264 8.06466 11.2514C8.28736 11.4765 8.41248 11.7817 8.41248 12.1V21.7H10.7875V12.1C10.7875 11.7817 10.9126 11.4765 11.1353 11.2514C11.358 11.0264 11.66 10.9 11.975 10.9H16.725V8.49998H11.975C11.66 8.49998 11.358 8.37355 11.1353 8.1485C10.9126 7.92346 10.7875 7.61824 10.7875 7.29998V2.49998Z" fill="#0E426C" stroke="#0E426C" stroke-width="0.2"/>
        </svg>
    );
    const Boss = () => (
      <svg width="21" height="23" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.6C5.5 4.49243 5.82257 3.40972 6.42692 2.48881C7.03126 1.56789 7.89025 0.850128 8.89524 0.426277C9.90024 0.00242638 11.0061 -0.108472 12.073 0.107605C13.1399 0.323682 14.1199 0.857031 14.8891 1.6402C15.6583 2.42338 16.1821 3.4212 16.3943 4.5075C16.6065 5.59379 16.4976 6.71976 16.0813 7.74303C15.6651 8.76629 14.9601 9.6409 14.0556 10.2562C13.1512 10.8716 12.0878 11.2 11 11.2C9.54131 11.2 8.14236 10.61 7.11091 9.5598C6.07946 8.50959 5.5 7.08521 5.5 5.6ZM8.64286 5.6C8.64286 6.07468 8.7811 6.53869 9.04011 6.93337C9.29911 7.32805 9.66725 7.63566 10.098 7.81731C10.5287 7.99896 11.0026 8.04649 11.4599 7.95389C11.9171 7.86128 12.3371 7.6327 12.6668 7.29706C12.9964 6.96141 13.2209 6.53377 13.3119 6.06822C13.4028 5.60266 13.3561 5.1201 13.1777 4.68156C12.9993 4.24302 12.6972 3.86819 12.3096 3.60447C11.9219 3.34076 11.4662 3.2 11 3.2C10.3748 3.2 9.7753 3.45286 9.33325 3.90295C8.8912 4.35303 8.64286 4.96348 8.64286 5.6ZM22 20.8V24H0V20.8C0 20.8 0 14.4 11 14.4C22 14.4 22 20.8 22 20.8ZM18.8571 20.8C18.6371 19.552 16.7671 17.6 11 17.6C5.23286 17.6 3.25286 19.696 3.14286 20.8" fill="#0E426C"/>
        </svg>

    );
    const Plant = () => (
      <svg width="19" height="28" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.83777 17.7637V7.94548M8.83777 7.94548C8.83777 4.67275 8.83777 1.40002 16.2753 1.40002C16.2753 4.67275 16.2753 7.94548 8.83777 7.94548ZM0.337769 17.7637H17.3378M15.2128 17.7637L13.0878 25.4H4.58777L2.46277 17.7637M8.83777 12.3091C8.83777 9.03639 8.83777 5.76366 1.40027 5.76366C1.40027 9.03639 1.40027 12.3091 8.83777 12.3091Z" stroke="#0E426C" stroke-width="2.8"/>
      </svg>
    );
    const StarIcon = () => (
      <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3544 17.1346C24.6359 16.8559 24.9705 16.7166 25.3581 16.7166C25.7457 16.7166 26.0798 16.8559 26.3604 17.1346L28.5777 19.3634C28.8592 19.6421 29 19.9671 29 20.3386C29 20.7101 28.8592 21.0351 28.5777 21.3137C28.2961 21.5923 27.9676 21.7316 27.5922 21.7316C27.2168 21.7316 26.8884 21.5923 26.6068 21.3137L24.3544 19.1197C24.0728 18.841 23.932 18.5104 23.932 18.1278C23.932 17.7452 24.0728 17.4141 24.3544 17.1346ZM25.7621 0.417916C26.0437 0.696527 26.1845 1.02761 26.1845 1.41116C26.1845 1.79472 26.0437 2.12533 25.7621 2.40302L23.5449 4.59708C23.2634 4.87569 22.9292 5.01499 22.5426 5.01499C22.1559 5.01499 21.8213 4.87569 21.5388 4.59708C21.2563 4.31846 21.1156 3.98785 21.1165 3.60522C21.1174 3.2226 21.2582 2.89151 21.5388 2.61197L23.7913 0.417916C24.0728 0.139305 24.4013 0 24.7767 0C25.1521 0 25.4806 0.139305 25.7621 0.417916ZM3.23787 0.417916C3.51942 0.139305 3.854 0 4.24161 0C4.62921 0 4.96332 0.139305 5.24394 0.417916L7.46117 2.6468C7.74272 2.92541 7.8835 3.25046 7.8835 3.62194C7.8835 3.99342 7.74272 4.31846 7.46117 4.59708C7.17962 4.87569 6.8455 5.01499 6.45884 5.01499C6.07217 5.01499 5.73759 4.87569 5.4551 4.59708L3.23787 2.40302C2.95631 2.12441 2.81554 1.79379 2.81554 1.41116C2.81554 1.02854 2.95631 0.697455 3.23787 0.417916ZM4.64564 17.1346C4.92719 17.4132 5.06797 17.7442 5.06797 18.1278C5.06797 18.5114 4.92719 18.842 4.64564 19.1197L2.4284 21.3137C2.14685 21.5923 1.81274 21.7316 1.42607 21.7316C1.03941 21.7316 0.704827 21.5923 0.422335 21.3137C0.139843 21.0351 -0.00093385 20.7045 4.66148e-06 20.3219C0.000943173 19.9392 0.14172 19.6082 0.422335 19.3286L2.67476 17.1346C2.95631 16.8559 3.28479 16.7166 3.6602 16.7166C4.0356 16.7166 4.36408 16.8559 4.64564 17.1346ZM10.0655 19.6769L14.5 17.0301L18.9345 19.7117L17.7731 14.6967L21.6796 11.3534L16.5413 10.9006L14.5 6.16426L12.4587 10.8658L7.32039 11.3186L11.2269 14.6967L10.0655 19.6769ZM14.5 20.3037L8.65777 23.7864C8.39968 23.9489 8.12986 24.0186 7.8483 23.9953C7.56675 23.9721 7.32039 23.8793 7.10923 23.7167C6.89806 23.5542 6.73382 23.3513 6.61651 23.108C6.49919 22.8646 6.47573 22.5916 6.54612 22.2889L8.09466 15.7067L2.92112 11.2837C2.68649 11.0748 2.54009 10.8366 2.4819 10.5691C2.42371 10.3016 2.44107 10.0407 2.53398 9.7862C2.6269 9.53173 2.76767 9.32278 2.95632 9.15932C3.14496 8.99587 3.40305 8.89139 3.73059 8.84589L10.5583 8.25384L13.1978 2.05475C13.3151 1.77614 13.4972 1.56718 13.744 1.42788C13.9909 1.28857 14.2429 1.21892 14.5 1.21892C14.7572 1.21892 15.0091 1.28857 15.256 1.42788C15.5028 1.56718 15.6849 1.77614 15.8022 2.05475L18.4417 8.25384L25.2694 8.84589C25.5979 8.89232 25.856 8.9968 26.0437 9.15932C26.2314 9.32185 26.3722 9.53081 26.466 9.7862C26.5599 10.0416 26.5777 10.303 26.5195 10.5705C26.4613 10.838 26.3145 11.0757 26.0789 11.2837L20.9053 15.7067L22.4539 22.2889C22.5243 22.5907 22.5008 22.8637 22.3835 23.108C22.2662 23.3522 22.1019 23.5551 21.8908 23.7167C21.6796 23.8783 21.4333 23.9712 21.1517 23.9953C20.8701 24.0195 20.6003 23.9498 20.3422 23.7864L14.5 20.3037Z" fill="#0E426C"/>
        </svg>
    );



    return (
      <div>
        <Header />
        {/* Top Section */}
        <div className="top-container">
          <div className="banner">
            <img className="qa-img" src={QAImg} alt="q&a img" />
            <div className="banner-text">
              <div className="qa-title">{t("banner", { ns: "officehour" })}</div>
              <div className="qa-sub">{t("qaSub", { ns: "officehour" })}</div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="hour-container">
          {/* Meeting Section */}
          <div className="meeting-section">
            <h5 className="oh-section-label">
              {t("MeetingTitle", { ns: "officehour" })}
            </h5>
            <div className="two-parts">
              {/* Left part */}
              <div className="time-container">
                <div className="time-title">{t("leftTitle", { ns: "officehour" })}
                </div>
                <div className="time-box">
                  {timeDetail.map((meetingTime: TimeDetail, index: number) => (
                    <div key={index} className="time-text">
                      <div className="time-type">{meetingTime.type}</div>
                      <div className="icon-and-date">
                        <span className="date-icon"><DateIcon /></span>
                        <p className="time-dates">{meetingTime.dates}</p>
                      </div>

                      <div className="time-list">
                        {meetingTime.times.map((time: any, timeIndex: number) => (
                          <div key={timeIndex} className="time-item">
                            <span className="region">{time.region}</span>{" "}
                            <span className="day">{time.day}</span>
                            <span className="time">{time.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right part */}
              <div className="zoom-container">
                <div className="mid-title">
                  {t("midTitle", { ns: "officehour" })}
                </div>
                <div className="mid-detail">
                  {meeting.map((zoomMeeting, index) => (
                    <div className="oh-zoom-part" key={index}>
                      <div className="oh-mid-text">
                        {Object.entries(zoomMeeting).map(([key, value]) => (
                          <div key={key}>{key}: {value}</div>
                        ))}
                      </div>
                      <button className="join-btn">
                      <Link to="https://us02web.zoom.us/j/84100682160?pwd=b0Y5YklTSms3S1hXN0NvRDF5Z2hNUT09#success">
                        {t("joinUs", { ns: "officehour" })}
                      </Link>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="rec-searchBar">
          <div className="oh-section-label">
            {t("recTitle", { ns: "officehour" })}
          </div>
          <input
            className="oh-search-bar" 
            type="text"
            placeholder={t("searchRec", { ns: "officehour" }) ?? ""}
            value={this.state.searchQuery}
            onChange={(e) => this.handleSearchChange(e.target.value)}
            onKeyDown={this.handleSearchSubmit} 
          />
        </div>
        
        <div className="main-container">
          {/* Left: Most Recent */}
          <div className="most-recent">
            <div className="cate-container">
              <div className="cate-icon-title">
                <SandglassIcon />
                <label className="category-title">
                  {t("ohRecent", { ns: "officehour" })}
                </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording" onClick={() => window.scrollTo(0, 0)}>
                  {viewAll}
                </Link>
              </div>
            </div>

            <div className="main-left">
              {mostRecent.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Work & Colleague */}
          <div className="colleagues">
            <div className="cate-container">
              <div className="cate-icon-title">
                <CoWorker />
              <label className="category-title">
                {t("ohColleague", { ns: "officehour" })}
              </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording?filter=colleague" onClick={() => window.scrollTo(0, 0)}>
                  {viewMoreText}
                </Link>
              </div>
            </div>

            <div className="main-mid">
              {workAndColleagues.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Faith & Work */}
          <div className="faith">
            <div className="cate-container">
              <div className="cate-icon-title">
                <Cross />
                <label className="category-title">
                  {t("ohFaith", { ns: "officehour" })}
                </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording?filter=faith" onClick={() => window.scrollTo(0, 0)}>
                  {viewMoreText}
                </Link>
              </div>
            </div>

            <div className="main-right">
              {faithAndWork.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        
          {/* Work & Boss */}
          <div className="boss">
            <div className="cate-container">
              <div className="cate-icon-title">
                <Boss />
                <label className="category-title">
                  {t("ohBoss", { ns: "officehour" })}
                </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording?filter=boss" onClick={() => window.scrollTo(0, 0)}>
                  {viewMoreText}
                </Link>
              </div>
            </div>

            <div className="main-boss">
              {workAndBoss.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Development */}
          <div className="self-dev">
            <div className="cate-container">
              <div className="cate-icon-title">
                <Plant />
                <label className="category-title">
                  {t("ohDev", { ns: "officehour" })}
                </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording?filter=development" onClick={() => window.scrollTo(0, 0)}>
                  {viewMoreText}
                </Link>
              </div>
            </div>

            <div className="main-selfDev">
              {selfDev.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Focus Group */}
          <div className="focus">
            <div className="cate-container">
              <div className="cate-icon-title">
                <StarIcon />
                <label className="category-title">
                  {t("ohFocus", { ns: "officehour" })}
                </label>
              </div>
              <div className="section-view-more">
                <Link to="/recording?filter=focusGroup" onClick={() => window.scrollTo(0, 0)}>
                  {viewMoreText}
                </Link>
              </div>
            </div>

            <div className="main-focusGrp">
              {focusGrp.map((recording, index) => {
                return (
                  <div className="oh-each-recording" key={index}>
                    <div className="rec-content">
                      <div className="rec-date">{recording.date}</div>
                      <div className="rec-title">{recording.title}</div>
                    </div>
                    <span>
                      < this.PlayIconRound recordingId={recording.id} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Panelists */}
        <div className="panelists-section">
          <div className="panelists-title">
            {t("panelistsTitle", { ns: "officehour" })}
          </div>
          <div className="speaker-container">
            {panelists.map((panelist, index) => (
              <div key={index} className="speaker-card">
                <img src={panelist.image} alt={panelist.name} className="speaker-image" />
                <div className="speaker">
                  <div className="speaker-name">{panelist.name}</div>
                  <div className="speaker-role">{panelist.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function withRouter(Component: any) {
  return function (props: any) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}


export default withTranslation()(withRouter(OfficeHours));
