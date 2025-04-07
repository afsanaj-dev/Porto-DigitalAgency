import React from 'react'

const Heading = ({headText, className}) => {
  return (
      <p className={`text-black text-[35px] font-bold font-poppins leading-[42px] capitalize  ${className} `}>{headText}</p>
  )
}

export default Heading