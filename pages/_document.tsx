import { Html, Head, Main, NextScript } from "next/document";

import React from "react";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-raleway">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
