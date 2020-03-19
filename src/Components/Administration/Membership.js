import React, { Component } from 'react'
import axios from "axios"
class Membership extends Component{ 
    constructor(props) { 
        super(props)
        this.state = {
            Membershiptable: []
        }

      }
      componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/'+this.props.username+'/memberships').then(res =>
          this.setState({
            Membershiptable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      render () {
        return (
            <div style={{textAlign: "justify",padding: "5%"}}>
              {/* <EditEventModel adminid={this.props.adminid} username={this.props.username} eventtable={this.state.eventtable}/> */}
                <h2>Received Memberships</h2>
                <div>
                    {this.state.Membershiptable.map((i,n)=> <p>Email number {n+1}: {i.mail}</p> )}
                </div>
            </div>
        )    
      }
    
}
export default Membership