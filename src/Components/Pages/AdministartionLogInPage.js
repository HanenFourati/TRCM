import React,{Component} from 'react'
import Navbar from '../JSFiles/Navbar.js'
import LogIn from '../Administration/LogIn'
import Footer from '../JSFiles/Footer.js'
class AdministarationLogInPage extends Component{
    render(){
        return(
          <div>
              <Navbar active="none" />
              <LogIn id={this.props.id}/>
              <Footer/>
         </div>
        )
    }

}
export default AdministarationLogInPage