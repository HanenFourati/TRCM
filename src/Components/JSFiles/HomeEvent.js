import React, { Component } from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import axios from 'axios'
import Countdown from './Timer.js'
import '../CSSFiles/UpEvents.css'
class HomeEvent extends Component{ 
  constructor(props) { 
    super(props)
    this.state = {
      eventtable: []
    }
  }
  componentDidMount(){ 
    axios.get('/Administration/'+this.props.adminid+'/'+this.props.username+'/Event/Edit-UpcommingEvent').then(res =>
      {
        this.setState({eventtable: res.data})
          }
      )
    .catch(error => {console.log(error)});
   } 
      render () {
        var d=this.state.eventtable.map((i)=> i.date).toString()
        console.log(this.state.eventtable.map((i)=> i.date)+"")
        return (
            <div className="UpEvent-Style">
                <h2>UPCOMMING EVENT</h2>
                <p>{this.state.eventtable.map((i)=> <p>{i.discription}</p>)}</p>
                <div className="UpEvent-Display-Style">
                    <div className="UpEvent-Name-Display-Style">
                      <FaCalendarAlt className="UpEvent-icon-Style"/>
                      <h2>{this.state.eventtable.map((i)=> <p>{i.title}</p>)}</h2>
                    </div>
                    <Countdown date={new Date(this.state.eventtable.map((i)=> i.date)+"").getTime()}/> 
                </div>
            </div>
        )    
      }
    // 
}
export default HomeEvent
