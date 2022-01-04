import React, { useState } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../../images/reg1.jpg';
import Footer from '../../Home/Footer/Footer';
import { useLocation } from 'react-router-dom';
import UseFirebaseAuth from '../../../customhook/UseFirebaseAuth'

const Registration = () => {


  const [registrationData, setRegistrationData] = useState({});
    
    const navigate = useNavigate();
    const location = useLocation();     

    const {register} = UseFirebaseAuth();


    const handleRegistrationInput = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newRegistionData = { ...registrationData };
      newRegistionData[field] = value;
      setRegistrationData(newRegistionData);     
  }


    const handleRegistrationForm = e => {
        e.preventDefault();
        
        if(registrationData.password !== registrationData.confirmPassword) {            
            return;
        }
        else {
            const {userName,userEmail,userMobileNumber,password} = registrationData;
             register(userName,userEmail,userMobileNumber, password,navigate,location);
            console.log(registrationData)
             e.target.reset();
        } 
       
    }

 

    

  return (
    <>
      <div className='container pt-5 mt-5'>
        <h2>Registration</h2>
        <div className='row py-4 d-flex justify-content-center align-items-center'>
          <div className='col-md-6 col-12 text-center d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleRegistrationForm}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Name" name="userName" onInput={handleRegistrationInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name="userEmail" onInput={handleRegistrationInput}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="text" placeholder="Phone Number" name="userMobileNumber" onInput={handleRegistrationInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" onInput={handleRegistrationInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="confirmPassword" onInput={handleRegistrationInput}/>
              </Form.Group>

              <Button className='px-5' variant="light" type="submit" className="w-100 fw-bold mx-auto btn-outline-dark">
                Register
              </Button>
              <br /><br />             
              <Button as={Link} to="/login" variant="white" type="submit" className="fw-bold mt-4 w-100">Already have an account?
              </Button>
            </Form>
          </div>
          <div className='col-md-6 col-12'>
            <img className='w-100 h-75' style={{ objectFit: 'cover' }} src={image} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;