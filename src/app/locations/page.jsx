import React, { Fragment } from "react";
import { Navbar } from "../components/molecules/navigation/navbar";
import { Footer } from "../components/molecules/footer/footer";
import { GetInTouch } from "../components/modules/getintouch/getintouch";
import { LocationMaps } from "../components/modules/map/locationMaps";

export const metadata = {
  title: "Locations | Designo",
};

const LocationsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <LocationMaps />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default LocationsPage;
