import React,{Component} from 'react'
import Membership from '../Administration/Membership.js'
import NavbarAdmin from '../../Components/Administration/NavbarAdmin.js'
import Footer from '../JSFiles/Footer.js'
class AdministarationMembershipPage extends Component{
    render(){
        return(
          <div>
              <NavbarAdmin adminid={this.props.adminid} username={this.props.username}/>
              <Membership adminid={this.props.adminid} username={this.props.username}/>
              <Footer/>
         </div>
        )
    }
}
export default AdministarationMembershipPage