import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./MenuBar.css"
const MenuBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-3"><img src="./logo1.png" className="w-50" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="me-2 fw-bold">Home</Nav.Link>
                            <Nav.Link href="#shop" className="me-2 fw-bold">Shop</Nav.Link>
                            <Nav.Link href="#blog" className="me-2 fw-bold">Blog</Nav.Link>
                            <Nav.Link href="#contact" className="me-2 fw-bold">Contact</Nav.Link>
                            <Nav.Link href="#about" className="me-2 fw-bold">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="me-2 "><i className="fas fa-search"></i></Nav.Link>
                            <Nav.Link href="#memes" className="me-2 ">
                                <i className="fas fa-shopping-cart"></i>
                            </Nav.Link>
                            <Nav.Link href="#user">
                                <i className="fas fa-user"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;