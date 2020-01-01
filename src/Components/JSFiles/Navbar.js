import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram,FaFacebookF,FaYoutube,FaTwitter,FaEnvelope,FaPhone} from 'react-icons/fa';
import '../CSSFiles/Navbar.css'

const menuItems = [
    {value: 'Home', to: '/'},
    {value: 'About Us', to: '/about'},
    {value: 'Contact Us', to: '/contact'},
    {value: 'Our Work', to: '/works'}
 ]
class Navbar extends Component{ 
      render () { 
        const activeStyle = { color: 'rgb(233, 71, 71)' };
    
        return (
           <div className='Navbar-Style'>
               <div className="Navbar-One-Style">
                   <div className="Navbar-Part-One-Style">
                        <Link to="Home" className="Navbar-Part-One-Icon-Style"><FaFacebookF/></Link>
                        <Link to="Home" className="Navbar-Part-One-Icon-Style"><FaTwitter/></Link>
                        <Link to="Home" className="Navbar-Part-One-Icon-Style"><FaYoutube/></Link>
                        <Link to="Home" className="Navbar-Part-One-Icon-Style"><FaInstagram/></Link>
                   </div>
                   <div className="Navbar-Part-Two-Style">
                        <div><FaPhone/></div>
                        <div>(+216) 51 759 477</div>
                        <div><FaEnvelope /></div>
                        <div>crtm.info@gmail.com </div> 
                   </div>
                </div>  
                <div className="Navbar-Two-Style">
                    <div className="Navbar-Two-Logo-Div-Style">
                        <p className="Navbar-Two-Logo-Style">
                            <span style={{color: "rgb(233, 71, 71)", fontWeight: "bold"}}>
                                TRCM
                            </span> &nbsp;
                           <i>Humanity, Volunteering &amp; Neutrality</i>
                        </p>
                    </div>
                    <div className="Navbar-Two-Menu-Style">
                    {menuItems.map(menuItem => 
                       <Link className="Navbar-Links-Style"
                       style={this.props.active === menuItem.value ? activeStyle : {}} 
                       //  onClick={this._handleClick.bind(this, menuItem.value)}
                        to={menuItem.to}
                       > 
                         {menuItem.value}
                       </Link>
                    )}
                    </div>
                </div>
           </div>
        )    
      }
    
}
export default Navbar
