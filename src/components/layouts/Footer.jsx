import React from 'react'
import Container from './common/Container'
import logoImg from '/logo.png'
import FooterHead from './common/FooterHead'

const Footer = () => {
  return (
      <div className='bg-kalo pt-[76px] pb-[96px]'>
          <Container className="flex justify-around">
              <img className='max-w-[140px] h-[35px]' src={logoImg} alt="logo" />
              <ul>
                  <li><FooterHead fText={"About Us"} /></li>
                  <li><FooterHead className="text-sm mt-3.5" fText={"Porto Digital Agency"} /></li>
                  <li className='footerP'>123 Porto Blvd, Suite 100</li>
                  <li className='footerP'>New York, NY</li>
                  <li className='footerP'>Phone: 123-456-7890</li>
                  <li className='footerP'>Email: porto@domain.com</li>
              </ul>
              <ul>
                  <li><FooterHead fText={"Navigation"} /></li>
                  <li className='footerP mt-3.5'><a href="#">- Home</a></li>
                  <li className='footerP '><a href="#">- About</a></li>
                  <li className='footerP '><a href="#">- Services</a></li>
                  <li className='footerP '><a href="#">- Work</a></li>
                  <li className='footerP '><a href="#">- Contact</a></li>
              </ul>
              <ul>
                  <li><FooterHead fText={"Navigation"} /></li>
                  <li className='footerP mt-3.5'><a href="#">- Terms of Use</a></li>
                  <li className='footerP '><a href="#">- Privacy Policy</a></li>
              </ul>
              <ul>
                  <li><FooterHead fText={"Navigation"} /></li>
                  <li className='footerP mt-3.5'>- Lorem ipsum dolor sit amet.</li>
                  <li className='footerP text-xs!'>12:55 AM Dec 19th</li>
              </ul>
          </Container>
    </div>
  )
}

export default Footer