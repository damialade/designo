import React from "react";
import DynamicHero from "../../atoms/dynamicHero";

const AppHero = () => {
  return (
    <DynamicHero
      backgroundImage="/images/appHero.png"
      title="App Design"
      text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    />
  );
};

export default AppHero;
