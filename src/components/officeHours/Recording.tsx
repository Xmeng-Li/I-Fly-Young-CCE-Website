import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Header from "../Header";
import "../../styles/recording.css";


type RecordingProp = WithTranslation;
type Recording = {
  id: string;
  date: string;
  title: string;
  question: string;
  category: string;
  audioUrl: string;
};
type RecordingState = {
  visiblePlayerIndex: number | null;
  currentPage: number;
  itemsPerPage: number;
  selectedTopic: string;
  sortOrder: string;
  selectedYear: string;
  showFilterMenu: boolean;
};


class recording extends Component<RecordingProp, RecordingState> {
  selectRef = React.createRef<HTMLSelectElement>();

  componentDidMount() {
    // Handle body color
    document.body.style.backgroundColor = "#F0F8FF";

    // Handle recording filter for officehour page
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (filter) {
      this.setState({ selectedTopic: filter }, () => {
        if (this.selectRef.current) {
          this.selectRef.current.focus();
        }
      });
    }

    // Link player to office hour round play icon
    const play = params.get("play");
    if (play) {
      this.showPlayerById(play);
    }
  }
  
  componentWillUnmount() {
    document.body.style.backgroundColor = "";
  }

  getFilteredRecordings = (): Recording[] => {
    const { selectedTopic, selectedYear, sortOrder } = this.state;
    const { t } = this.props;
    const recordings: Recording[] = t("recordings", { ns: "officehour", returnObjects: true }) as Recording[];
  
    // Apply topic filter
    const topicFiltered = selectedTopic === "allTopic"
      ? recordings
      : recordings.filter((recording) => recording.category === selectedTopic);
  
    // Apply year filter
    const yearFiltered = selectedYear === "all"
      ? topicFiltered
      : topicFiltered.filter((recording) => new Date(recording.date).getFullYear().toString() === selectedYear);
  
    // Apply sorting
    const sorted = [...yearFiltered].sort((a, b) => {
      if (sortOrder === "recent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
    return sorted;
  };
  

  showPlayerById = (recordingId: string) => {
    const recordings = this.getFilteredRecordings();
    const recordingIndex = recordings.findIndex((recording) => recording.id === recordingId);
  
    if (recordingIndex !== -1) {
      this.showPlayer(recordingIndex);
    } else {
      console.error(`Recording with ID ${recordingId} not found.`);
    }
  };
  

  // Handle Date
  formatDate = (date: string) => {
    const [month, day, year] = date.split("/");
    const monthDay = `${month}/${day}`;
    return {monthDay, year};
  };

  // Handle Filter by year
  getUniqueYears = (recordings: Recording[]): string[] => {
    const years = [ ...new Set(recordings.map((recording) =>
          new Date(recording.date).getFullYear().toString()
        )
      ),
    ];
    return years.sort((a, b) => Number(b) - Number(a)); 
  };

  constructor(props: RecordingProp) {
    super(props);

    this.state = {
      visiblePlayerIndex: null,
      currentPage: 0,
      itemsPerPage: 10,
      selectedTopic: "allTopic",
      sortOrder: "recent",
      selectedYear: "all",
      showFilterMenu: false, 
    };
    this.toggleFilterMenu = this.toggleFilterMenu.bind(this);
  }

  // Update page for specific player
  scrollToPlayer = () => {
    const playerElement = document.querySelector(".audio-playing");
    if (playerElement) {
      playerElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  
  // Handle player for both office hour and recording page
  showPlayer = (globalIndex: number): void => {
    const { itemsPerPage, currentPage } = this.state;
    const targetPage = Math.floor(globalIndex / itemsPerPage);
  
    if (targetPage !== currentPage) {
      this.setState({ currentPage: targetPage, visiblePlayerIndex: globalIndex }, this.scrollToPlayer);
    } else {
      this.setState({ visiblePlayerIndex: globalIndex }, this.scrollToPlayer);
    }
  };

  // Close Player
  closePlayer = (): void => {
    this.setState({ visiblePlayerIndex: null });
  };

  // Handle page change
  pageChange = (selectedPage: { selected: number }) => {
    this.setState({ currentPage: selectedPage.selected });
  };

  // Handle filter icon
  toggleFilterMenu = () => {
    this.setState((prevState) => ({
      showFilterMenu: !prevState.showFilterMenu, 
    }));
  };
  
  
  render() {
    const { t } = this.props;
    const recordings: Recording[] = t("recordings", {ns: "officehour",returnObjects: true,}) as Recording[];

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

    const PlayIcon = () => (
      <svg
        className="play-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
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

    const PlayIconRound = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer" }}
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

    // Replace player icons
    const CustomIcons = {
      play: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_1485" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_1485)">
          <path d="M6 18.5976V6.19809C6 5.85865 6.1198 5.57411 6.35941 5.34449C6.59901 5.11487 6.87855 5.00006 7.19802 5.00006C7.29786 5.00006 7.40269 5.01504 7.51251 5.04499C7.62233 5.07494 7.72715 5.11986 7.82699 5.17976L17.5909 11.3795C17.7706 11.4993 17.9054 11.6491 17.9952 11.8288C18.0851 12.0085 18.13 12.1982 18.13 12.3979C18.13 12.5975 18.0851 12.7872 17.9952 12.9669C17.9054 13.1466 17.7706 13.2964 17.5909 13.4162L7.82699 19.616C7.72715 19.6759 7.62233 19.7208 7.51251 19.7507C7.40269 19.7807 7.29786 19.7957 7.19802 19.7957C6.87855 19.7957 6.59901 19.6809 6.35941 19.4512C6.1198 19.2216 6 18.9371 6 18.5976Z" fill="#333333"/>
        </g>
      </svg>
      ),
      pause: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_1486" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_1486)">
          <path d="M16 19C15.45 19 14.9792 18.8042 14.5875 18.4125C14.1958 18.0208 14 17.55 14 17V7C14 6.45 14.1958 5.97917 14.5875 5.5875C14.9792 5.19583 15.45 5 16 5C16.55 5 17.0208 5.19583 17.4125 5.5875C17.8042 5.97917 18 6.45 18 7V17C18 17.55 17.8042 18.0208 17.4125 18.4125C17.0208 18.8042 16.55 19 16 19ZM8 19C7.45 19 6.97917 18.8042 6.5875 18.4125C6.19583 18.0208 6 17.55 6 17V7C6 6.45 6.19583 5.97917 6.5875 5.5875C6.97917 5.19583 7.45 5 8 5C8.55 5 9.02083 5.19583 9.4125 5.5875C9.80417 5.97917 10 6.45 10 7V17C10 17.55 9.80417 18.0208 9.4125 18.4125C9.02083 18.8042 8.55 19 8 19Z" fill="#333333"/>
        </g>
      </svg>
      ),
      forward: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_1493" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_1493)">
          <path d="M12 22C10.75 22 9.57917 21.7625 8.4875 21.2875C7.39583 20.8125 6.44583 20.1708 5.6375 19.3625C4.82917 18.5542 4.1875 17.6042 3.7125 16.5125C3.2375 15.4208 3 14.25 3 13C3 11.75 3.2375 10.5792 3.7125 9.4875C4.1875 8.39583 4.82917 7.44583 5.6375 6.6375C6.44583 5.82916 7.39583 5.1875 8.4875 4.7125C9.57917 4.2375 10.75 4 12 4H12.15L11.3 3.15C11.1 2.95 11.0042 2.71666 11.0125 2.45C11.0208 2.18333 11.1167 1.95 11.3 1.75C11.5 1.55 11.7375 1.44583 12.0125 1.4375C12.2875 1.42916 12.525 1.525 12.725 1.725L15.3 4.3C15.5 4.5 15.6 4.73333 15.6 5C15.6 5.26666 15.5 5.5 15.3 5.7L12.725 8.275C12.525 8.475 12.2875 8.57083 12.0125 8.5625C11.7375 8.55416 11.5 8.45 11.3 8.25C11.1167 8.05 11.0208 7.81666 11.0125 7.55C11.0042 7.28333 11.1 7.05 11.3 6.85L12.15 6H12C10.05 6 8.39583 6.67916 7.0375 8.0375C5.67917 9.39583 5 11.05 5 13C5 14.95 5.67917 16.6042 7.0375 17.9625C8.39583 19.3208 10.05 20 12 20C13.95 20 15.6042 19.3208 16.9625 17.9625C18.3208 16.6042 19 14.95 19 13C19 12.7167 19.0958 12.4792 19.2875 12.2875C19.4792 12.0958 19.7167 12 20 12C20.2833 12 20.5208 12.0958 20.7125 12.2875C20.9042 12.4792 21 12.7167 21 13C21 14.25 20.7625 15.4208 20.2875 16.5125C19.8125 17.6042 19.1708 18.5542 18.3625 19.3625C17.5542 20.1708 16.6042 20.8125 15.5125 21.2875C14.4208 21.7625 13.25 22 12 22ZM9 11.5H8.25C8.03333 11.5 7.85417 11.4292 7.7125 11.2875C7.57083 11.1458 7.5 10.9667 7.5 10.75C7.5 10.5333 7.57083 10.3542 7.7125 10.2125C7.85417 10.0708 8.03333 10 8.25 10H9.75C9.96667 10 10.1458 10.0708 10.2875 10.2125C10.4292 10.3542 10.5 10.5333 10.5 10.75V15.25C10.5 15.4667 10.4292 15.6458 10.2875 15.7875C10.1458 15.9292 9.96667 16 9.75 16C9.53333 16 9.35417 15.9292 9.2125 15.7875C9.07083 15.6458 9 15.4667 9 15.25V11.5ZM12.5 16C12.2167 16 11.9792 15.9042 11.7875 15.7125C11.5958 15.5208 11.5 15.2833 11.5 15V11C11.5 10.7167 11.5958 10.4792 11.7875 10.2875C11.9792 10.0958 12.2167 10 12.5 10H14.5C14.7833 10 15.0208 10.0958 15.2125 10.2875C15.4042 10.4792 15.5 10.7167 15.5 11V15C15.5 15.2833 15.4042 15.5208 15.2125 15.7125C15.0208 15.9042 14.7833 16 14.5 16H12.5ZM13 14.5H14V11.5H13V14.5Z" fill="#333333"/>
        </g>
      </svg>
      ),
      rewind: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_1488" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_1488)">
          <path d="M9 11.5H8.25C8.03333 11.5 7.85417 11.4292 7.7125 11.2875C7.57083 11.1458 7.5 10.9667 7.5 10.75C7.5 10.5333 7.57083 10.3542 7.7125 10.2125C7.85417 10.0708 8.03333 10 8.25 10H9.75C9.96667 10 10.1458 10.0708 10.2875 10.2125C10.4292 10.3542 10.5 10.5333 10.5 10.75V15.25C10.5 15.4667 10.4292 15.6458 10.2875 15.7875C10.1458 15.9292 9.96667 16 9.75 16C9.53333 16 9.35417 15.9292 9.2125 15.7875C9.07083 15.6458 9 15.4667 9 15.25V11.5ZM12.5 16C12.2167 16 11.9792 15.9042 11.7875 15.7125C11.5958 15.5208 11.5 15.2833 11.5 15V11C11.5 10.7167 11.5958 10.4792 11.7875 10.2875C11.9792 10.0958 12.2167 10 12.5 10H14.5C14.7833 10 15.0208 10.0958 15.2125 10.2875C15.4042 10.4792 15.5 10.7167 15.5 11V15C15.5 15.2833 15.4042 15.5208 15.2125 15.7125C15.0208 15.9042 14.7833 16 14.5 16H12.5ZM13 14.5H14V11.5H13V14.5ZM12 22C10.75 22 9.57917 21.7625 8.4875 21.2875C7.39583 20.8125 6.44583 20.1708 5.6375 19.3625C4.82917 18.5542 4.1875 17.6042 3.7125 16.5125C3.2375 15.4208 3 14.25 3 13C3 12.7167 3.09583 12.4792 3.2875 12.2875C3.47917 12.0958 3.71667 12 4 12C4.28333 12 4.52083 12.0958 4.7125 12.2875C4.90417 12.4792 5 12.7167 5 13C5 14.95 5.67917 16.6042 7.0375 17.9625C8.39583 19.3208 10.05 20 12 20C13.95 20 15.6042 19.3208 16.9625 17.9625C18.3208 16.6042 19 14.95 19 13C19 11.05 18.3208 9.39583 16.9625 8.0375C15.6042 6.67916 13.95 6 12 6H11.85L12.7 6.85C12.9 7.05 12.9958 7.28333 12.9875 7.55C12.9792 7.81666 12.8833 8.05 12.7 8.25C12.5 8.45 12.2625 8.55416 11.9875 8.5625C11.7125 8.57083 11.475 8.475 11.275 8.275L8.7 5.7C8.5 5.5 8.4 5.26666 8.4 5C8.4 4.73333 8.5 4.5 8.7 4.3L11.275 1.725C11.475 1.525 11.7125 1.42916 11.9875 1.4375C12.2625 1.44583 12.5 1.55 12.7 1.75C12.8833 1.95 12.9792 2.18333 12.9875 2.45C12.9958 2.71666 12.9 2.95 12.7 3.15L11.85 4H12C13.25 4 14.4208 4.2375 15.5125 4.7125C16.6042 5.1875 17.5542 5.82916 18.3625 6.6375C19.1708 7.44583 19.8125 8.39583 20.2875 9.4875C20.7625 10.5792 21 11.75 21 13C21 14.25 20.7625 15.4208 20.2875 16.5125C19.8125 17.6042 19.1708 18.5542 18.3625 19.3625C17.5542 20.1708 16.6042 20.8125 15.5125 21.2875C14.4208 21.7625 13.25 22 12 22Z" fill="#333333"/>
        </g>
      </svg>
      ),
      volume: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_1492" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_1492)">
          <path d="M19 11.975C19 10.5917 18.6333 9.32917 17.9 8.1875C17.1667 7.04583 16.1833 6.19167 14.95 5.625C14.7 5.50833 14.5167 5.32917 14.4 5.0875C14.2833 4.84583 14.2667 4.6 14.35 4.35C14.45 4.08333 14.6292 3.89167 14.8875 3.775C15.1458 3.65833 15.4083 3.65833 15.675 3.775C17.2917 4.49167 18.5833 5.5875 19.55 7.0625C20.5167 8.5375 21 10.175 21 11.975C21 13.775 20.5167 15.4125 19.55 16.8875C18.5833 18.3625 17.2917 19.4583 15.675 20.175C15.4083 20.2917 15.1458 20.2917 14.8875 20.175C14.6292 20.0583 14.45 19.8667 14.35 19.6C14.2667 19.35 14.2833 19.1042 14.4 18.8625C14.5167 18.6208 14.7 18.4417 14.95 18.325C16.1833 17.7583 17.1667 16.9042 17.9 15.7625C18.6333 14.6208 19 13.3583 19 11.975ZM7 15H4C3.71667 15 3.47917 14.9042 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V10C3 9.71667 3.09583 9.47917 3.2875 9.2875C3.47917 9.09583 3.71667 9 4 9H7L10.3 5.7C10.6167 5.38333 10.9792 5.3125 11.3875 5.4875C11.7958 5.6625 12 5.975 12 6.425V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6167 10.3 18.3L7 15ZM16.5 12C16.5 12.7 16.3417 13.3625 16.025 13.9875C15.7083 14.6125 15.2917 15.125 14.775 15.525C14.6083 15.625 14.4375 15.6292 14.2625 15.5375C14.0875 15.4458 14 15.3 14 15.1V8.85C14 8.65 14.0875 8.50417 14.2625 8.4125C14.4375 8.32083 14.6083 8.325 14.775 8.425C15.2917 8.84167 15.7083 9.36667 16.025 10C16.3417 10.6333 16.5 11.3 16.5 12Z" fill="#333333"/>
        </g>
      </svg>
      ),
      close: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_85_2378" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_85_2378)">
          <path d="M12 13.4L7.10005 18.3C6.91672 18.4833 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4833 5.70005 18.3C5.51672 18.1167 5.42505 17.8833 5.42505 17.6C5.42505 17.3167 5.51672 17.0833 5.70005 16.9L10.6 12L5.70005 7.09999C5.51672 6.91665 5.42505 6.68332 5.42505 6.39999C5.42505 6.11665 5.51672 5.88332 5.70005 5.69999C5.88338 5.51665 6.11672 5.42499 6.40005 5.42499C6.68338 5.42499 6.91672 5.51665 7.10005 5.69999L12 10.6L16.9 5.69999C17.0834 5.51665 17.3167 5.42499 17.6 5.42499C17.8834 5.42499 18.1167 5.51665 18.3 5.69999C18.4834 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4834 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4834 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4834 18.1167 18.3 18.3C18.1167 18.4833 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4833 16.9 18.3L12 13.4Z" fill="#333333"/>
        </g>
      </svg>
      )
    };

    // Replace pagination icons
    const PreviousIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
      <path d="M2.46423 8.57997L9.11088 15.2266C9.33696 15.4527 9.44623 15.7165 9.4387 16.0179C9.43116 16.3193 9.31435 16.5831 9.08828 16.8092C8.8622 17.0352 8.59844 17.1483 8.29701 17.1483C7.99557 17.1483 7.73182 17.0352 7.50574 16.8092L0.542584 9.86861C0.361722 9.68775 0.226077 9.48428 0.135646 9.2582C0.0452153 9.03212 0 8.80605 0 8.57997C0 8.35389 0.0452153 8.12782 0.135646 7.90174C0.226077 7.67566 0.361722 7.4722 0.542584 7.29133L7.50574 0.328176C7.73182 0.102099 7.99934 -0.00717125 8.30831 0.00036464C8.61728 0.00790053 8.88481 0.124707 9.11088 0.350783C9.33696 0.57686 9.45 0.840616 9.45 1.14205C9.45 1.44349 9.33696 1.70724 9.11088 1.93332L2.46423 8.57997Z" fill="#333333"/>
    </svg>
    );

    const NextIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_85_2312" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_85_2312)">
        <path d="M13.9755 11.5918L7.32821 4.94445C7.10211 4.71835 6.99283 4.4508 7.00036 4.1418C7.0079 3.8328 7.12472 3.56525 7.35082 3.33915C7.57692 3.11305 7.84447 3 8.15347 3C8.46247 3 8.73002 3.11305 8.95612 3.33915L15.8974 10.303C16.0782 10.4839 16.2139 10.6874 16.3043 10.9135C16.3948 11.1396 16.44 11.3657 16.44 11.5918C16.44 11.8179 16.3948 12.044 16.3043 12.2701C16.2139 12.4962 16.0782 12.6996 15.8974 12.8805L8.93351 19.8444C8.70741 20.0705 8.44363 20.1798 8.14216 20.1722C7.8407 20.1647 7.57692 20.0479 7.35082 19.8218C7.12472 19.5957 7.01167 19.3281 7.01167 19.0191C7.01167 18.7101 7.12472 18.4426 7.35082 18.2165L13.9755 11.5918Z" fill="#333333"/>
      </g>
    </svg>
    );

    const FilterIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <mask id="mask0_537_3864" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_537_3864)">
        <path d="M9.16667 15C8.93056 15 8.73264 14.9201 8.57292 14.7604C8.41319 14.6007 8.33333 14.4028 8.33333 14.1667C8.33333 13.9306 8.41319 13.7326 8.57292 13.5729C8.73264 13.4132 8.93056 13.3333 9.16667 13.3333H10.8333C11.0694 13.3333 11.2674 13.4132 11.4271 13.5729C11.5868 13.7326 11.6667 13.9306 11.6667 14.1667C11.6667 14.4028 11.5868 14.6007 11.4271 14.7604C11.2674 14.9201 11.0694 15 10.8333 15H9.16667ZM5.83333 10.8333C5.59722 10.8333 5.39931 10.7535 5.23958 10.5938C5.07986 10.434 5 10.2361 5 10C5 9.76389 5.07986 9.56597 5.23958 9.40625C5.39931 9.24653 5.59722 9.16667 5.83333 9.16667H14.1667C14.4028 9.16667 14.6007 9.24653 14.7604 9.40625C14.9201 9.56597 15 9.76389 15 10C15 10.2361 14.9201 10.434 14.7604 10.5938C14.6007 10.7535 14.4028 10.8333 14.1667 10.8333H5.83333ZM3.33333 6.66667C3.09722 6.66667 2.89931 6.58681 2.73958 6.42708C2.57986 6.26736 2.5 6.06944 2.5 5.83333C2.5 5.59722 2.57986 5.39931 2.73958 5.23958C2.89931 5.07986 3.09722 5 3.33333 5H16.6667C16.9028 5 17.1007 5.07986 17.2604 5.23958C17.4201 5.39931 17.5 5.59722 17.5 5.83333C17.5 6.06944 17.4201 6.26736 17.2604 6.42708C17.1007 6.58681 16.9028 6.66667 16.6667 6.66667H3.33333Z" fill="#525252"/>
      </g>
    </svg>
    );

    const CloseFilterIcon = () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"
        onClick={this.toggleFilterMenu}
        >
        <mask id="mask0_537_3868" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
          <rect width="14" height="14" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_537_3868)">
          <path d="M6.99997 7.81712L4.14163 10.6755C4.03469 10.7824 3.89858 10.8359 3.7333 10.8359C3.56802 10.8359 3.43191 10.7824 3.32497 10.6755C3.21802 10.5685 3.16455 10.4324 3.16455 10.2671C3.16455 10.1018 3.21802 9.96573 3.32497 9.85879L6.1833 7.00046L3.32497 4.14212C3.21802 4.03518 3.16455 3.89907 3.16455 3.73379C3.16455 3.56851 3.21802 3.4324 3.32497 3.32546C3.43191 3.21851 3.56802 3.16504 3.7333 3.16504C3.89858 3.16504 4.03469 3.21851 4.14163 3.32546L6.99997 6.18379L9.8583 3.32546C9.96525 3.21851 10.1014 3.16504 10.2666 3.16504C10.4319 3.16504 10.568 3.21851 10.675 3.32546C10.7819 3.4324 10.8354 3.56851 10.8354 3.73379C10.8354 3.89907 10.7819 4.03518 10.675 4.14212L7.81663 7.00046L10.675 9.85879C10.7819 9.96573 10.8354 10.1018 10.8354 10.2671C10.8354 10.4324 10.7819 10.5685 10.675 10.6755C10.568 10.7824 10.4319 10.8359 10.2666 10.8359C10.1014 10.8359 9.96525 10.7824 9.8583 10.6755L6.99997 7.81712Z" fill="#525252"/>
        </g>
      </svg>
      )
    }
    
    const { currentPage, itemsPerPage, selectedYear, selectedTopic} = this.state;

    // Filter SyStem
    // By Topic
    const filterTopic = selectedTopic === "allTopic" 
    ? recordings : recordings.filter((recording) => {
      switch (selectedTopic) {
        case "boss":
          return recording.category === "Boss";
        case "colleague":
          return recording.category === "Colleague";
        case "faith":
          return recording.category === "Faith";
        case "development":
          return recording.category === "Development";
        case "focusGroup":
          return recording.category === "Focus";
        default:
          return true;
      }
    });
    const categories = t("categories", { ns: "officehour", returnObjects: true }) as Record<string, string>;

    // BY Year
    const filterYear = selectedYear === "all" 
    ? filterTopic : filterTopic.filter((recording) =>
        new Date(recording.date).getFullYear().toString() === this.state.selectedYear
      );

    // Chronological
    const sortedRecording = [...filterYear].sort((a, b) => {
      if (this.state.sortOrder === "recent") {
        // descending order 
        return new Date(b.date).getTime() - new Date(a.date).getTime(); 
      } else {
        // ascending order 
        return new Date(a.date).getTime() - new Date(b.date).getTime(); 
      }
    });

    const { showFilterMenu } = this.state;
  
    // Pagination
    const offset = currentPage * itemsPerPage;
    const paginatedAudio = sortedRecording.slice(offset, offset + itemsPerPage);
    const pageCnt = Math.ceil(sortedRecording.length / itemsPerPage);

    return (
      <div className="recording-page">
        <Header />
        <div className="page-title-and-icon">
          <div className="backTo">
            <Link to="/office-hours">
              <div className="left-arrow">
                <LeftArrow />
              </div>
            </Link>
            <label className="backTo-text">{t("officeHours", { ns: "officehour" })}
            </label>
          </div>
          <div className="pageTitle">{t("allRecordings", { ns: "officehour" })}</div>

          {/* Filter Icon for Mobile */}
          <div className="filter-icon" onClick={this.toggleFilterMenu}>
            <FilterIcon />
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className={`filter-container ${showFilterMenu ? "show" : ""}`}>
          <div className="label-and-x">
            <div className="filter-label">{t("filter", { ns: "officehour" })}</div>
            <div className="close-filter-btn">
              <CloseFilterIcon />
            </div>
          </div>

          {/* Chronological */}
          <div className="each-filter">
            <label className="label">{t("sort", { ns: "officehour" })}</label>
            <select
              value={this.state.sortOrder}
              onChange={(e) => this.setState({ sortOrder: e.target.value, currentPage: 0 })
              } className="sort-dropdown"
            >
              <option value="recent" className="filter-text">{t("timeSort.recent", { ns: "officehour" })}</option>
              <option value="oldest" className="filter-text">{t("timeSort.oldest", { ns: "officehour" })}</option>
            </select>
          </div>

          {/* Filter By Year */}
          <div className="each-filter">
            <label className="label">{t("year", { ns: "officehour" })}</label>
            <select
              id="year-filter"
              value={this.state.selectedYear}
              onChange={(e) =>
                this.setState({ selectedYear: e.target.value, currentPage: 0 })
              }
              className="year-dropdown"
            >
              <option value="all" className="filter-text">
                {t("years", { ns: "officehour" })}
              </option>
              {this.getUniqueYears(recordings).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Filter By Topic */}
          <div className="each-filter">
            <label className="label">{t("topic", { ns: "officehour" })}</label>
            <select
              ref={this.selectRef}
              value={selectedTopic}
              onChange={(e) => this.setState({ selectedTopic: e.target.value,currentPage: 0 })
              } className="topic-dropdown"
            >
              {Object.keys(categories).map((key) => (
                <option key={key} value={key} className="filter-text">
                  {categories[key]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Recording List */}
        <div className="recording-container">
          {paginatedAudio.map((recording, index) => {
            const globalIndex = offset + index;
            const { monthDay, year } = this.formatDate(recording.date);
            const isVisible = this.state.visiblePlayerIndex === globalIndex;

            return (
              <div key={recording.id || globalIndex} className={`each-recording ${isVisible ? "audio-playing" : ""}`}>
                <div className="date-box">
                  <div className="month-day">{monthDay}</div>
                  <div className="year">{year}</div>
                </div>
                <div className="content">
                  <div className={`title ${isVisible ? "full" : ""}`}>       
                    {recording.title}
                  </div>
                  <div className={`question ${isVisible ? "full" : ""}`}>       
                    {recording.question}
                  </div>
                  {/* Audio Player */}
                  {isVisible && (
                    <div className="player-container">
                      <AudioPlayer className="player"
                        src={recording.audioUrl} 
                        autoPlay
                        onPlay={() => console.log(`Playing audio: ${recording.audioUrl}`)}
                        onEnded={this.closePlayer}
                        layout="horizontal"
                        
                        customIcons={CustomIcons}
                        progressJumpSteps={{
                          forward: 10000,
                          backward: 10000
                        }}
                        customAdditionalControls={[]}
                      />
                      <button key="close" className="close-player-btn"
                        onClick={this.closePlayer}>
                        {CustomIcons.close}
                      </button>
                    </div>
                  )}
                </div>
                
                {/* If the player isn't visible, show play now button */}
                {!isVisible && (
                  <div className="action">
                    <button className="play-now-btn" onClick={() => this.showPlayer(globalIndex)}>
                      {t("playNow", { ns: "officehour" })}<PlayIcon />
                    </button>
                    {/* Change icon in mobile size */}
                    <div className="play-icon-round-btn" onClick={() => this.showPlayer(globalIndex)}>
                      <PlayIconRound />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        {/* Pagination Component */}
        <ReactPaginate
          previousLabel={PreviousIcon}
          nextLabel={NextIcon}
          breakLabel={"..."}
          pageCount={pageCnt}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={this.pageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page"}
          breakClassName={"break"}
          previousClassName={"prev"}
          nextClassName={"next"}
          forcePage={this.state.currentPage}
        />
        </div>
      </div>
    );
  }
}

export default withTranslation()(recording);
