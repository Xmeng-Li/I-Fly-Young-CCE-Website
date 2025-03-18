import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/interview.css";

// import cloud from "../../components/officeHours/Cloud.png";


type InterviewType = {
  image: string;
  title: string;
  date: string;
  description: string;
  videoLink: string;
};

const Interview = () => {
  const { t } = useTranslation("webinar");
  // const webinars: WebinarType[] = t("webinar", { ns: "webinar", returnObjects: true });

  return (
    <div>
      <Header />
        

        

        
      <Footer />
    </div>
  ); 
}

export default Interview;