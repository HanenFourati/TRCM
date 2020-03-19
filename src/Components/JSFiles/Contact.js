import React, {Component} from 'react'
import axios from 'axios'
import {Link,withRouter} from 'react-router-dom'
import { FaInstagram,FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare} from 'react-icons/fa';
import '../CSSFiles/Contact.css'
const secondrow = [ { icon: <FaFacebookSquare/>, text: "Facbook", to: "https://www.facebook.com/%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D9%84%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A-%D8%A8%D8%A7%D9%84%D9%85%D8%AA%D9%84%D9%88%D9%8A-1410435105730978/"},                   
                    { icon: <FaYoutubeSquare/>,  text: "Youtube", to: "https://www.youtube.com/channel/UCg7eaVk8GzB6EwkjuKu_xMw"},
                    { icon: <FaInstagram/>, text: "Instagram", to: "/"},
                    { icon: <FaTwitterSquare/>, text: "Twitter", to: "/"},
                ] 
var today = new Date()
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fname: "",
          lname:"",
          email: "",
          subject: "",
          content: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          date:  today.getTime()+'-'+today.getDate()+ '-' +  (today.getMonth() + 1) + '-' + today.getFullYear() 
        });
      }
    
      handleSubmit() {
        axios.post('/contact/add-message', this.state)
        .then(() => {
          this.props.history.push(`/contact`)
          })
        .catch(err => {alert(err)})
      }
    render() { 
        return (
          <div className="Contact-Form-Style">
              <div className="Contact-Part-One-Form-Style">
                  <h5>CONTACT US</h5>
                  <div className="Contact-Part-One-Form-Grid-Style">
                      <input type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} required />
                      <input type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} required />
                      <input type="text" name="email" placeholder="E-mail Address" value={this.state.email} onChange={this.handleChange} required />
                      <input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} required />
                      <textarea name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange} required />
                      <button onClick={this.handleSubmit}>Send</button>
                  </div>  
              </div>
              <div className="Contact-Part-Two-Form-Style">  
                  <ul >
                      <li><h5>FIND US</h5></li>
                      {  secondrow.map(
                          (srmobj, i) => {
                              return (
                              <li><a className="Contact-Part-Two-Link-Form-Style" href={srmobj.to}>{srmobj.icon}&nbsp;{srmobj.text}</a></li>
                                  )
                              }
                          )
                      } 
                  </ul>
              </div>

          </div>
          )
    }

}

export default withRouter(Contact)
