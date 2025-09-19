import React from 'react'
import Banner from '../pages/Banner';
import Freebook from '../pages/Freebook';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
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