import React from 'react'
import Navbar from '../JSFiles/Navbar.js'
import About from '../JSFiles/About.js'
import Founders from '../JSFiles/Founders.js'
import Footer from '../JSFiles/Footer.js'
function AboutUsPage() {
  return (
    <div>
      <Navbar active="About Us"/>
      <About/>
      <Founders/>
      <Footer/> 
    </div>
  )
}

export default AboutUsPage
