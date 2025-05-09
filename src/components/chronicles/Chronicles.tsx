import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
// import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/chronicles.css";
import cloud from "../../components/officeHours/Cloud.png";


type ChronProp = WithTranslation;
type ArticlesType = {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
};
type ChronState = {
  currentPage: number;
  itemsPerPage: number;
  sortOrder: string;
  selectedYear: string;
  showFilterMenu: boolean;
};


class Chronicles extends Component<ChronProp, ChronState> {
  selectRef = React.createRef<HTMLSelectElement>();

  // Handle Filter by year
  getUniqueYears = (chron: ArticlesType[]): string[] => {
    const years = [ ...new Set(chron.map((articles) =>
          new Date(articles.date).getFullYear().toString()
        )
      ),
    ];
    return years.sort((a, b) => Number(b) - Number(a)); 
  };

  constructor(props: ChronProp) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: this.getItemsPerPage(),
      sortOrder: "recent",
      selectedYear: "all",
      showFilterMenu: false, 
    };
    this.toggleFilterMenu = this.toggleFilterMenu.bind(this);
  }

  getItemsPerPage = (): number => {
    return window.innerWidth <= 768 ? 6 : 9;
  };

  // Update article per page on small window size
  updateArticleNum = () => {
    this.setState({ itemsPerPage: this.getItemsPerPage(), currentPage: 0 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateArticleNum);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateArticleNum);
  }


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
    const chron: ArticlesType[] = t("articles", { ns: "chronicles", returnObjects: true });

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
    
    const { currentPage, itemsPerPage, selectedYear} = this.state;

    // Filter SyStem
    // BY Year
    const filterYear = selectedYear === "all" 
    ? chron : chron.filter((articles) =>
        new Date(articles.date).getFullYear().toString() === this.state.selectedYear
      );


    // Chronological
    const sortedArticle = [...filterYear].sort((a, b) => {
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
    const paginatedArticle = sortedArticle.slice(offset, offset + itemsPerPage);
    const pageCnt = Math.ceil(sortedArticle.length / itemsPerPage);

    return (
      <div className="chron-page">
        <Header />
        <div className="chron-top-part">
          <div className="chron-banner">
            <img className="chron-cloud" src={cloud} alt="cloud" />
            <label className="chron-title">{t("pageBanner")}</label>
            <div className="chron-text">{t("bannerText")}</div>
          </div>
          <div className="chron-right-text-container">
            <div className="chron-page-title">{t("pageTitle")}</div>
            <div className="chron-page-text">{t("pageText")}</div>
          </div>
        </div>

        <div className="chron-page-title-and-icon">
          <div className="chron-backTo">
          </div>
    
          {/* Filter Icon for Mobile */}
          <div className="chron-filter-icon-and-label">
            <div className="chron-filter-label">{t("filter")}</div>
            <div className="chron-filter-icon" onClick={this.toggleFilterMenu}>
              <FilterIcon />
            </div>
          </div>
        </div>


        {/* Filter Dropdown */}
        <div className={`chron-filter-container ${showFilterMenu ? "show" : ""}`}>
          <div className="chron-close-filter-btn">
            <CloseFilterIcon />
          </div>
          

          {/* Chronological */}
          <div className="chron-each-filter">
            <label className="chron-label">{t("sort", { ns: "chronicles" })}</label>
            <select
              value={this.state.sortOrder}
              onChange={(e) => this.setState({ sortOrder: e.target.value, currentPage: 0 })
              } className="chron-sort-dropdown"
            >
              <option value="recent" className="chron-filter-text">{t("timeSort.recent", { ns: "chronicles" })}</option>
              <option value="oldest" className="chron-filter-text">{t("timeSort.oldest", { ns: "chronicles" })}</option>
            </select>
          </div>

          {/* Filter By Year */}
          <div className="chron-each-filter">
            <label className="chron-label">{t("year", { ns: "chronicles" })}</label>
            <select
              id="year-filter"
              value={this.state.selectedYear}
              onChange={(e) =>
                this.setState({ selectedYear: e.target.value, currentPage: 0 })
              }
              className="chron-year-dropdown"
            >
              <option value="all" className="chron-filter-text">
                {t("years", { ns: "chronicles" })}
              </option>
              {this.getUniqueYears(chron).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        
        {/* Article List */}
        <div className="chron-and-pagination">
          <div className="chron-container">
            {paginatedArticle.map((articles, index) => (
              <div key={index} className="article-card">
                <img className="article-image" src={articles.image} alt={articles.title} />
                <div className="article-info">
                  <h4 className="article-title">{articles.title}</h4>
                  <div className="article-date">{articles.date}</div>
                  <div className="article-text">{articles.description}</div>
                  <button className="read-btn" 
                    onClick={() => window.open(articles.link, "_blank")}>
                    {this.props.t("readMore", { ns: "chronicles" })}
                  </button>
                </div>
              </div>
            ))}
          </div> 
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
            activeClassName={"page-active"}
            pageClassName={"page"}
            breakClassName={"break"}
            previousClassName={"prev"}
            nextClassName={"next"}
            forcePage={this.state.currentPage}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withTranslation("chronicles")(Chronicles);
