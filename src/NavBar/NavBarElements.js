import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #800080;
  height: 70px;
  display: flex;
  border-radius: 5px;
  margin: 8px;
  justify-content: flex-end ;
  // padding: 0.7rem calc((100vw - 1000px) / 2);
  box-shadow: 5px 3px 5px 3px rgb(0, 0, 0);
  border: 2px solid black;
  padding: 1rem ;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #000000;
  background-color: #f46505;
  border: 2px solid black;
  box-shadow: 2px 2px 2px 1px black;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding 1rem 2rem 1rem;
  height: 100%;
  margin-right: 1rem;
  
  border-radius: 4px;
  cursor: pointer;
  
  &.active {
    color: #000000;
    background-color #d865c9;
    padding inline: 2px 2px;

  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items; center;
  // margin-right: -24px;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #800080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
