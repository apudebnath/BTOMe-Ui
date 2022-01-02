import React from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/reg1.jpg';
const Login = () => {
    return (
        <div className='container py-5'>
            <h2>Login</h2>
            <div className='row py-4'>
                <div className='col-md-6 col-12'>
                    <img className='w-100 h-100' style={{objectFit: 'cover'}} src={image} alt="" />
                </div>
                <div className='col-md-6 col-12 text-center d-flex justify-content-center align-items-center'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
                          <Form.Check
                           label="New user? Please Register"></Form.Check>
                        </Form.Group>
                        <Button className='px-5' variant="primary" type="submit">
                          Login
                        </Button>
                        <br /><br />
                        <Button className='px-5' variant="primary" type="submit">
                          SignIn with Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;