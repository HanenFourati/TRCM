import React, { Component } from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import '../CSSFiles/UpEvents.css'
class Timer extends Component{ 
    componentDidMount () {
        var x = setInterval(function() { //new Date("Jan 5, 2021 15:37:25")
            var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime()
              var now = new Date().getTime()
              var distance = countDownDate - now
              var days = Math.floor(distance / (1000 * 60 * 60 * 24))
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
              var seconds = Math.floor((distance % (1000 * 60)) / 1000)
              document.getElementById("days").innerHTML = days
              document.getElementById("hours").innerHTML = hours
              document.getElementById("minutes").innerHTML = minutes
              document.getElementById("seconds").innerHTML = seconds
              if (distance < 0) {
                clearInterval(x)
                document.getElementById("demo").innerHTML = "EXPIRED"
              }
            }, 1000)
      }
      render () {
          console.log(...this.props.eventdate)
        return (
                    <div className="UpEvent-Timer-Display-Style">
                      <div className="UpEvent-Timer-Divs-Style left">
                        <p id="days"></p>
                        <p>Days</p>
                      </div>
                      <div className="UpEvent-Timer-Divs-Style">
                        <p id="hours"></p>
                        <p>Hours</p>
                      </div>
                      <div className="UpEvent-Timer-Divs-Style">
                        <p id="minutes"></p>
                        <p>Minutes</p>
                      </div>
                      <div className="UpEvent-Timer-Divs-Style">
                        <p id="seconds"></p>
                        <p>Seconds</p>
                      </div>
                    </div>
        )    
      }
    
}
export default Timer
