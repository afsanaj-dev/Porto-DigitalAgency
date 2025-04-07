import React from 'react'

const FooterHead = ({fText,className}) => {
  return (
      <div>
          <h3 className={`text-white text-lg font-bold font-poppins leading-[26px] capitalize  ${className} `}>
              {fText}
          </h3>
      </div>
  )
}

export default FooterHead