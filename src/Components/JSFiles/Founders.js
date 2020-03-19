import React from 'react'
import teammemberone from '../../Images/teammemberone.jpg'
import teammembertwo from '../../Images/teammembertwo.jpg'
import teammemberthree from '../../Images/teammemberthree.jpg'
import teammemberfour from '../../Images/teammemberfour.jpg'
import '../CSSFiles/Founders.css'
let FoundersTab=[{img: teammemberone, 
                 Position: "President", Brief: "Miss Nihel Ben Salim"},
                 {img: teammembertwo, 
                 Position: "Vice president", Brief: "Miss Asma Ben Hassan"},
                 {img: teammemberthree, 
                 Position: "Disaster Response in charge", Brief: "Abdelhakim Boujellal"},
                 {img: teammemberfour, 
                 Position: "Public Relation Responsible", Brief: "Miss Nourhen Shimi "}
                ]
function Founders() { 
  return (
    <div>
        <h2>Founders</h2>
        <div  className="Founders-Style">
            {
                FoundersTab.map((item)=>{
                    return (
                        <div  className="Founders-Display-Style">
                            <img src={item.img} />
                            <h6>{item.Position}</h6>
                            <p>{item.Brief}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default Founders
