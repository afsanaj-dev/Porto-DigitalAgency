import React from "react";
import Container from "./common/Container";
import genericImg from "../../assets/images/generic-1.jpg";
import Heading from "./common/Heading";
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-end bg-[#F4F4F4] py-[70px]">
        <Heading
          className="text-start pb-4 mr-80 pr-6"
          headText={"who we are"}
        />
        <p className="text-[19px] font-normal text-gray font-poppins w-[560px] tracking-wide pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet massa tellus, vitae lacinia.
        </p>

        <p className="font-normal text-base font-poppins flex flex-end  text-gray text-start leading-8 w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet massa tellus, vitae lacinia arcu mollis ac. Nulla ex enim,
          pellente que vitae tristique vel, porttitor in quam.
        </p>
        <a
          href="#"
          className="font-bold text-kalo font-poppins text-base flex items-center gap-2 mr-96 pt-4 pr-14"
        >
          Read More <HiArrowLongRight className="text-2xl font-normal" />
        </a>
      </div>
      <div className="w-1/2">
        <img src={genericImg} alt="about" className=" object-fill" />
      </div>
    </div>
  );
};

export default About;
