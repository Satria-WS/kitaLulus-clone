/** @jsxImportSource @emotion/react */
import { Global ,css } from '@emotion/react';
import React, { Fragment } from "react";
import Topic from "./components/Topic/Topic";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";


function App() {
  const globalStyles = css`
    html {
      scroll-behavior: smooth;
    }
  `;
  return (
    <Fragment>
      <Global styles={globalStyles} />
        <Header />
        <Hero />
        <Topic />
     
    </Fragment>
  );
}

export default App;
