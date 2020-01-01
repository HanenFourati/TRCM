import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import cone from '../../Images/Cover_One.jpg'
import ctwo from '../../Images/Cover_Two.jpg'
import cthree from '../../Images/Cover_Three.jpg'
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
                   <button>DONATE NOW</button>
                </div>
            </div>
        );    
      }
    
}
export default HomeCarousel
