import React from "react";
import { DynamicHero } from "../../atoms/dynamicHero";

const GraphicHero = () => {
  return (
    <DynamicHero
      backgroundImage="/images/graphicHero.png"
      title="Graphic Design"
      text="  We deliver eye-catching branding materials that are tailored to meet your business objectives."
    />
  );
};

export { GraphicHero };
