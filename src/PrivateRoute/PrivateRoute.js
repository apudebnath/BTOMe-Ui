import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import UseFirebaseAuth from '../customhook/UseFirebaseAuth.js';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({children}) => {

    const {user,isLoading} = UseFirebaseAuth();    
    let location = useLocation();   

    const CircularProgressStyle={
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
       
  }

    if(isLoading) {
      return (
        <CircularProgress style={CircularProgressStyle}/>
      )
    }

    if(!user.email) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;

};

export default PrivateRoute;