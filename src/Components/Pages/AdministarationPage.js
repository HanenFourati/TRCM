import React,{Component} from 'react'
import ProjectsGridDisplay from '../Administration/ProjectsGridDisplay.js'
import AddProjectModel from '../Administration/AddProjectModel.js'
class AdministarationPage extends Component{
    render(){
        return(
          <div>
              <AddProjectModel adminid={this.props.adminid}/>
              <ProjectsGridDisplay adminid={this.props.adminid}/>
         </div>
        )
    }

}
export default AdministarationPage