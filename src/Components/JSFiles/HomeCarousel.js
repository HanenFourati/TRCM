import React, { Component } from 'react'
import DonateModel from './DonateModel.js'
import '../CSSFiles/Carousel.css'
class HomeCarousel extends Component{ 
      render () {  
        return (
            <div>
                <div className="bg-image"></div>
                <div className="bg-caption">
                   <div className="bg-text">
                       <h1>BE USEFUL TO OTHERS</h1>
                       <p>WITH NO THOUGHT OF RECOMPENSE!</p>
                   </div>
                   <DonateModel/>
                </div>
            </div>
        );    
      }
    
}
export default HomeCarousel
