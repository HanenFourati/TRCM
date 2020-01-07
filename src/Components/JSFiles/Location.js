import React from 'react'
import { FaInstagram,FaMapMarkerAlt,FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare,FaEnvelope,FaTty} from 'react-icons/fa';
import '../CSSFiles/Location.css'
const secondrow = [ { icon: <FaMapMarkerAlt/>, text: `Next to VITA GROS Market, Main Street, Metlaoui, 2130, TN`},
                    { icon: <FaEnvelope/>, text: 'crtm.info@gmail.com'},
                    { icon: <FaTty/>, text: '(+216) 51 759 477'}
                ] 
function Location() {
  return (
    <div className="Location-Style">
        <div className="Location-Map-Style">
            <div className="gmap_canvas">
               <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=metlaoui&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
            </div>
        </div>
        <div className="Location-Contacts-Style">  
            <ul >
                <li><h5>WE WOULD LOVE TO WELCOME YOU TO OUR OFFICE</h5></li>
                {  secondrow.map(
                    (srmobj, i) => {
                        return (
                    <li> {srmobj.icon}&nbsp;{srmobj.text}</li>
                            )
                        }
                    )
                } 
            </ul>
        </div>
    </div>
  );
}

export default Location
