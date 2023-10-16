import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="image" src="./images/logo2.png" alt="logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.nav_bg_clr};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .image{
    width: 25rem;
    height: 7rem;
  }
`;
export default Header;
