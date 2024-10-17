import React from "react";
import GridContainer from "../../atoms/GridItem";

const WebGridItem = () => {
  const items = [
    {
      image: "/images/app.png",
      title: "APP DESIGN",
      link: "/application",
    },
    {
      image: "/images/graphic.png",
      title: "GRAPHIC DESIGN",
      link: "/graphic",
    },
  ];

  return (
    <div>
      <GridContainer items={items} />
    </div>
  );
};

export default WebGridItem;
