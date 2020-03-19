import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FaAlignJustify,FaInstagram,FaFacebookF,FaYoutube,FaTwitter,FaEnvelope,FaPhone} from 'react-icons/fa';
import '../CSSFiles/Navbar.css'

const menuItems = [
    {value: 'Home', to: '/'},
    {value: 'About Us', to: '/about'},
    {value: 'Contact Us', to: '/contact'},
    {value: 'Our Work', to: '/works'}
 ]
class Navbar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            toggle:false
            }
        this.Toggle = this.Toggle.bind(this)
      }
    Toggle = () => {
            this.setState({toggle:!this.state.toggle})
        }

    render () { 
      const activeStyle = { color: 'rgb(233, 71, 71)' };
  
      return (
         <div className='Navbar-Style'>
             <div className="Navbar-One-Style">
                 <div className="Navbar-Part-One-Style">
                      <a href="https://www.facebook.com/%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D9%84%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A-%D8%A8%D8%A7%D9%84%D9%85%D8%AA%D9%84%D9%88%D9%8A-1410435105730978/" className="Navbar-Part-One-Icon-Style"><FaFacebookF/></a>
                      
                      <a href="https://www.youtube.com/channel/UCg7eaVk8GzB6EwkjuKu_xMw" className="Navbar-Part-One-Icon-Style"><FaYoutube/></a>
                      <a href="/" className="Navbar-Part-One-Icon-Style"><FaInstagram/></a>
                      <a href="/" className="Navbar-Part-One-Icon-Style"><FaTwitter/></a>
                 </div>
                 <div className="Navbar-Part-Two-Style">
                      <div><FaPhone/></div>
                      <div>(+216) 21 746 129</div>
                      <div><FaEnvelope /></div>
                      <div>croissant.rouge.metlaoui@gmail.com </div> 
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
                      <div className="navBar-Big-Screen">
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
                      <div className="Navbar-Two-Menu-Style-navBar-Small-Screen">
                        <div className="navBar-Small-Screen">
                            <button onClick={this.Toggle} className="button-decoration-Small-Screen">
                                  <FaAlignJustify />
                            </button>
                         </div>
                         <div className="Navs-display-direction-Small-Screen">
                           <div className={this.state.toggle ? "links-Small-Screen show-nav-Small-Screen" : "links-Small-Screen"}>
                               <div className="Navs-display-direction-Small-Screen">
                                   {menuItems.map(menuItem => 
                                      <Link className="Navbar-Links-Style"
                                      style={this.props.active === menuItem.value ? activeStyle : {}} 
                                      //  onClick={this._handleClick.bind(this, menuItem.value)}
                                       to={menuItem.to}
                                       toggle={this.state.toggle}
                                      > 
                                        {menuItem.value}
                                      </Link>
                                   )}
                               </div>
                            </div>
                         </div>
                      </div>
                </div>
              </div>
         </div>
      )    
    }
    
}
export default Navbar
