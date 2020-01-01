import React from 'react'
import Navbar from '../JSFiles/Navbar.js'
import Contact from '../JSFiles/Contact.js'
import Location from '../JSFiles/Location.js'
import Footer from '../JSFiles/Footer.js'
function ContactUsPage() {
  return (
    <div>
      <Navbar active="Contact Us"/>
      <Contact/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default ContactUsPage
