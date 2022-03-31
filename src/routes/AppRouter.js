import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@material-ui/core';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import About  from '../components/About';
import TopBar from '../components/TopBar';
import Passwords from '../components/Passwords';



const AppRouter = () => {
  console.log('hola');
  return (
    <Router>
      <TopBar />
      <div className='flex'> 
        <NavBar />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/passwords' element={<Passwords />}></Route>
            </Routes>
          </div>
      </div>   
    </Router>
  )
}

export default AppRouter;

