import React, { Fragment } from "react";
import Navbar from "../components/molecules/navigation/navbar";
import Footer from "../components/molecules/footer/footer";
import LocationsComponent from "../components/atoms/locations";
import ContactForm from "../components/atoms/contacthero";

export const metadata = {
  title: "Contact Us | Designo",
};

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactForm />
      <LocationsComponent />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
