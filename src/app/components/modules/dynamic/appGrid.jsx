import React from "react";
import { CardGrid } from "../../atoms/cardGrid";

const AppGrid = () => {
  const cards = [
    {
      image: "/images/airfilter.png",
      title: "Airfilter",
      text: "  Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      image: "/images/eyecam.png",
      title: "Eyecam",
      text: "  Product that lets you edit your favorite photos and videos at any time",
    },
    {
      image: "/images/faceit.png",
      title: "Faceit",
      text: "Get to meet your favorite internet superstar with the faceit app.",
    },
    {
      image: "/images/todo.png",
      title: "Todo",
      text: "A todo app that features cloud sync with light and dark mode.",
    },
    {
      image: "/images/loopstudios.png",
      title: "LoopStudios",
      text: "Virtual reality technology with this mobile application made for Loopstudios.",
    },
  ];

  return <CardGrid cards={cards} />;
};

export { AppGrid };
