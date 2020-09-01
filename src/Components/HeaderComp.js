import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Collapse,
} from "reactstrap";

class HeaderComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    };
    render() {
        return (
            <>
                <Navbar className="navbar navbar-expand-md navbar-light bg-white sticky-top">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="./assets/images/logo.png"
                                height="75"
                                width="75"
                                alt="Truthreads Logo"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem className="active">Home</NavItem>
                                <NavItem>About Us</NavItem>
                                <NavItem>Services</NavItem>
                                <NavItem>Shop</NavItem>
                                <NavItem>Contact</NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default HeaderComp;
