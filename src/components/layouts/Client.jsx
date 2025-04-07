import React from 'react'
import Container from './common/Container'
import clientOne from '../../assets/images/logo-8.png'
import clientTwo from '../../assets/images/logo-9.png'
import clientThree from '../../assets/images/logo-10.png'
import clientFour from '../../assets/images/logo-11.png'
import clientFive from '../../assets/images/logo-12.png'
import clientSix from '../../assets/images/logo-13.png'

const Client = () => {
  return (
      <Container className="flex justify-around py-[72px]">
          <img className='max-w-28 object-contain' src={clientOne} alt="client" />
          <img className='max-w-[140px] object-contain' src={clientTwo} alt="client" />
          <img className='max-w-[140px] object-contain'  src={clientThree} alt="client" />
          <img className='max-w-[140px] object-contain' src={clientFour} alt="client" />
          <img className='max-w-[140px] object-contain' src={clientFive} alt="client" />
          <img className='max-w-[140px] object-contain' src={clientSix} alt="client" />
    </Container>
  )
}

export default Client