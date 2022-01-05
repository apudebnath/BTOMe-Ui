import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import Footer from '../Home/Footer/Footer';

const About = () => {
    return (
        <div className='text-center pt-5 mt-5 bg-light'>
            <div>
                <img className='h-25 w-100' src="https://i.ibb.co/7R56G9m/image.png" alt="" />
            </div>

            {/* Description part */}
            <div className='py-5'>
                <div>
                    <h2 className='border-bottom border-dark d-inline '> About</h2>
                    <h6 className='py-3'>
                        <Link className="text-decoration-none text-black" to='/'> Home</Link>
                        <FontAwesomeIcon className="mx-2" icon={faGreaterThan} size="xs" />
                        <span className="text-secondary"> About </span>
                    </h6>
                </div>
                <Container>
                    <Row className="d-flex align-items-center justify-content-md-center py-5">
                        <Col xs='12' md='6' lg="6">
                            <img className='w-75' src="https://i.ibb.co/2y66jqn/image.png" alt="" />
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

                    {/* Team part  */}
                    <div className='py-5'>
                        <h4>Meet Our Team</h4>
                        <p>
                            A perfect blend of creativity and technical wizardry
                            The best people fomula for great websites!
                        </p>
                    </div>
                    <Row xs={1} sm={2} md={4}>

                        <div>
                            <img className='h-50' src="https://i.ibb.co/0GbX4w0/image.png" alt="" />
                            <p className='pt-3'>
                                <b> Mark Jance </b> <br />
                                <i> CEO / FOUNDER </i>
                            </p>
                            <SocialMedia />
                        </div>

                        <div>
                            <img className='h-50' src="https://i.ibb.co/hcDHKb6/team5-1.jpg" alt="" />
                            <p className='pt-3'>
                                <b> Frank Greer </b> <br />
                                <i> Operations </i>
                            </p>
                            <SocialMedia />
                        </div>

                        <div>
                            <img className='h-50' src="https://i.ibb.co/pvs0XsM/image.png" alt="" />
                            <p className='pt-3'>
                                <b> Perry Conner </b> <br />
                                <i> Marketing Personal </i>
                            </p>
                            <SocialMedia />
                        </div>

                        <div>
                            <img className='h-50' src="https://i.ibb.co/VYMPpXF/team6.jpg" alt="" />
                            <p className='pt-3'>
                                <b> Mark Tucker </b> <br />
                                <i> Partner </i>
                            </p>
                            <SocialMedia />
                        </div>

                    </Row>
                </Container>
            </div>
            {/* brand logo part */}
            <div>
                <Row xs={2} sm={2} md={6} lg={6} className=''>
                    <img className='brand-logo' src="https://i.ibb.co/qjzvWPH/image.png" alt="" />
                    <img className='brand-logo' src="https://i.ibb.co/ZXVFKyb/image.png" alt="" />
                    <img className='brand-logo' src="https://i.ibb.co/ZVwtsk4/image.png" alt="" />
                    <img className='brand-logo' src="https://i.ibb.co/N3YVRcn/image.png" alt="" />
                    <img className='brand-logo' src="https://i.ibb.co/CHpZ4rQ/image.png" alt="" />
                    <img className='brand-logo' src="https://i.ibb.co/qyf7y1Q/image.png" alt="" />
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default About;