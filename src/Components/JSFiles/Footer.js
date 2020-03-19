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
                    { icon: <FaEnvelope className="footer_icon_style"/>, text: 'croissant.rouge.metlaoui@gmail.com'},
                    { icon: <FaPhone className="footer_icon_style"/>, text: '(+216) 21 746 129'}
                ] 
class Footer extends Component {
    render () {
        return (
            <div>
                <div className="footer_section_style">
                    <div className="footer_section_style_partone">
                        <div id="footer_logo_section_style">
                            <h2 id="footer_logo_style">TRCM</h2>
                            <p> TRCM - Together, we act before, during and after disasters and health emergencies to improve the lives of vulnerable people. We do so without discrimination as to nationality, race, religious beliefs, class or political opinions. Our strength is in our volunteer network, by improving humanitarian standards, working as partners in development, responding to disasters, supporting healthier and safer communities.
                                {/* <p> &nbsp; Humanity, Volunteering &amp; Neutrality</p> */}</p>
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
                            &copy; {(new Date().getFullYear())} Copyright <Link to="/" style={{textDecoration: "none", color: "rgb(189, 189, 189)"}}> TRCM </Link> All rights reserved, Designed by Hanen Fourati
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}
export default Footer