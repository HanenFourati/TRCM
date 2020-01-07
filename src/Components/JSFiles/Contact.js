import React, {Component} from 'react'
import axios from 'axios'
import {Link,withRouter} from 'react-router-dom'
import { FaInstagram,FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare} from 'react-icons/fa';
import '../CSSFiles/Contact.css'
const secondrow = [ { icon: <FaFacebookSquare/>, text: "Facbook", to: "/"},
                    { icon: <FaInstagram/>, text: "Instagram", to: "/"},
                    { icon: <FaTwitterSquare/>, text: "Twitter", to: "/"},
                    { icon: <FaYoutubeSquare/>,  text: "Youtube", to: "/"}
                ] 
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
          [event.target.name]: event.target.value
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
                              <li><Link className="Contact-Part-Two-Link-Form-Style" to={srmobj.to}>{srmobj.icon}&nbsp;{srmobj.text}</Link></li>
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
