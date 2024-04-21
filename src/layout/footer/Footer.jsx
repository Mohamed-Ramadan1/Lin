import React from "react";
import TopContent from "./TopContent";
import ButtomContent from "./ButtomContent";

const Footer = () => {
  return (
        <>
        <TopContent />
       <ButtomContent />
       </>
  )
}
=======
import TopContent from "./TopContent";
const Footer = () => {
  return <TopContent></TopContent>;
};


export default Footer;
