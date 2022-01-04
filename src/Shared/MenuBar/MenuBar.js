import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const MenuBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-white" variant="light" fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src="./logo1.png"
                            width="180"
                            height="80"
                            className="d-inline-block align-top" alt="B2Me logo" />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="home" className="me-2 fw-bold">Home</Nav.Link>
                            <Nav.Link as={Link} to="shop" className="me-2 fw-bold">Shop</Nav.Link>
                            <Nav.Link as={Link} to="blog" className="me-2 fw-bold">Blog</Nav.Link>
                            <Nav.Link as={Link} to="contact" className="me-2 fw-bold">Contact</Nav.Link>
                            <Nav.Link as={Link} to="about" className="me-2 fw-bold">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="search" className="me-2">
                                <FontAwesomeIcon className="mx-2" icon={faSearch} size='1x' />
                            </Nav.Link>
                            <Nav.Link as={Link} to="cart" className="me-2 ">

                                <FontAwesomeIcon className="mx-2" icon={faShoppingCart} size='1x' />

                            </Nav.Link>
                            <Nav.Link as={Link} to="user">
                                <FontAwesomeIcon className="mx-2" icon={faUser} size='1x' />

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;