import React from "react";
import banner from "../../public/banner.jpg";

function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-20 items-center gap-8 px-6 md:px-16">
        <div>
          <img
            src={banner}
            className="w-full md:w-[400px] h-auto rounded-lg shadow-md mt-30 "
          ></img>
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We are passionate about delivering high-quality services that create
            real impact. Over the years, our diverse team of designers,
            developers, and strategists has thrived on collaboration,
            innovation, and continuous growth. Every project we take on is an
            opportunity to learn, improve, and deliver meaningful solutions that
            add value to our community, guided by feedback and a commitment to
            excellence.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
