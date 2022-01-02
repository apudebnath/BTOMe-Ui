import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='bg-light'>
            <div>
                <img className='h-25 w-100' src="https://i.ibb.co/7R56G9m/image.png" alt="" />
            </div>
            <h2 className='py-5'>About</h2>
            <div className='py-5'>
                <Container>
                    <Row className="d-flex align-items-center justify-content-md-center g-5">
                        <Col xs='12' md='6' lg="6">
                            <img src="https://i.ibb.co/2y66jqn/image.png" alt="" />
                        </Col>
                        <Col xs='12' md='6' lg="6" className='text-start ps-5'>
                            <h4>Who we are</h4>
                            <p>
                                We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss.
                            </p>
                            <p>
                                Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes – and we’re committed to providing all sizes at the same price
                            </p>
                        </Col>
                    </Row>
                    <div className='py-5'>
                        <h4>Meet Our Team</h4>
                        <p>
                            A perfect blend of creativity and technical wizardry
                            The best people fomula for great websites!
                        </p>
                    </div>
                    <Row xs={1} sm={2} md={3}>
                        <div>
                            <img src="https://i.ibb.co/hcDHKb6/team5-1.jpg" alt="" />
                            <p className='py-3'>
                                <b> Frank Greer </b> <br />
                                <i> Operations </i>
                            </p>
                        </div>

                        <div>
                            <img src="https://i.ibb.co/pvs0XsM/image.png" alt="" />
                            <p className='py-3'>
                                <b> Perry Conner </b> <br />
                                <i> Marketing Personal </i>
                            </p>
                        </div>

                        <div>
                            <img src="https://i.ibb.co/VYMPpXF/team6.jpg" alt="" />
                            <p className='py-3'>
                                <b> Mark Tucker </b> <br />
                                <i> Partner </i>
                            </p>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;