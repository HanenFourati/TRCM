import React, { Component } from 'react'
import '../CSSFiles/Partners.css'
const PartnersTab=["http://sitetemplate.demo.ithemeslab.com/riana/assets/images/sponsores/clients_3.png",
"http://sitetemplate.demo.ithemeslab.com/riana/assets/images/sponsores/clients_3.png",
"http://sitetemplate.demo.ithemeslab.com/riana/assets/images/sponsores/clients_3.png",
"http://sitetemplate.demo.ithemeslab.com/riana/assets/images/sponsores/clients_3.png",
"http://sitetemplate.demo.ithemeslab.com/riana/assets/images/sponsores/clients_3.png"]
class HomePartners extends Component{ 
      render () { 
        return (
            <div className="Partners-Style">
                <h2>OUR PARTNERS</h2>
                <div className="Partners-Images-Style" >{PartnersTab.map(Item => 
                        <div>
                            <img src={Item} />
                        </div>
                    )}
                </div>
            </div>
        );    
      }
    
}
export default HomePartners
