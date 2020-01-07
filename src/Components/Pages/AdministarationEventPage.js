import React,{Component} from 'react'
import Event from '../Administration/Event.js'
import NavbarAdmin from '../../Components/Administration/NavbarAdmin.js'
import Footer from '../JSFiles/Footer.js'
class AdministarationEventPage extends Component{
    render(){
        return(
          <div>
              <NavbarAdmin adminid={this.props.adminid} username={this.props.username}/>
              <Event adminid={this.props.adminid} username={this.props.username}/>
              <Footer/>
         </div>
        )
    }
}
export default AdministarationEventPage