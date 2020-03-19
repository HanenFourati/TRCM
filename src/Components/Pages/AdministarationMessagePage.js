import React,{Component} from 'react'
import Message from '../Administration/Message.js'
import NavbarAdmin from '../../Components/Administration/NavbarAdmin.js'
import Footer from '../JSFiles/Footer.js'
class AdministarationMessagePage extends Component{
    render(){
        return(
          <div>
              <NavbarAdmin adminid={this.props.adminid} username={this.props.username}/>
              <Message adminid={this.props.adminid} username={this.props.username}/>
              <Footer/>
         </div>
        )
    }
}
export default AdministarationMessagePage