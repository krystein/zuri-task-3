import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import LoginButton from "../loginButton";
import LogoutButton from "../logoutButton";

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #000;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;


const NavBtn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 20px;
  button {
    background-color: #4c7fb5;
    border: 2px solid #4c7fb5;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    color: #fff;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: #4c7fb5;
      transform: scale(1.05);
      border: #4c7fb5;
      color: #fff;
      font-weight: 800;
    }
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {

  return (
    <nav>
      <MenuBar onClick={toggle} />
      <NavMenu>
        <div>
          <h1>WELCOME TO GALLERY</h1>
        </div>
      </NavMenu>
        <NavBtn className="btn">
          <LoginButton/>
          <LogoutButton />
        </NavBtn>
    </nav>
  );
};

export default Navbar;
