import React from "react";
import Container from "./common/Container";
import bowImg from "../../assets/images/bow.svg";
import bulbImg from "../../assets/images/bulb.svg";
import monitorImg from "../../assets/images/monitor.svg";
import speakerImg from "../../assets/images/speaker.svg";
import { HiArrowLongRight } from "react-icons/hi2";

const Strategy = () => {
  return (
    <Container className="pb-20">
      <div className="flex justify-between items-center text-center  pt-[130px] pb-6">
        <div className="flex flex-col items-center">
          <img src={bowImg} alt="bow" />
          <h4 className="text-lg font-bold text-bannerBg uppercase tracking-[2.5px] pt-6 pb-3 relative after:absolute after:left-[-80%] after:bottom-[0%] after:translate-y-1/2 after:h-px after:bg-bannerBg after:w-xs after:contents-['*']">
            Strategy
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <img src={bulbImg} alt="bow" />
          <h4 className="text-lg font-bold text-gray uppercase tracking-[2.5px] pt-6 pb-3 relative after:absolute after:left-[-70%] after:bottom-[0%] after:translate-y-1/2 after:h-px after:bg-bannerBg after:w-xs after:contents-['*'] after:opacity-[0.5]">
            Creative
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={monitorImg}
            alt="bow"
            className="fill-bannerBg stroke-current"
          />
          <h4 className="text-lg font-bold text-gray uppercase tracking-[2.5px] pt-6 pb-3 relative after:absolute after:left-[-30%] after:bottom-[0%] after:translate-y-1/2 after:h-px after:bg-bannerBg after:w-xs after:contents-['*'] after:opacity-[0.5]">
            Development
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <img src={speakerImg} alt="bow" />
          <h4 className="text-lg font-bold text-gray uppercase tracking-[2.5px] pt-6 pb-3 relative after:absolute after:left-[-50%] after:bottom-[0%] after:translate-y-1/2 after:h-px after:bg-bannerBg after:w-xs after:contents-['*'] after:opacity-[0.5]">
            Marketing
          </h4>
        </div>
      </div>
      <p className="font-normal text-base font-poppins  text-gray text-center leading-8 py-6">
        Ipsum dolor sit amet, dipiscing elit. Donec imperdiet massa tellus,
        vitae lacinia arcu mollis ac. Nulla ex enim, pellente que vitae
        tristique vel, porttitor in quam. Vestibulum mattis quam gravida
        malesuada faucibus. Duis nec est ac metuspulvinar nunc commodo nisi
        orci, sit amet fermentum sapien tempus eu.
      </p>
      <a href="#" className="font-bold text-center text-kalo font-poppins text-base flex items-center gap-2 justify-center">
        Read More <HiArrowLongRight className="text-2xl font-normal" />
      </a>
    </Container>
  );
};

export default Strategy;
