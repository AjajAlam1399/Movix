import React from "react";

import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";

import Trending from "./trending/Trending";

import Popular from "./popular/Popular";

import TopRated from "./topRated/TopRated";

function Home() {
  return (
    <div className="HomePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{ height: "1000px" }}></div> */}
    </div>
  );
}

export default Home;
