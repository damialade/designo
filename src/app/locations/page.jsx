import React, { Fragment } from "react";
import Navbar from "../components/molecules/navigation/Navbar";
import Footer from "../components/molecules/footer/footer";
import GetInTouch from "../components/modules/getintouch/getintouch";

export const metadata = {
  title: "Locations | Designo",
};

const LocationsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default LocationsPage;
