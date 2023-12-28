import React from "react";
import Aksesore from "../assets/aksesore.jpg";
import Coffee1 from "../assets/coffee1.jpg";
import Photo7 from "../assets/photo7.jpg";
import Shop from "../assets/shop.jpg";

// import Cover from "../assets/cover.jpg";

function Projects() {
  return (
    <div
      name="projects"
      className="text-gray-300 w-full md:h-screen bg-[#064d50]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pl-7">
          <p className="text-4xl font-semibold border-b-2 inline border-blue-500">
            My projects
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${Aksesore})` }}
            className="shadow-lg shadow-[#202020] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex flex-col  items-center">
              <span className="text-2xl font-bold text-gray-800 tracking-wider">
                ABC New Mobile Shop
              </span>
              <p className="text-lg font-bold text-gray-800 tracking-wider">
                (HTML, CSS, JS)
              </p>
              <div className="pt-8 text-center">
                <a href="https://abc-mobile.netlify.app/">
                  <button className="text-center text-gray-800 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Take a look
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Coffee1})` }}
            className="shadow-lg shadow-[#202020] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex flex-col  items-center">
              <span className="text-2xl font-bold text-gray-800 tracking-wider">
                Coffee shop project
              </span>
              <p className="text-lg font-bold text-gray-800 tracking-wider">
                (HTML, CSS, JS)
              </p>
              <div className="pt-8 text-center">
                <a href="https://coffeeshop-abc.netlify.app/">
                  <button className="text-center text-gray-800 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Take a look
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Shop})` }}
            className="shadow-lg shadow-[#202020] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex flex-col  items-center">
              <span className="text-2xl font-bold text-gray-800 tracking-wider">
                The Shopping application
              </span>
              <p className="text-lg font-bold text-gray-800 tracking-wider">
                (REACT, TAILWIND)
              </p>
              <div className="pt-8 text-center">
                <a href="https://shopping-app-dhimivi1.netlify.app/">
                  <button className="text-center text-gray-800 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Take a look
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Photo7})` }}
            className="shadow-lg shadow-[#202020] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex flex-col  items-center">
              <span className="text-2xl font-bold text-gray-800 tracking-wider">
                Football Quiz
              </span>
              <p className="text-lg font-bold text-gray-800 tracking-wider">
                (HTML, CSS, JS)
              </p>
              <div className="pt-8 text-center">
                <a href="https://quiz-game-dhimitri.netlify.app">
                  <button className="text-center text-gray-800 rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Take a look
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
