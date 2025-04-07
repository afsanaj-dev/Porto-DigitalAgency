import React from "react";
import Container from "./common/Container";

const Count = () => {
  return (
    <Container className="py-16">
      <ul className="flex justify-around">
        <li>
          <span className="font-bold text-kalo text-[56px] leading-[50px] font-poppins pb-3">30+</span>
          <p className="font-normal text-[19px] text-gray font-poppins">Business Year</p>
        </li>
        <li>
          <span className="font-bold text-kalo text-[56px] leading-[50px] font-poppins pb-3">240+</span>
          <p className="font-normal text-[19px] text-gray font-poppins">Satisfied Clients</p>
        </li>
        <li>
          <span className="font-bold text-kalo text-[56px] leading-[50px] font-poppins pb-3">2000+</span>
          <p className="font-normal text-[19px] text-gray font-poppins">Successful cases</p>
        </li>
        <li>
          <span className="font-bold text-kalo text-[56px] leading-[50px] font-poppins pb-3">20+</span>
          <p className="font-normal text-[19px] text-gray font-poppins">Top Professionals</p>
        </li>
      </ul>
    </Container>
  );
};

export default Count;
