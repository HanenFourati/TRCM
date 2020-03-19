import React, { Component } from 'react'
import {FaChild,FaGlobeAfrica,FaHospital,FaHandHoldingHeart} from 'react-icons/fa'
import '../CSSFiles/Fields.css'
const FieldsTab=[{title:"HEALTH", 
                  paragrph:"Blood donation processes, requirements, hosting opportunities and more", 
                  icon: <FaHospital className="Filed-Display-icon-Style"/>},
                  {title:"VOLUNTEERING", 
                  paragrph:"Volunteers and staff work to deliver vital services, to respond in emergencies", 
                  icon: <FaGlobeAfrica className="Filed-Display-icon-Style"/>},
                  {title:"EDUCATION", 
                  paragrph:"We deliver aid and support programs to students and schools", 
                  icon: <FaChild className="Filed-Display-icon-Style"/>},
                  {title:"SUPPORT", 
                  paragrph:"We help families and communities recover from disasters", 
                  icon: <FaHandHoldingHeart className="Filed-Display-icon-Style"/>}]
class HomeFields extends Component{ 
      render () { 
        return (
            <div className="Fileds-Display-Style" >
                <h2>WHAT WE CAN DO FOR EACH OTHER !</h2>
                <p>Each day, thousands of people – people just like you – provide compassionate care to those in need. Our network of donors, volunteers and employees share a mission of preventing suffering, here at our home town and around the world</p>
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
