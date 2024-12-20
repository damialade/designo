import React from "react";
import { GridContainer } from "../../atoms/gridItem";

const GraphicGridItem = () => {
  const items = [
    {
      image: "/images/web.png",
      title: "WEB DESIGN",
      link: "/website",
    },
    {
      image: "/images/app.png",
      title: "APP DESIGN",
      link: "/application",
    },
  ];

  return (
    <div>
      <GridContainer items={items} />
    </div>
  );
};

export { GraphicGridItem };
