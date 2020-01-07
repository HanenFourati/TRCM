import React from 'react'
import Volunteer from '../../Images/About_Us_Volunteer.png'
import Impartiality from '../../Images/Impartiality.png'
import Neutrality from '../../Images/Neutrality.png'
import Voluntary from '../../Images/Voluntary_Service.png'
import Unity from '../../Images/Unity.png'
import Universality from '../../Images/Universality.png'
import Humanity from '../../Images/Humanity.png'
import Independence from '../../Images/Independence.png'
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
           <p>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
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
           <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Qui ipsorum lingua Celtae, nostra Galli appellantur. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Contra legem facit qui id facit quod lex prohibet. Magna pars studiorum, prodita quaerimus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.</p>
        </div>
        <div className="About-Part-Two-Style">
            <img src={Volunteer} alt="" className="About-Part-Two-Img-Style"/>
            <div className="About-Part-Two-Para-Style">
               <h2>VOLUNTEER NEEDED</h2>
               <h4>WELCOME TO US</h4>
               <p>Vestibulum id ligula porta felis euismod semper donec ullamcorper nulla non metus auctor fringilla maecenas sed diam eget risus.</p>
               <button className="JoinUs-Button-Style">JOIN IN</button>
            </div>
        </div>
    </div>
  );
}

export default About
