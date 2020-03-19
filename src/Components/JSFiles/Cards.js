import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import cardeone from '../../Images/Card_One.png'
import cardeTwo from '../../Images/Card_Two.png'
import '../CSSFiles/Card.css'
let CardInfo=[{title:"WELCOME TO OUR SITE!", 
               paragraph:"We provide practical support for families who are seriously in need. We offer the whole family support 24/7 as long as our support is needed.", 
               to:"/about",
               img: cardeone},
               {title:"SHORTLY ABOUT US", 
               paragraph:"Our vision is for all people with a life indeed situation. We protect and assist the lives and dignity of families in our home town.", 
               to:"/about",
               img: cardeTwo}]
class Cards extends Component{
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(max-width: 992px)").matches };
      }
    
    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(max-width: 992px)").addListener(handler);
      }
    render () { 
        return(
            <div>
                <div >
                {this.state.matches && CardInfo.map(((item,i)=>{
                                            return (
                                            <div className="Card-Style" style={{display: "flex", flexDirection:  'column'}}>
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
                    {!this.state.matches && CardInfo.map(((item,i)=>{
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

            </div>
        )
    }
}

export default Cards