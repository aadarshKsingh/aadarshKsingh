import './App.css';
import Navigation from './Components/NavBar';
import Background from './Components/Background';
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import AboutMe from  './Pages/AboutMe';
import { Route, Routes } from 'react-router-dom';
import Socials from './Pages/Socials';
import Thoughts from './Pages/Thoughts';
import Dump from './Pages/Dump';
import SinglePost from './Pages/SinglePost'

function App() { 
  return (
    <BrowserRouter>
    <Background/>
    <Navigation/>
    <Routes>
        <Route path='/' element={<AboutMe/>}/>
          <Route path='/Socials' element={<Socials/>}/>
          <Route path='/Thoughts' element={<Thoughts/>}/>
          <Route path='/Thoughts/:slug' element={<SinglePost/>}/>
          <Route path='/Dump' element={<Dump/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
