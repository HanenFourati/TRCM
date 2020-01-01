import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: "",
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
            <div>
                <h1>Contact Us</h1>
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required />
                <input type="text" name="content" placeholder="content" value={this.state.content} onChange={this.handleChange} required />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
          )
    }

}

export default withRouter(Contact)
