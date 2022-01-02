import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./MenuBar.css"
const MenuBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <div className='row'>
                        <div className='col-6 '>
                            <Navbar.Brand href="#home" className="fw-bold fs-3"><img src="./logo1.png" className="w-50" alt="" /></Navbar.Brand>
                        </div>
                        <div className='col-6'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link to="home" className="me-2 fw-bold">Home</Nav.Link>
                                    <Nav.Link to="shop" className="me-2 fw-bold">Shop</Nav.Link>
                                    <Nav.Link to="blog" className="me-2 fw-bold">Blog</Nav.Link>
                                    <Nav.Link to="contact" className="me-2 fw-bold">Contact</Nav.Link>
                                    <Nav.Link to="about" className="me-2 fw-bold">About</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link to="deets" className="me-2 "><i className="fas fa-search"></i></Nav.Link>
                                    <Nav.Link to="memes" className="me-2 ">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Nav.Link>
                                    <Nav.Link to="user">
                                        <i className="fas fa-user"></i>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;