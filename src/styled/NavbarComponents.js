import React from "react";
import styled from "styled-components";
import color from "./utility";
import {Link } from 'react-router-dom';
const style = {
  visible: `
   opacity:1;
   animation:show 2s;
   height:calc(100% - 60px);
    top: 60px;
  
  `,
  toggle: `
        background:rgba(255, 255, 255, 0);
        &:after{
         transform: rotate(-45deg) translate(3px,-3px);
        }
        &:before{
         
         transform: rotate(45deg) translate(3px,3px);
        }
        
   `
};
const NavContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px white;
  background: ${color.primary};
`;
const NavMenu = styled.div`
  justify-content: center;
  height: inherit;
`;
const NavList = styled.ul`
  height: inherit;
  display: flex;
  padding: 0;
  margin:0;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    background: #2a94fc;
    opacity: 0;
    top: 0;
    left: 0;
    height: 0;
    margin: 0;
    padding: 2rem;

    transition: 300ms;
    ${({ visible }) => visible && style.visible};
  }
`;
const NavElement = styled.li`
  display: flex;
  height: inherit;
  @media (max-width: 768px) {
    height: 50px;
    width: 100%;
  }
`;
const NavLink = styled(Link)`
  width: 100px;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration:none;
  z-index: 0;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    transition: all 0.3s;
    background: white;
  }
  &:hover {
    color: ${color.primary};
    cursor: pointer;
  }
  &:hover:before {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 100%;
  }
`;

const NavToggle = styled.a`
  height: inherit;
  position: relative;
  display: none;
  width: 34px;
  height: 34px;
  cursor: pointer;
  transition: 0.3s;
  border: solid 1px white;
  border-radius: 4px;
  &:hover {
    > span:after {
      top: 5px;
    }
    > span:before {
      top: -5px;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const BtnToggle = styled.span`
  display: block;
  width: 15px;
  height: 1px;
  position: absolute;
  background: #ffffff;
  white-space: nowrap;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.585, -0.6, 0.43, 1.65);
  transition: all ease 0.3s;
  top: 16px;
  left: 50%;
  right: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  &:after,
  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 15px;
    height: 1px;
    transition: all ease 0.3s;
    outline: 1px solid transparent;
    left: 0;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.585, -0.6, 0.43, 1.65);
    background: white;
  }
  &:after {
    top: 4px;
  }
  &:before {
    top: -4px;
  }
  ${({ toggle }) => toggle && style.toggle};
`;

export {
  NavContainer,
  NavMenu,
  NavList,
  NavElement,
  NavLink,
  NavToggle,
  BtnToggle
};