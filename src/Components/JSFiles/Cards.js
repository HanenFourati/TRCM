import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import cardeone from '../../Images/Card_One.png'
import cardeTwo from '../../Images/Card_Two.png'
import '../CSSFiles/Card.css'
let CardInfo=[{title:"WELCOME TO OUR SITE!", 
               paragraph:"We provide emotional and practical support for families who have a seriously ill children. We offer the whole family support 24/7 regardless of diagnosis and for as long as it is needed.", 
               to:"/about",
               img: cardeone},
               {title:"SHORTLY ABOUT US", 
               paragraph:"Our vision is for all families who have a child with a life threatening or terminal illness to have access to a CHARITY carer at this time of great need.", 
               to:"/about",
               img: cardeTwo}]
class Cards extends Component{
    render () { 
        return(
            <div>
                {CardInfo.map(((item,i)=>{
                    return (
                    <div className="Card-Style" style={{display: "flex", flexDirection: i/2 != 0 ? 'row' : 'row-reverse'}}>
                        <div className="Card-Image-Box-Style">
                            <img className="Card-Image-Style" src={item.img} />
                        </div>
                        <div className="Card-Info-Box-Style">
                            <div className="Card-Info-Style">
                                <h2>{item.title}</h2>
                                <p>{item.paragraph}</p>
                                <Link className="Card-Link-Style" to={item.to}>See More</Link>
                            </div> 
                        </div>
                    </div>)}))}
            </div>
        )
    }
}

export default Cards