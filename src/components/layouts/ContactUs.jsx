import React from 'react'
import Container from './common/Container'

const ContactUs = () => {
    return (
      <div className='bg-[#F4F4F4] py-[74px]'>           
      <Container className="flex justify-between bg-[#F4F4F4]">
          <div>
              <h3 className='font-poppins text-kalo text-[31px] font-bold'>Porto is everything you need to create an awesome website!
              </h3>
              <p className='font-poppins text-gray font-bold text-[19px]'>Make An Appointment Today With Our Online Form</p>
          </div>
          <button><a className='text-white font-poppins font-bold text-base py-4 px-8 rounded-sm bg-bannerBg' href="#">Contact Us</a></button>
    </Container>
      </div>
  )
}

export default ContactUs