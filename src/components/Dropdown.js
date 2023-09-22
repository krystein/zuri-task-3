import React from "react";
import styled from "styled-components";
import {  FaTimes } from "react-icons/fa";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70vh;
  background: #08111c;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-110%")};
  bottom: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cusrsor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;



const BtnWarp = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  button {
    background-color: #4c7fb5;
    border: 2px solid #4c7fb5;
    border-radius: 8px;
    height: 40px;
    width: 200px;
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
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
        <BtnWarp>
        <div className="btn">
            <LoginButton/>
          <LogoutButton />
            </div>
            </BtnWarp>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
