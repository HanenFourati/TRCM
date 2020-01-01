import React from 'react'
import { FaInstagram,FaMapMarkerAlt,FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare,FaEnvelope,FaTty} from 'react-icons/fa';
import '../CSSFiles/Footer.css'
const secondrow = [ { icon: <FaMapMarkerAlt/>, text: 'Metlaoui, 2130, TN'},
                    { icon: <FaEnvelope/>, text: 'crtm.info@gmail.com'},
                    { icon: <FaMapMarkerAlt/>, text: '(+216) 51 759 477'}
                ] 
function Location() {
  return (
    <div>
        <div>  
            <ul className="footer_link_style">
                <li><h5>Find Us</h5></li>
                {  secondrow.map(
                    (srmobj, i) => {
                        return (
                    <li className="footer_link_style"> {srmobj.icon}&nbsp;{srmobj.text}</li>
                            )
                        }
                    )
                }
            </ul>
            <div class="mapouter"><div class="gmap_canvas">
                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=metlaoui&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </div></div>
        </div>
    </div>
  );
}

export default Location
