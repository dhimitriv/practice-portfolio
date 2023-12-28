import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div name="hero" className="w-full h-screen pl-3 bg-[#064d50]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-blue-500">Hello! My name is</p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#ccd6f6] max-w-[280px] sm:max-w-[500px] border-b-2 inline border-blue-500 pb-[2px] ">
          Dhimitri Vinçani
        </h1>
        <h2 className="text-3xl sm:text-5xl font-thin text-[#b7c6f8] ">
          I am a Frontend Developer
        </h2>
        <p className="py-5 max-w-[600px] text-[#b7c6f8]">
          An enthusiastic Web Developer, with passion for details and beautiful
          design.
        </p>
        <div>
          <Link to="aboutme" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800 group">
              My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
