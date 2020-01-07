import React from "react"
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
class NavbarAdmin extends React.Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "row", justifyContent: "space-between", alignItems: "baseline", backgroundColor: "#29282c", padding:"0.5%"}}>
        <div style={{display: "flex", justifyContent: "row", alignItems: "baseline"}}>
          <Link style={{color:"whitesmoke", textDecoration: "none"}} to={'/Administration/'+this.props.adminid+'/'+this.props.username}>
            <FaHome style={{color:"whitesmoke", width: "20px", height: "20px"}}/>
          </Link>
        </div>
        <div>
          <p style={{color:"whitesmoke"}}>
            Welcome, {this.props.username} (
              <Link to="/Administration" style={{color:"whitesmoke", textDecoration: "none"}}>
                Log out 
              </Link>) 
          </p>    
        </div>
      </div>
    );
  }
}

export default NavbarAdmin
