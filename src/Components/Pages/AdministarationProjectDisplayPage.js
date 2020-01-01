import React,{Component} from 'react'
import ProjectItemDisplay from '../Administration/ProjetItemDisplay.js'
class AdministarationProjectDisplayPage  extends Component{
    render(){
        return(
          <div>
              <p>hello display</p>
              <ProjectItemDisplay id={this.props.id} adminid={this.props.adminid}/>
         </div>
        )
    }

}
export default AdministarationProjectDisplayPage