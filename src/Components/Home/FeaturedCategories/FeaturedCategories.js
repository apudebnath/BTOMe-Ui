import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./FeaturedCategories.css"
const FeaturedCategories = () => {
    return (
        <div >
            <div className="text-center mt-5 pt-5">
                <p className="pt-5">B2Me COLLECTIONS</p>
                <h3>FEATURED CATEGORIES</h3>
                <p>BTOMe is a trusted and powerful eCommerce store for all.</p>
            </div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="img-hover-zoom"> <img src="https://i.ibb.co/fp1GQCf/category-Furniture.jpg" className="w-100" alt="" /></div>
                        <div className="text-start ">
                            <h4>Furniture</h4>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://i.ibb.co/NjwZrGX/category-Clock.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4> Clocks</h4>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://i.ibb.co/grcMkyy/category-Light.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Lighting</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://i.ibb.co/HY9zc4v/categortoy.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Jewelry</h4>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://i.ibb.co/qnX0gyC/category-Skincare.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Skin Care</h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default FeaturedCategories;