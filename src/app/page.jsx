import React, { Fragment } from "react";
import Navbar from "./components/molecules/navigation/Navbar";
import Hero from "./components/modules/hero/hero";
import GridComponent from "./components/modules/grids/grid";
import ItemsComponent from "./components/modules/items/items";
import GetInTouch from "./components/modules/getintouch/getintouch";
import Footer from "./components/molecules/footer/footer";

export const metadata = {
  title: "Welcome | Designo",
};

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <GridComponent />
      <ItemsComponent />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
