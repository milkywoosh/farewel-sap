import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/people" activestyle="true">
            People
          </NavLink>
          <NavLink to="/about" activestyle="true">
            About
          </NavLink>
         
        </NavMenu>
   
      </Nav>
    </>
  );
};

export default Navbar;
