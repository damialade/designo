import React, { Fragment } from "react";
import { Navbar } from "../components/molecules/navigation/navbar";
import { Footer } from "../components/molecules/footer/footer";
import { GetInTouch } from "../components/modules/getintouch/getintouch";
import { CompanyHero } from "../components/atoms/companyHero";
import { WorldClassHero } from "../components/atoms/worldclass";
import { RealDealHero } from "../components/atoms/realdeal";
import { LocationsComponent } from "../components/atoms/locations";

export const metadata = {
  title: "Our Company | Designo",
};

const CompanyPage = () => {
  return (
    <Fragment>
      <Navbar />
      <CompanyHero />
      <WorldClassHero />
      <LocationsComponent />
      <RealDealHero />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};

export default CompanyPage;
