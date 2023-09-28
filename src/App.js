import './App.css';
import Navigation from './Components/NavBar';
import Background from './Components/Background';
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import AboutMe from  './Pages/AboutMe';
import { Route, Routes } from 'react-router-dom';
import Socials from './Pages/Socials';

function App() { 
  return (
    <BrowserRouter>
    <Background/>
    <Navigation/>
    <Routes>
        <Route path='/' element={<AboutMe/>}/>
          <Route path='/Socials' element={<Socials/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
