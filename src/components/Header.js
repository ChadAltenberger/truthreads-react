import React, { Component, useEffect } from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Collapse
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
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
        <Nav
          navbar
          id='homeNav'
          className='navbar navbar-expand-md navbar-light bg-white sticky-top'
        >
          <div id='mainNavbar' className='container-fluid'>
            <NavbarBrand className='mr-auto' href='home'>
              <img
                src='./assets/images/logo.png'
                height='75'
                width='75'
                alt='Truthreads Logo'
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Navbar className='ml-auto'>
                <NavItem>
                  <NavLink className='nav-link active' to='home'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/about-us'>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/services'>
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/featured'>
                    Featured
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='home/#contact'>
                    Contact
                  </NavLink>
                </NavItem>
              </Navbar>
            </Collapse>
          </div>
        </Nav>
      </>
    );
  }
}

export default Header;
