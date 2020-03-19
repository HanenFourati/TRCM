import React from 'react'
import ContOne from '../../Images/Contact_One.jpg'
import ContTwo from '../../Images/Contact_Two.jpg'
import ContThree from '../../Images/Contact_Three.jpg'
import ContFour from '../../Images/Contact_Four.jpg'
import '../CSSFiles/Opening.css'
function ContactOpenig() {
  return (
    <div className="Opening-Style">
        <div className="Opening-Quoet-Style">
            <p>“Giving is not just about making a donation. It is about making a difference.” <br/> - Kathy Calvin</p>
        </div>
        {/*  <div className="Opening-Imges-div-Style">
                 <img src={ContOne} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContTwo} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContThree} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContFour} alt=""  className="Opening-Imges-Style"/> 
        </div> */}
        <div id="slider">
        <figure> 
        <img src={ContOne} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContTwo} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContThree} alt=""  className="Opening-Imges-Style"/>
                 <img src={ContFour} alt=""  className="Opening-Imges-Style"/> 
        </figure>
        </div>
    </div>
  );
}

export default ContactOpenig
