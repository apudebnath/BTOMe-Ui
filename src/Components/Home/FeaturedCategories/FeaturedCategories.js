import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <div className="img-hover-zoom"> <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/furniture10_2-430x490.jpg.webp" className="w-100" alt="" /></div>
                        <div className="text-start ">
                            <h4>Furniture</h4>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/03/clock12_1.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4> Clocks</h4>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/light4.-700x800.jpg.webp" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Lighting</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/toys10_3-430x490.jpg" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Toys</h4>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="img-hover-zoom">
                                    <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/cooking12_2-700x800.jpg.webp" className="w-100" alt="" />
                                </div>
                                <div className="text-start ">
                                    <h4>Accessories</h4>
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