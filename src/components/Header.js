import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Collapse
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
      <div>
        <Navbar
          light
          color='light'
          id='homeNav'
          className='navbar fixed-top navbar-expand-md navbar-light bg-white scrolling-navbar'
        >
          <div id='mainNavbar' className='container-fluid'>
            <NavbarBrand className='mr-auto' href='/'>
              <img
                src='./assets/images/logo.png'
                height='75'
                width='75'
                alt='Truthreads Logo'
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='ml-auto'>
                <NavItem>
                  <NavLink exact className='nav-link active' to='/'>
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
                  <NavHashLink className='nav-link' to='/#contactForm'>
                    Contact
                  </NavHashLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
