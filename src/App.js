import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import Registration from './Components/Login/Registration/Registration';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Registration/>
      <Login/>
    </div>
  );
}

export default App;
