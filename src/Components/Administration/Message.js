import React, { Component } from 'react'
import axios from "axios"
import Emaildropdown from './Emaildropdown.js'
class Message extends Component{ 
    constructor(props) { 
        super(props)
        this.state = {
            Messagetable: []
        }
      }
      componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/'+this.props.username+'/messages').then(res =>
          this.setState({
            Messagetable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      render () {  
        return (
            <div>
              {/* <EditEventModel adminid={this.props.adminid} username={this.props.username} eventtable={this.state.eventtable}/> */}
                <h2>Received Messages</h2>
                {/* <p>{this.state.Messagetable.map((i)=> <p>{i.content}</p> )}</p> */}
                <Emaildropdown givenTable={this.state.Messagetable}/>
                
            </div>
        )    
      }
    
}
export default Message
