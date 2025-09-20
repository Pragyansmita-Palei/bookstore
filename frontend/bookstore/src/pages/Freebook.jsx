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
  useEffect (()=>{
    axios.get("http://localhost:8080/api/V1/book/get")
    .then((res)=>{
      const freebook = res.data.book.filter((book)=>book.category ==="free");
     setbook(freebook);
    })
    .catch(err =>console.log(err));
  },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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