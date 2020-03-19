import React from 'react'
import Volunteer from '../../Images/About_Us_Volunteer.png'
import Impartiality from '../../Images/Impartiality.png'
import Neutrality from '../../Images/Neutrality.png'
import Voluntary from '../../Images/Voluntary_Service.png'
import Unity from '../../Images/Unity.png'
import Universality from '../../Images/Universality.png'
import Humanity from '../../Images/Humanity.png'
import Independence from '../../Images/Independence.png'
import JoinModel from './JoinModel.js'
import '../CSSFiles/About.css'
let AboutTab=[{icon: Impartiality, text: "Impartiality"},{icon: Neutrality, text: "Neutrality"},
               {icon: Independence, text: "Independence"},{icon: Voluntary, text: "Voluntary service"},
               {icon: Unity, text: "Unity"},{icon: Universality, text: "Universality"},
               {icon: Humanity, text: "Humanity"}]
function About() {
  return (
    <div className="About-Style">
        <div className="About-Part-One-Style"> 
           <h2>ABOUT US</h2>
           <p>Tunisian red crescent in Metloui is  a part of the International Federation of Red Cross and Red Crescent Societies which is the world's largest humanitarian network that reaches 150 million people in 192 National Societies through the work of over 13,7 million volunteers. It is based on fundamental principles: </p>
           <div>
               <div className="About-Part-One-grid-Style">
                    {AboutTab.map((item)=>{
                        return(
                             <div className="About-Part-One-grid-cell-Style">
                                 <img className="About-Part-One-Img-Style" src={item.icon} />
                                 <p>{item.text}</p>
                             </div>
                        )
                    })}
               </div>
           </div>
           <p>Our mission is to support locals people in Metlaoui. We act during and after disasters and health emergencies to meet the needs and improve the lives of vulnerable people. our collective plan of action to tackle the major humanitarian challenges for Metloui local families. Our strength is in our volunteer network, our community-based expertise, and professionals.</p>
        </div>
        <div className="About-Part-Two-Style">
            <img src={Volunteer} alt="" className="About-Part-Two-Img-Style"/>
            <div className="About-Part-Two-Para-Style">
               <h2>VOLUNTEER NEEDED</h2>
               <h4>WELCOME TO US</h4>
               <p>Your time and talent can make a real difference in people’s lives. We welcome you to join us</p>
               
               <JoinModel/>
            </div>
        </div>
    </div>
  );
}

export default About
