import React, { Fragment } from "react";
import Navbar from "../components/molecules/navigation/Navbar";
import Footer from "../components/molecules/footer/footer";
import WebHero from "../components/modules/dynamic/webHero";
import WebGrid from "../components/modules/dynamic/webGrid";
import WebGridItem from "../components/modules/dynamic/webGridItem";
import GetInTouch from "../components/modules/getintouch/getintouch";

export const metadata = {
  title: "Web Designs | Designo",
};

const WebPage = () => {
  return (
    <Fragment>
      <Navbar />
      <WebHero />
      <WebGrid />
      <WebGridItem />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default WebPage;
