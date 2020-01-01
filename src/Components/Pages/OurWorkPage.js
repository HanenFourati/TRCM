import React from 'react'
import OurWorkGrid  from '../JSFiles/OurWorksGrid.js'
import Navbar from '../JSFiles/Navbar.js'
import Footer from '../JSFiles/Footer.js'
function OurWorkPage() {
  return (
    <div>
      <Navbar active="Our Work"/>
      <OurWorkGrid />
      <Footer/>
    </div>
  );
}

export default OurWorkPage
