import React from "react";
import "./style.css";
import {
  Nav,
  NavLink,
  NavMenu,
} from "./NavBarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}

        <NavMenu>
          <div id="sapLogo"> GOODBYE SAP</div>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/people" activestyle="true">
            Rekan
          </NavLink>
          <NavLink to="/about" activestyle="true">
            Ucapan
          </NavLink>
         
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
