import React,{Component} from 'react'
import ProjectItemDisplay from '../Administration/ProjetItemDisplay.js'
import NavbarAdmin from '../../Components/Administration/NavbarAdmin.js'
import Footer from '../JSFiles/Footer.js'
class AdministarationProjectDisplayPage  extends Component{
    render(){
        return(
          <div>
              <NavbarAdmin adminid={this.props.adminid} username={this.props.username} /> 
              <ProjectItemDisplay id={this.props.id} adminid={this.props.adminid} username={this.props.username}/>
              <Footer />
         </div>
        )
    }

}
export default AdministarationProjectDisplayPage