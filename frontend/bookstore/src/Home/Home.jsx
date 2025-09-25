import React from 'react'
import Banner from '../pages/Banner';
import Freebook from '../pages/Freebook';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Freebook />
    <Footer />
    </>
  )
}

export default Home