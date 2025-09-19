import React from 'react'
import Home from './Home/Home'
import {  Routes, Route } from "react-router-dom";
import Course from "./Course/Course"
import Signup from './pages/Signup';
import Login from './pages/login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>


      </Routes>
    </>
    
  )
}

export default App