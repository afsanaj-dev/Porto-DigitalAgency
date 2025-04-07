import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import projectOne from '../../assets/images/project-1.jpg'
import projectTwo from '../../assets/images/project-2.jpg'

const Work = () => {
  return (
    <div className='bg-bannerBg py-20'>
          <Container className="relative w-[100vw]">
              <Heading className="text-white pb-7" headText={"our amazing work"} />
              <div className='flex gap-5 pb-4'>
                  <div>
                      <img src={projectOne} alt="project" />
                      <p className='font-medium text-sm font-poppins uppercase text-white opacity-[0.7] pt-4 pb-2'>WEBSITE CREATION - 2025</p>
                      <h4 className='font-poppins font-bold text-white text-2xl capitalize'>Porto Digital Agency</h4>
                  </div>
                  <div>
                      <img src={projectTwo} alt="project" />
                      <p className='font-medium text-sm font-poppins uppercase text-white opacity-[0.7] pt-4 pb-2'>WEBSITE CREATION - 2025</p>
                      <h4 className='font-poppins font-bold text-white text-2xl capitalize'>Porto Digital Agency</h4>
                  </div>
              </div>
          </Container>
    </div>
  )
}

export default Work