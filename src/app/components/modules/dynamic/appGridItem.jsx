import React from "react";
import GridContainer from "../../atoms/gridItem";

const WebGridItem = () => {
  const items = [
    {
      image: "/images/web.png",
      title: "WEB DESIGN",
      link: "/website",
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
