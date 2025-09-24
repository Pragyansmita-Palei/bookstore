import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Signup from '../pages/Signup'
function Signups() {
  return (
    <>
     <div className="overflow-x-hidden">
      <Navbar />
   <div className='min-h-screen'>     
      <Signup />
    </div>
    <Footer />

     </div>
    
    </>
  )
}

export default Signups