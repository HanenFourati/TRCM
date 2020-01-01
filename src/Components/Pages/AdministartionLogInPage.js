import React,{Component} from 'react'
import LogIn from '../Administration/LogIn'
class AdministarationLogInPage extends Component{
    render(){
        return(
          <div>
              <LogIn id={this.props.id}/>
         </div>
        )
    }

}
export default AdministarationLogInPage