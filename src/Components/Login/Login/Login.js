import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import image from '../../../images/reg1.jpg';
import Footer from '../../Home/Footer/Footer';

const Login = () => {
  return (
    <>
      <div className='container pt-5 mt-5'>
        <h2>Login</h2>
        <div className='row py-4 d-flex justify-content-center align-items-center'>
          <div className='col-md-6 col-12'>
            <img className='w-100 h-75' style={{ objectFit: 'cover' }} src={image} alt="" />
          </div>
          <div className='col-md-6 col-12 text-center d-flex justify-content-center align-items-center'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button className='px-5' variant="light" type="submit" className="w-100 fw-bold mx-auto btn-outline-dark">
                Login
              </Button>
              <br /><br />
              <Button className='px-5' variant="light" type="submit" className="w-100 fw-bold mx-auto btn-outline-danger"><FontAwesomeIcon icon={faGoogle} /> Sign In With Google
              </Button>
              <Button as={Link} to="/registration" variant="white" type="submit" className="fw-bold mt-4 w-100 mx-auto">Don't have an account?
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;