import React from "react";
import { homeObjThree } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <>
      <Products />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;
