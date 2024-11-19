import React, { Fragment } from "react";
import Navbar from "../components/molecules/navigation/navbar";
import Footer from "../components/molecules/footer/footer";
import GraphicHero from "../components/modules/dynamic/graphicHero";
import GraphicGrid from "../components/modules/dynamic/graphicGrid";
import GraphicGridItem from "../components/modules/dynamic/graphicGridItem";
import GetInTouch from "../components/modules/getintouch/getintouch";

export const metadata = {
  title: "Graphic Designs | Designo",
};

const GraphicPage = () => {
  return (
    <Fragment>
      <Navbar />
      <GraphicHero />
      <GraphicGrid />
      <GraphicGridItem />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default GraphicPage;
