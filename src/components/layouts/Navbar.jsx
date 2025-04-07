import React from "react";
import Container from "./common/Container";
import logoImg from "../../../public/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-bannerBg">
    <Container >
      <div className="flex justify-between py-[33px]">
        <a href="#" className="w-[125px]">
          <img className="w-full" src={logoImg} alt="logo" />
        </a>

        <div className="flex gap-[55px]">
          <ul className="font-poppins text-white flex gap-[45px] text-base font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="flex gap-4 text-white text-basem pt-1.5">
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <div className="pt-1.5">
            <a className="text-white  text-lg" href="#"><IoSearchSharp /></a>
          </div>
        </div>
      </div>
    </Container>
    </nav>
  );
};

export default Navbar;
