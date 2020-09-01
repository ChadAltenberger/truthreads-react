import React, { Component } from "react";
import { Navbar, Nav, NavbarToggler, NavbarBrand, NavItem } from "reactstrap";

class HeaderComp extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="./assets/images/logo.png"
                                height="75"
                                width="75"
                                alt="Truthreads Logo"
                            />
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>Home</NavItem>
                            <NavItem>Directory</NavItem>
                            <NavItem>About</NavItem>
                            <NavItem>Shop</NavItem>
                            <NavItem>Contact Us</NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default HeaderComp;
