import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";

function MySkills() {
  return (
    <div
      name="mySkills"
      className="bg-[#064d50] w-full h-full pl-7 text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-semibold border-b-2 inline border-blue-500">
            My skills
          </p>
          <p className="py-4">Technologies</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img className="w-14 mx-auto my-1" src={HTML} alt="Icon of html" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img className="w-14 mx-auto my-1" src={CSS} alt="Icon of css" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img
              className="w-14 mx-auto my-1"
              src={JavaScript}
              alt="Icon of javascript"
            />
            <p className="py-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img
              className="w-14 mx-auto my-1"
              src={ReactImg}
              alt="Icon of react"
            />
            <p className="py-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img
              className="w-14 mx-auto my-1"
              src={Tailwind}
              alt="Icon of tailwind"
            />
            <p className="py-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#202020] hover:scale-110 duration-300">
            <img className="w-14 mx-auto my-1" src={GitHub} alt="Icon of git" />
            <p className="py-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
