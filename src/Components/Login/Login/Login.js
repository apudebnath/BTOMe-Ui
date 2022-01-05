import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../images/reg1.jpg';
import Footer from '../../Home/Footer/Footer';
import UseFirebaseAuth from '../../../customhook/UseFirebaseAuth';

const Login = () => {

  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const { user, login, authError, isLoading } = UseFirebaseAuth();

  const handleLoginForm = e => {
    e.preventDefault();
    const { userEmail, password } = loginData;
    login(userEmail, password, navigate, location);
  }

  const handleLoginInput = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegistionData = { ...loginData };
    newRegistionData[field] = value;
    setLoginData(newRegistionData);
  }


  return (
    <>
      <div className='text-center container pt-5 mt-5'>
        <h2>Login</h2>
        <div className='row py-4 d-flex justify-content-center align-items-center'>
          <div className='col-md-6 col-12'>
            <img className='w-100 h-75' style={{ objectFit: 'cover' }} src={image} alt="" />
          </div>
          <div className='col-md-6 col-12 text-center d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleLoginForm}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="userEmail"
                  onInput={handleLoginInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onInput={handleLoginInput}
                />
              </Form.Group>

              {/* showing error/succuss massage  */}
              <div className="d-flex justify-content-between">
                <div className="fw-bold">

                  {isLoading && <Spinner animation="grow" variant="dark" />}

                  {user?.email && <Alert variant={'success'}>Login successful!</Alert>}

                  {authError && <Alert variant={'danger'}> {authError} </Alert>}
                </div>
              </div>

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