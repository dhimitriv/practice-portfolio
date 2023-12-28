import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";

function Navbar() {
  const [navigation, setNavigation] = useState(false);
  const handleClick = () => setNavigation(!navigation);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#064d50] text-gray-300 ">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutme" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="mySkills" smooth={true} duration={500}>
            My skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!navigation ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navigation
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#064d50] opacity-100 flex flex-col justify-center pb-6 "
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="aboutme" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="mySkills"
            smooth={true}
            duration={500}
          >
            My skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0 ">
        <ul className={!navigation ? "absolute top-[35%] left-0 " : "hidden"}>
          <li className="w-[140px] h-[60px] flex justify-between  items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full ml-3 text-gray-300"
              href="https://www.linkedin.com/in/dhimitraq-vincani-210765251"
            >
              Dhimitraq Vincani <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-yellow-600 ">
            <a
              className="flex text-[10px] justify-between items-center ml-2 w-full text-gray-300"
              href="https://dhimitraqvincani@gmail.com"
            >
              dhimitraqvincani @gmail.com <FaMailBulk size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-green-800 ">
            <a
              className="flex justify-between items-center w-full gap-1 ml-6 text-gray-300"
              href="https://www.fiverr.com/dhimitriv?up_rollout=true"
            >
              dhimitriv <SiFiverr size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-green-600 ">
            <a
              className="flex text-[10px] justify-between items-center w-full gap-4 ml-10 text-gray-300"
              href="https://upwork.com/freelancers/~015ad599ea7f9703cf"
            >
              Dhimitri V <SiUpwork size={28} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-rose-500 ">
            <a
              className="flex text-[12px] justify-between items-center w-full text-gray-300 ml-1.5 gap-1"
              href="//instagram.com/dhimivi_coding/"
            >
              dhimivi_coding <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#057980] ">
            <a
              className="flex justify-between items-center w-full gap-3 ml-4 text-gray-300"
              href="https://github.com/dhimitriv"
            >
              dhimitriv <FaGithub size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
