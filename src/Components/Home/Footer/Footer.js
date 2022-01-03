import React from 'react';
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <img src="./logo1.png"
                                width="200"
                                height="80"
                                className="d-inline-block align-top" alt="B2Me logo" />
                            <p>BTOMe is one of the favorite shop for you, because we ensure quality and quick service.</p>
                            <div className='py-2 social-media'>
                                <p>
                                    <a href="https://www.facebook.com/"
                                        target="_blank" rel="noreferrer" className=''>
                                        <FontAwesomeIcon className="me-3 fs-4" icon={faFacebookF} size='2x' />
                                    </a>
                                    <a href="https://twitter.com/"
                                        target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-3 fs-4" icon={faTwitter} size='2x' />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-3 fs-4" icon={faLinkedin} size='2x' />
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="mx-3 fs-4" icon={faYoutube} size='2x' />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="ms-3 fs-4" icon={faInstagram} size='2x' />
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4>Payment</h4>
                        </div>
                        <div className="col-3">
                            <h4>Payment</h4>
                        </div>
                        <div className="col-3">
                            <h4>Payment</h4>
                            <p>You can use our fastest payment system with following services</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p>Copyright - &copy;{new Date().getFullYear()} All right reserved || <strong>- BTOMe</strong> </p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;