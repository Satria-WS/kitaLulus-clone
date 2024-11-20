import React, { Fragment } from "react";
import Topic from "./components/Topic/Topic";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero/>
      <Topic/>
    </Fragment>
  );
}

export default App;
