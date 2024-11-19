import React from "react";
import { CardGrid } from "../../atoms/cardGrid";

const GraphicGrid = () => {
  const cards = [
    {
      image: "/images/timbrown.png",
      title: "Tim Brown",
      text: "A book cover designed for Tim Brown's new release, 'Change'",
    },
    {
      image: "/images/boxwater.png",
      title: "Boxed Water",
      text: "A simple packaging concept made for Boxed Water",
    },
    {
      image: "/images/science.png",
      title: "Science",
      text: " A poster made in collaboration with the Federal Art Project.",
    },
  ];

  return <CardGrid cards={cards} />;
};

export { GraphicGrid };
