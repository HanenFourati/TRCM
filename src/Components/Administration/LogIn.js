import React, { Component } from "react"
import { withRouter } from 'react-router'
import axios from "axios"
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
       this.props.history.push(`/Administration/${currentele._id}`) : error.innerHTML="username or password incorrect" )
      }
    
      render() {
        return (
          <div>
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
        )
      }

}

export default withRouter(LogIn)
