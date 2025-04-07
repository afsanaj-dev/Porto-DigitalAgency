import React from "react";
import Container from "./common/Container";

const Banner = () => {
  return (
    <div className="bg-blend-normal bg-[url(background.svg),url(/s1-background.jpg)] bg-right">
      <Container>
        <h3 className=" opacity-[0.3] ">
          <svg width="100%" height="50%">
            <text className="bnrtext2" x="0%" y="100%">
              Design
            </text>
          </svg>
        </h3>
        <h3 className=" opacity-[0.5] ">
          <svg width="100%">
            <text className="bnrtext2" x="0%" y="100%">
              Design
            </text>
          </svg>
        </h3>
        <h3 className=" opacity-[0.7] ">
          <svg width="100%">
            <text className="bnrtext2" x="0%" y="80%">
              Design
            </text>
          </svg>
        </h3>
        <h1 className='text-white text-[152px] font-bold font-poppins uppercase leading-[152px] tracking-[10px]'>Design</h1>
        <p className="text-black text-[35px] font-bold font-poppins leading-[26px] pt-[30px] pb-[140px]">
          to a whole new level
        </p>
      </Container>
    </div>
  );
};

export default Banner;
