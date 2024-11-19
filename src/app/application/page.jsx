import React, { Fragment } from "react";
import { Navbar } from "../components/molecules/navigation/navbar";
import { Footer } from "../components/molecules/footer/footer";
import { AppHero } from "../components/modules/dynamic/appHero";
import { AppGrid } from "../components/modules/dynamic/appGrid";
import { AppGridItem } from "../components/modules/dynamic/appGridItem";
import { GetInTouch } from "../components/modules/getintouch/getintouch";

export const metadata = {
  title: "App Designs | Designo",
};

const AppPage = () => {
  return (
    <Fragment>
      <Navbar />
      <AppHero />
      <AppGrid />
      <AppGridItem />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default AppPage;
