import React from 'react'
import OurWorksGridItemDisplay from '../JSFiles/OurWorksGridItemDisplay.js'
class OurWorkItemDisolayPage extends React.Component {
  render(){
    return (
      <div>
          <OurWorksGridItemDisplay id={this.props.id}/>
      </div>
    )
  }
}

export default OurWorkItemDisolayPage
