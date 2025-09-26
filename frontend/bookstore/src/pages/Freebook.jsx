import React from 'react'
// import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Freebook() {
   const[book,setbook] = useState([])
   const [isMobile, setIsMobile] = useState(false);

  useEffect (()=>{
    axios.get(https://bookstore-ru35.onrender.com/api/V1/book/get)
    .then((res)=>{
      const freebook = res.data.book.filter((book)=>book.category ==="free");
     setbook(freebook);
    })
    .catch(err =>console.log(err));
  },[]);

useEffect(() => {
  const checkScreen = () => setIsMobile(window.innerWidth < 768);
  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: isMobile ? 1 : 3,
  slidesToScroll: 1
}
  // console.log(filterdata);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl'>free offered courses</h1>
      <p>Explore our free courses and start learning without any cost</p>
      </div>
    <div>
       <Slider {...settings}>
        {book.map((item)=>(
          <Cards item ={item} key={item.id} />
        ))}
      </Slider>
    </div>
        </div>

    </>
  )
}

export default Freebook
