import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <div className='body bg-light'>
            <div>
                <img className='h-25 w-100' src="https://i.ibb.co/7R56G9m/image.png" alt="" />
            </div>

            {/* Contact Us part */}
            <div className='py-5'>
                <div>
                    <h2 className='border-bottom border-dark d-inline '> Contact Us</h2>
                    <h6 className='py-3'>
                        <Link className="text-decoration-none text-black" to='/'> Home</Link>
                        <FontAwesomeIcon className="mx-2" icon={faGreaterThan} size="xs" />
                        <span className="text-secondary"> Contact Us </span>
                    </h6>
                </div>
                <Container className='text-start'>
                    <Row xs={1} sm={1} md={2} className='d-flex align-items-top justify-content-md-center g-5'>
                        <Col>
                            <p>INFORMATION QUESTIONS</p>
                            <h3 className='pb-3'>FREQUENTLY ASKED QUESTIONS</h3>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='bg-light'>Will I receive the same product that I see in the picture?</Accordion.Header>
                                    <Accordion.Body>

                                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.

                                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Where can I view my sales receipt?</Accordion.Header>
                                    <Accordion.Body>

                                        A vel dui a conubia vestibulum class varius vel nunc a gravida ut maecenas quisque a proin condimentum sagittis class at faucibus primis parturient dolor scelerisque himenaeos.

                                        A et ullamcorper vestibulum netus a mauris ac consectetur libero volutpat congue congue turpis a consectetur adipiscing sit.Suspendisse leo fringilla a congue tempus nisi conubia vestibulum a in posuere accumsan.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How can I return an item?</Accordion.Header>
                                    <Accordion.Body>

                                        Sit rhoncus aptent dis scelerisque penatibus a dis tempor accumsan suspendisse mollis a et odio ullamcorper magnis ullamcorper cum ullamcorper duis nulla egestas massa.

                                        Vitae amet nostra est leo dignissim justo sodales et ac a conubia bibendum duis ad justo suspendisse a a tellus cubilia vestibulum a dictumst a duis risus.Sociosqu curae consequat nisl litora a eros est consectetur nulla rhoncus a a id felis praesent.Tempus dui integer a cursus id fames parturient.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> Will you restock items indicated as “out of stock?”</Accordion.Header>
                                    <Accordion.Body>

                                        Scelerisque parturient sagittis nisi in aliquam dui scelerisque non consectetur aptent hac adipiscing ullamcorper pulvinar sit vestibulum purus facilisi hendrerit mus nisl massa ut parturient consectetur cum justo fames torquent.

                                        Ac curae aliquet vivamus aptent duis congue urna venenatis ridiculus faucibus tincidunt a lorem rutrum nullam potenti adipiscing.Adipiscing.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                        <Col className='pt-3'>
                            <h3 className='pb-1'>Send Us Your Message</h3>
                            <hr />
                            <form action="">
                                <div className="form-group">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            className="form-control"
                                            type="text"
                                            name="from_name"
                                            placeholder="Name"
                                            required
                                        />
                                    </FloatingLabel>
                                </div>

                                <div className="form-group">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Your Email"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            className="form-control"
                                            type="email"
                                            name="reply_to"
                                            placeholder="Your email"
                                            required
                                        />
                                    </FloatingLabel>
                                </div>

                                <div className="form-group">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Your Message"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            className="form-control"
                                            type="text"
                                            name="message"
                                            required
                                            placeholder="Your Message"
                                            style={{ height: '170px' }}
                                        />
                                    </FloatingLabel>
                                </div>

                                <div className="d-grid mt-2">
                                    <input
                                        className="fw-bold btn-outline-dark rounded-3 py-2"
                                        type="submit"
                                        value="Send"
                                    />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='text-start py-5'>
                <Container>
                    <Row xs={1} sm={1} md={2} className='d-flex align-items-top justify-content-md-center g-5 my-5'>
                        <Col className=''>
                            <iframe title='B2Me' width="524" height="408" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=524&amp;height=408&amp;hl=en&amp;q=Mirpur%20Dhaka+(B2Me)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.com/en/info/covid-19'>Corona Virus facts</a>
                        </Col>

                        <Col className=''>
                            <h5>Get In Touch</h5>

                            {/* social media icons  */}
                            <div className='py-2 social-media'>
                                <p>
                                    <a href="https://www.facebook.com/"
                                        target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-2" icon={faFacebookF} size='2x' />
                                    </a>
                                    <a href="https://twitter.com/"
                                        target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-2" icon={faTwitter} size='2x' />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-2" icon={faLinkedin} size='2x' />
                                    </a>
                                </p>
                            </div>

                            <h5> Where We Are? </h5>
                            <p>
                                Block: B, H:08, Road No. 06, Mirpur Section 6, Dhaka – North <br />
                                Phone: +88-031-656570, Mobile: +88-013-656570
                            </p>

                            <h5> SHOP HOURS </h5>
                            <p>
                                Monday-Saturday 11am-7pm <br />
                                Sunday 11am-6pm
                            </p>

                            <h5> SPECIALIST HOURS </h5>
                            <p>
                                Monday-Friday 9am-5pm
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;