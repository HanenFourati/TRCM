import React from 'react'
import Navbar from '../JSFiles/Navbar.js'
import OurWorksGridItemDisplay from '../JSFiles/OurWorksGridItemDisplay.js'
import Footer from '../JSFiles/Footer.js'
class OurWorkItemDisolayPage extends React.Component {
  render(){
    return (
      <div>
        <Navbar active="Our Work"/>
        <OurWorksGridItemDisplay id={this.props.id}/>
        <Footer/>
      </div>
    )
  }
}

export default OurWorkItemDisolayPage
