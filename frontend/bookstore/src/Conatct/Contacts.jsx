import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Contact from '../pages/Contact'
function Contacts() {
  return (
    <>
     <Navbar />
     <div className='min-h-screen'>     
      <Contact />
    </div>
     <Footer />
    </>
  )
}

export default Contacts