import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaMapMarkerAlt,FaEnvelope,FaPhone} from 'react-icons/fa';
import '../CSSFiles/Footer.css'
const firstrow = [ { text: 'Home', to: '/'},
                   { text: 'About us', to: '/about'},
                   { text: 'Contact Us', to: '/contact'},
                   { text: 'Our works', to: '/works'}
                ]
const secondrow = [ { icon: <FaMapMarkerAlt className="footer_icon_style"/>, text: 'Metlaoui, 2130, TN'},
                    { icon: <FaEnvelope className="footer_icon_style"/>, text: 'crtm.info@gmail.com'},
                    { icon: <FaPhone className="footer_icon_style"/>, text: '(+216) 51 759 477'}
                ] 
class Footer extends Component {
    render () {
        return (
            <div>
                <div className="footer_section_style">
                    <div className="footer_section_style_partone">
                        <div id="footer_logo_section_style">
                            <h2 id="footer_logo_style">TRCM</h2>
                            <p>TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
                                TED began in 1984 as a conference where Technology, Entertainment 
                                and Design converged, and today covers almost all topics — from science to business to global issues</p>
                            {/* <p> &nbsp; Humanity, Volunteering &amp; Neutrality</p> */}
                        </div>
                        <div>
                            <ul className="footer_link_style">
                                <li><h5 style={{color:"rgb(189, 189, 189)"}}>Explore</h5></li>
                                { firstrow.map(
                                        (fsmobj, i) => {
                                            return (
                                            <li><Link className="footer_link_style" to={fsmobj.to} >{fsmobj.text}</Link></li>
                                                )
                                            }
                                        )
                                }
                            </ul>
                        </div>
                        <div>  
                            <ul className="footer_link_style">
                                <li><h5 style={{color:"rgb(189, 189, 189)"}}>Find Us</h5></li>
                                {  secondrow.map(
                                    (srmobj, i) => {
                                        return (
                                    <li className="footer_link_style"> {srmobj.icon}&nbsp;{srmobj.text}</li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="footer_section_style_partthree">
                        <div>
                            &copy; {(new Date().getFullYear())} Copyright <Link to="/" style={{textDecoration: "none", color: "rgb(189, 189, 189)"}}> RCM </Link> All rights reserved 
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}
export default Footer