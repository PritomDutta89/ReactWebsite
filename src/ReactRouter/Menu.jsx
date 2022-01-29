import React from "react";
import { NavLink } from "react-router-dom";
// import "./index.css";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About Us 
        </NavLink>
        <br />
        <NavLink activeClassName="active_classs" to="/Contact">
          Contact Us
        </NavLink>
        <br />
        <NavLink activeClassName="active_classp" to="/Service">
          Services
        </NavLink>
        <NavLink activeClassName="active_classp" to="/Search">
          Search
        </NavLink>
        <br />
        <NavLink activeClassName="active_classp" to="/UseParam/pritom/ Dutta">
           UseParam
        </NavLink>

        {/* <br /> */}
        {/* <a href="/">About Us</a>
            <a href="/Contact">Contact Us</a> */}
      </div>
    </>
  );
};

export default Menu;
