// import React, { Component } from 'react'
// import {FaCalendarAlt} from 'react-icons/fa'
// import '../CSSFiles/UpEvents.css'
// class Timer extends Component{ 
//     componentDidMount () {
//         var x = setInterval(function() { //new Date("Jan 5, 2021 15:37:25")
//             var countDownDate = new Date("Mar 1, 2021 15:37:25").getTime()
//               var now = new Date().getTime()
//               var distance = countDownDate - now
//               var days = Math.floor(distance / (1000 * 60 * 60 * 24))
//               var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//               var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//               var seconds = Math.floor((distance % (1000 * 60)) / 1000)
//               document.getElementById("days").innerHTML = days
//               document.getElementById("hours").innerHTML = hours
//               document.getElementById("minutes").innerHTML = minutes
//               document.getElementById("seconds").innerHTML = seconds
//               if (distance < 0) {
//                 clearInterval(x)
//                 document.getElementById("demo").innerHTML = "EXPIRED"
//               }
//             }, 1000)
//       }
//       render () {
//           console.log(...this.props.eventdate)
//         return (

//         )    
//       }
    
// }
// export default Timer

import React, { PropTypes, Component } from 'react';
import '../CSSFiles/UpEvents.css'
class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    console.log(this.props.date)
    return (
              <div className="UpEvent-Timer-Display-Style">
                <div className="UpEvent-Timer-Divs-Style left">
                  <p id="days"></p>
                  <p>{countDown.days === 1 ? 'Day' : 'Days'}</p>
                  <strong>{this.addLeadingZeros(countDown.days)}</strong>
                </div>
                <div className="UpEvent-Timer-Divs-Style">
                  <p id="hours"></p>
                  <p>Hours</p>
                  <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                </div>
                <div className="UpEvent-Timer-Divs-Style">
                  <p id="minutes"></p>
                  <p>Minutes</p>
                  <strong>{this.addLeadingZeros(countDown.min)}</strong>
                </div>
                <div className="UpEvent-Timer-Divs-Style">
                  <p id="seconds"></p>
                  <p>Seconds</p>
                  <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                </div>
             </div>
    );
  }
}

// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

// Countdown.defaultProps = {
//   date: new Date( this.props.edate.toString()).getTime()
// };

export default Countdown;