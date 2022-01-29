import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc= "https://th.bing.com/th/id/OIP.hd18K1kBcZlXLlOsaAQBwQHaFm?pid=ImgDet&rs=1"
        visit="/Contact"
        btnname="Contact now"
      />
    </>
  );
};

export default About;
