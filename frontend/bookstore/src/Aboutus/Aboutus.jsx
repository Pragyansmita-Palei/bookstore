import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import About from '../pages/About'
function Aboutus() {
  return (
   <>
     <Navbar />
     <div className='min-h-screen'>     
      <About />
    </div>
     <Footer />
    </>
  )
}

export default Aboutus