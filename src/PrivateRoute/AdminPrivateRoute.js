import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import UseFirebaseAuth from '../customhook/UseFirebaseAuth';

const AdminPrivateRoute = ({children}) => {
    const {admin,adminLoading} = UseFirebaseAuth();
    console.log(admin);    
    const location = useLocation();   

    const CircularProgressStyle={
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
       
  }

    if(adminLoading) {
      return (
        <CircularProgress style={CircularProgressStyle}/>
      )
    }

    if(!admin.isAdmin) {
      return <Navigate to="/dashboard" state={{ from: location }} />;
    }
    return children;
};

export default AdminPrivateRoute;