import React from "react";
import { DynamicHero } from "../../atoms/dynamicHero";

const WebHero = () => {
  return (
    <DynamicHero
      backgroundImage="/images/webhero.png"
      title="Web Design"
      text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    />
  );
};

export { WebHero };
