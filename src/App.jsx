import React from 'react'
import Navbar from './components/layouts/Navbar'
import Banner from './components/layouts/Banner'
import Strategy from './components/layouts/Strategy'
import About from './components/layouts/About'
import Work from './components/layouts/Work'
import Testimonial from './components/layouts/Testimonial'
import Count from './components/layouts/Count'
import ContactUs from './components/layouts/ContactUs'
import Client from './components/layouts/Client'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner />
      <Strategy />
      <About />
      <Work />
      <Testimonial />
      <Count />
      <ContactUs />
      <Client />
      <Footer/>
    </>
  )
}

export default App