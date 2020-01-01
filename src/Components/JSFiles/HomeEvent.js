import React, { Component } from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import '../CSSFiles/UpEvents.css'
class HomeEvent extends Component{ 
    componentDidMount () {
        var x = setInterval(function() {
            var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime()
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
        return (
            <div className="UpEvent-Style">
                <h2>UPCOMMING EVENT</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                <div className="UpEvent-Display-Style">
                    <div className="UpEvent-Name-Display-Style">
                      <FaCalendarAlt className="UpEvent-icon-Style"/>
                      <h2>Amar Bhai Hospital Charity Event</h2>
                    </div>
                    {/* <Timer/> */}
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
                </div>
            </div>
        )    
      }
    
}
export default HomeEvent
