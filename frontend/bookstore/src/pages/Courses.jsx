import React from "react";
import list from "../../public/list.json";
import {Link} from "react-router-dom"
import Cards from "./Cards";
function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="justify-center text-center item-center pt-28">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            This course provides a clear introduction to the subject, combining
            theory with practical examples. Learners will build a solid
            foundation, explore key concepts step by step, and apply their
            knowledge through interactive activities. By the end, participants
            will gain both understanding and confidence to use their skills in
            real-world situation.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item)=>(
           <Cards  item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Courses;
