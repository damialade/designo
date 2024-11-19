import React from "react";
import { CardGrid } from "../../atoms/cardGrid";

const WebGrid = () => {
  const cards = [
    {
      image: "/images/express.png",
      title: "Express",
      text: "A multi-carrier shipping website for ecommerce businesses.",
    },
    {
      image: "/images/transfer.png",
      title: "Transfer",
      text: "Site for low-cost money transfers and sending money within seconds.",
    },
    {
      image: "/images/photon.png",
      title: "Photon",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects.",
    },
    {
      image: "/images/builder.png",
      title: "Builder",
      text: " Connects users with local contractors based on their location.",
    },
    {
      image: "/images/blogr.png",
      title: "BlogR",
      text: " Blogr is a platform for creating an online blog or publication",
    },
    {
      image: "/images/camp.png",
      title: "Camp",
      text: "Get expert training in coding, data, design, and digital marketing",
    },
  ];

  return <CardGrid cards={cards} />;
};

export { WebGrid };
