import React, { Component } from 'react'
import {FaChild,FaGlobeAfrica,FaHospital,FaHandHoldingHeart} from 'react-icons/fa'
import '../CSSFiles/Fields.css'
const FieldsTab=[{title:"HEALTH", 
                  paragrph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 
                  icon: <FaHospital className="Filed-Display-icon-Style"/>},
                  {title:"VOLUNTEERING", 
                  paragrph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 
                  icon: <FaGlobeAfrica className="Filed-Display-icon-Style"/>},
                  {title:"EDUCATION", 
                  paragrph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 
                  icon: <FaChild className="Filed-Display-icon-Style"/>},
                  {title:"SUPPORT", 
                  paragrph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 
                  icon: <FaHandHoldingHeart className="Filed-Display-icon-Style"/>}]
class HomeFields extends Component{ 
      render () { 
        return (
            <div className="Fileds-Display-Style" >
                <h2>WHAT WE CAN DO FOR EACH OTHER !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <div className="Filed-Display-Style">
                {FieldsTab.map(Item => 
                        <div>
                            {Item.icon}
                            <h5>{Item.title}</h5>
                            <p>{Item.paragrph}</p>
                        </div>
                    )}
                </div>
            </div>
        );    
      }
    
}
export default HomeFields
