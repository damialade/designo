import React from "react";
import "./styles/globals.scss";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Designo</title>
        <meta
          name="description"
          content="Designo is a seven-pager single-app showcasing design and typography strength"
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />

        <meta name="theme-color" content="#ffffff" />

        {/* Link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "Jost, sans-serif" }}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
