import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import qut from '../../assets/images/quotation.png'

const Testimonial = () => {
  return (
      <div className='bg-kalo py-[74px]'>
          <Container className="flex flex-col justify-center items-center relative">
              <Heading className=" text-white pb-9" headText={"Testimonials"} />
              <h3 className='font-playfair text-[21px] text-white font-normal text-center w-[820px] opacity-[0.7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie vel turpis a sodales. In hac habitasse platea dictumst. Nulla sollicitudin dui vitae. </h3>
              <span className='font-poppins font-bold text-sm text-white opacity-[0.7] pt-6 pb-1'>PORTO WEBSITE CREATION - 2025</span>
              <strong className='text-[21px] font-poppins font-bold text-white'>John Doe</strong>
              <img className='absolute left-[100px] top-0 w-[30px]' src={qut} alt="quotation" />
          </Container>
      </div>
  )
}

export default Testimonial