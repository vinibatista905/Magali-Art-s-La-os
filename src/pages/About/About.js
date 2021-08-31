import React from "react";
import { homeObjTwo, homeObjThree } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <Products />
      <InfoSection {...homeObjThree} />
      
    </>
  );
}

export default Home;
