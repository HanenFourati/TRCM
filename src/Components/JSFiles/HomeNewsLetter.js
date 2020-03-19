import React, { Component } from 'react'
import axios from 'axios'
import {Link,withRouter} from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'
import '../CSSFiles/NewsLetter.css'

class HomeNewsLetter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mail: '' 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
        this.state.mail != '' ?
        axios.post('/Newslettersubscribe', this.state)
        .then(() => {
          let done=document.getElementById("SubscriptionMessage")
          done.innerHTML="You are now subscribed !"
          })
        .catch(err => {alert(err)})
        : 
        document.getElementById("SubscriptionMessage").innerHTML="enter your mail address please !"

      }
    render () {
        return(
                <div className="newsLetter_section" >
                    <div className="newsLetter_section_style">
                        <div id="newsLetter_section_style_partone">
                            <p>Bring volunteering culture to your inbox.</p>
                        </div>
                        <div id="newsLetter_section_style_parttwo">
                            <input id="newsLetter_input_field" type="text" name="mail" placeholder=" Enter your email to sign up for our newsletter" value={this.state.mail} onChange={this.handleChange} required/>
                            <button id="newsLetter_button"  onClick={this.handleSubmit} > <FaChevronRight/></button> 
                        </div>
                    </div>
                    <div className="newsLetter_msg_section_style">
                        <p id="SubscriptionMessage"></p>
                    </div>
                </div>
            
            );
        }
    }

export default withRouter(HomeNewsLetter)