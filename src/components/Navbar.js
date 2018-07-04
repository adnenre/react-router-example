import React, { Component } from "react";

import {
  NavContainer,
  NavMenu,
  NavList,
  NavElement,
  NavLink,
  NavToggle,
  BtnToggle
} from "../styled/NavbarComponents";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ visible: !this.state.visible, toggle: !this.state.toggle });
  }
  render() {
    return (
      <NavContainer>
        <NavMenu>
          <NavList visible={this.state.visible}>
            <NavElement>
              <NavLink to="/" onClick={this.handleClick}>home</NavLink>
            </NavElement>
            <NavElement>
              <NavLink to="/Blog" onClick={this.handleClick}>blog  </NavLink>
            </NavElement>
          </NavList>
        </NavMenu>
        <NavToggle onClick={this.handleClick}>
          <BtnToggle toggle={this.state.toggle} />
        </NavToggle>
      </NavContainer>
    );
  }
}

export default Navbar;
