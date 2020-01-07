import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import ProjectsGridDisplay from '../Administration/ProjectsGridDisplay.js'
import AddProjectModel from '../Administration/AddProjectModel.js'
import NavbarAdmin from '../../Components/Administration/NavbarAdmin.js'
import Footer from '../JSFiles/Footer.js'
import '../CSSFiles/Model.css'
class AdministarationPage extends Component{
    render(){
        return(
          <div>
              <NavbarAdmin adminid={this.props.adminid} username={this.props.username}/>
              <div style={{padding: "2%", display: "flex"}}>
                  <AddProjectModel adminid={this.props.adminid} username={this.props.username}/>  &nbsp;
                  <Link className="Model-button-style" to={'/Administration/'+this.props.adminid+'/'+this.props.username+'/Event/Edit-UpcommingEvent'}>Event</Link>
              </div>
              <ProjectsGridDisplay adminid={this.props.adminid} username={this.props.username}/> 
              <Footer/>
         </div>
        )
    }
}
export default AdministarationPage