import React from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import ScrollToTop from "../common/scroll/ScrollToTop";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Body />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default Home;
