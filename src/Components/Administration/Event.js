import React, { Component } from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import axios from "axios"
import EditEventModel from "./EditEventModel.js"
import '../CSSFiles/UpEvents.css'
class Event extends Component{ 
    constructor(props) { 
        super(props)
        this.state = {
          eventtable: []
        }
      }
      componentDidMount(){ 
        axios.get('/Administration/'+this.props.adminid+'/'+this.props.username+'/Event/Edit-UpcommingEvent').then(res =>
          this.setState({
            eventtable: res.data
          }))
        .catch(error => {console.log(error)});
       } 
      render () {  
        return (
            <div className="UpEvent-Style">
              <EditEventModel adminid={this.props.adminid} username={this.props.username} eventtable={this.state.eventtable}/>
                <h2>UPCOMMING EVENT</h2>
                <p>{this.state.eventtable.map((i)=> <p>{i.discription}</p>)}</p>
                <div className="UpEvent-Display-Style">
                    <div className="UpEvent-Name-Display-Style">
                      <FaCalendarAlt className="UpEvent-icon-Style"/>
                      <h2>{this.state.eventtable.map((i)=> <p>{i.title}</p>)}</h2>
                    </div>
                    <div className="UpEvent-Timer-Display-Style">
                    <h2>{this.state.eventtable.map((i)=> <p>{i.date}</p>)}</h2>
                    </div>
                </div>
            </div>
        )    
      }
    
}
export default Event
