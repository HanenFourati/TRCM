import React from 'react'
import Navbar from '../JSFiles/Navbar.js'
import HomeCarousel from '../JSFiles/HomeCarousel.js'
import HomeFields from '../JSFiles/HomeFields.js'
import Cards from '../JSFiles/Cards.js'
import HomeEvent from '../JSFiles/HomeEvent.js'
import HomePartners from '../JSFiles/HomePartners.js'
import Footer from '../JSFiles/Footer.js'
import HomeNewsLetter from '../JSFiles/HomeNewsLetter.js'
function Home() {
  return (
    <div className="App">
      <Navbar active="Home"/>
      <HomeCarousel/>
      <HomeFields/>
      <Cards/>
      <HomeEvent/>
      <HomePartners/>
      <HomeNewsLetter/>
      <Footer/>
    </div>
  );
}

export default Home

// import Navbarcrtm from '../Js/Navbarcrtm'
// import Footercrtm from '../Js/Footercrtm'
// import Simplecard from '../Js/Simplecard'
// import InvSimplecard from '../Js/InvSimplecard'
// import NewsLetterSection from '../Js/NewsLetterSection'
// import Takeaction from '../Js/Takeaction'
// import CRTMwork from '../Js/CRTMwork'
// import i from '../../Images/crtmone.jpg'
      {/* <Navbarcrtm/>
      <Simplecard title="blabla" paragraph="blabla" to="blabla" image={i}/>
      <InvSimplecard title="blabla" paragraph="blabla" to="blabla" image={i}/>
      <NewsLetterSection/>
      <Footercrtm/> 
      <Takeaction title="blabla" paragraph="blabla" to="blabla" image="https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_960_720.jpg"/>
      <InvSimplecard title="blabla" paragraph="blabla" to="blabla" image="https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_960_720.jpg"/>
      <CRTMwork/> */}