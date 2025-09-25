import React from 'react'
import Home from './Home/Home'
import { Navigate, Routes, Route } from "react-router-dom";
import Course from "./Course/Course"
import Signups from './Signup/Signups';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
import Contacts from './Conatct/Contacts';
import Aboutus from './Aboutus/Aboutus';
import Login from './pages/Login';

function App() {
   const [authUser,setAuthUser]=useAuth()
    console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup" />}/>
        <Route path="/signup" element={<Signups />}/>
        <Route path="/login" element={<Login />}/>
        <Route path ="/contact" element={<Contacts />}/>
        <Route path ="/about" element={<Aboutus />}/>
      </Routes>
      <Toaster />
    </>
    
  )
}

export default App