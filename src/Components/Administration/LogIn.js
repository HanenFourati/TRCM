import React, { Component } from "react"
import { withRouter } from 'react-router'
import axios from "axios"
import '../CSSFiles/LogIn.css'
class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: "",
          password: "",
          userstable: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      componentDidMount(){ 
        axios.get('/Administration').then(res =>
          this.setState({
            userstable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
       console.log(this.state)
       let error=document.getElementById("error_message")
       this.state.userstable.map((currentele)=> 
       (currentele.username===this.state.username && currentele.password===this.state.password) ? 
       this.props.history.push(`/Administration/${currentele._id}/${currentele.username}`) : error.innerHTML="username or password incorrect" )
      }
    
      render() {
        return (
          <div className="Login-Style"> 
            <div className="Login-Form-Style">  
            <h1>Log In</h1>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
    
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
    
              <button onClick={this.handleSubmit}>Login</button>
              <p id="error_message"></p>
            </div>
          </div>
        )
      }

}

export default withRouter(LogIn)
