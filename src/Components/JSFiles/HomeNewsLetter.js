import React, { Component } from 'react'
import {FaChevronRight} from 'react-icons/fa'
import '../CSSFiles/NewsLetter.css'

class HomeNewsLetter extends Component{
    constructor (props) {
        super(props)
        this.state = {
            Newsletter_input_value: ''
        }
    }
    render () {
        return(

            <div className="newsLetter_section_style">
                <div id="newsLetter_section_style_partone">
                    <p>Bring volunteering culture to your inbox.</p>
                </div>
                <div id="newsLetter_section_style_parttwo">
                    <input id="newsLetter_input_field" type="text" placeholder=" Enter your email to sign up for our newsletter " />
                    <botton id="newsLetter_button"> <FaChevronRight/></botton>
                </div>
            </div>
            
            );
        }
    }

export default HomeNewsLetter