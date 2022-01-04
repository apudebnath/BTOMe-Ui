import React from 'react';
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import master from '../../../images/masterCard.png';
import credit from '../../../images/creditCard.png';
import visa from '../../../images/visaCard.png';
import paypal from '../../../images/paypalCard.png';

const image = ('https://i.ibb.co/swwrG3J/footerbaner.jpg')
const backgroundB = {
    background: `url(${image})`,
    backgroundColor: 'rgba(1, 28, 38, 0.5)',
    backgroundBlendMode: 'multiply, luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const Footer = () => {
    return (
        <div style={backgroundB} className='bg-secondary pt-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <img src="./logo1.png"
                                    width="200"
                                    height="80"
                                    className="d-inline-block align-top bg-white rounded" alt="B2Me logo" />
                                <p className=' text-white pt-3'>BTOMe is one of the favorite shop for you, because we ensure quality and quick service.</p>
                                <div className='py-2 social-media'>
                                    <p className='bg-white px-2 py-2 rounded'>
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
                            <div className="col-12 col-md-3 text-white">
                                <h4 className='pb-3'>Help and Information</h4>
                                <p className='p-0 m-0'>Help and Contact Us</p>
                                <p className='p-0 m-0'>Returns and Refunds</p>
                                <p className='p-0 m-0'>Online Store</p>
                                <p className='p-0 m-0'>Terms and Conditions</p>
                                <p className='p-0 m-0'>Privacy Policy</p>
                            </div>
                            <div className="col-12 col-md-3 text-white">
                                <h4 className='pb-3'>Useful Links</h4>
                                <p className='p-0 m-0'>About Us</p>
                                <p className='p-0 m-0'>New Collection</p>
                                <p className='p-0 m-0'>Special Collection</p>
                                <p className='p-0 m-0'>Latest News</p>
                                <p className='p-0 m-0'>SiteMap</p>
                            </div>
                            <div className="col-12 col-md-3 text-white">
                                <h4 className='pb-2'>Payment</h4>
                                <p className='pb-2 m-0'>You can use our fastest and secure payment system with following services</p>
                                <div >
                                    <img src={master}
                                        width="40"
                                        height="25"
                                        className="d-inline-block align-top me-2" alt="B2Me logo" />
                                    <img src={credit}
                                        width="40"
                                        height="25"
                                        className="d-inline-block align-top me-1" alt="B2Me logo" />
                                    <img src={visa}
                                        width="40"
                                        height="25"
                                        className="d-inline-block align-top ms-1" alt="B2Me logo" />
                                    <img src={paypal}
                                        width="40"
                                        height="25"
                                        className="d-inline-block align-top ms-2" alt="B2Me logo" />
                                </div>
                                <div>
                                    <h5 className='pt-2'>Address</h5>
                                    <p className='p-0 m-0'>323/55 Shopping Street</p>
                                    <p className='p-0 m-0'>FarmHouse, Bangladesh.</p>
                                    <p className='p-0 m-0'>btome@gmail.com</p>
                                    <p className='p-0 m-0'>BTOMe.com</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='text-white' />
                    <div className="col-12 text-white">
                        <p>Copyright - &copy;{new Date().getFullYear()} All right reserved || <strong>- BTOMe</strong> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;