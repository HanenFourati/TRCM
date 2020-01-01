import React from 'react'
import '../CSSFiles/About.css'
let AboutTab=[{icon: "a", text: "a"},{icon: "a", text: "a"},
               {icon: "a", text: "a"},{icon: "a", text: "a"},
               {icon: "a", text: "a"},{icon: "a", text: "a"}]
function About() {
  return (
    <div>
        <div>
           <h2>About us</h2>
           <p>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
           <div>
               {AboutTab.map((item)=>{
                   return(
               <div>{item.icon} {item.text}</div>
                   )
               })}
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Qui ipsorum lingua Celtae, nostra Galli appellantur. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Contra legem facit qui id facit quod lex prohibet. Magna pars studiorum, prodita quaerimus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.</p>
        </div>
        <div>
            <img src="" alt="" />
            <h3>Volunteer Needed</h3>
            <h2>Welcome to us</h2>
            <p>Vestibulum id ligula porta felis euismod semper donec ullamcorper nulla non metus auctor fringilla maecenas sed diam eget risus.</p>
            <button>Join Us</button>
        </div>
    </div>
  );
}

export default About
