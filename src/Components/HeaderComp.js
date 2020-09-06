import React, { Component } from "react";
import { Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, Collapse } from "reactstrap";

class HeaderComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };
  render() {
    return (
      <>
        <Nav id="homeNav" className="navbar navbar-expand-md navbar-light bg-white sticky-top">
          <div id="mainNavbar" className="container-fluid">
            <NavbarBrand className="mr-auto" href="/">
              <img src="./assets/images/logo.png" height="75" width="75" alt="Truthreads Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <ul className="navbar-nav ml-auto">
                <li className="active nav-item">Home</li>
                <li className="nav-item">About Us</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Shop</li>
                <li className="nav-item">Contact</li>
              </ul>
            </Collapse>
          </div>
        </Nav>
      </>
    );
  }
}

export default HeaderComp;
