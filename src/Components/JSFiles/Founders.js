import React from 'react'
import '../CSSFiles/Founders.css'
let FoundersTab=[{img: "http://sitetemplate.demo.ithemeslab.com/riana/assets/images/team/avatar_2.jpg", 
                 Position: "CEO", Brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"},
                 {img: "http://sitetemplate.demo.ithemeslab.com/riana/assets/images/team/avatar_2.jpg", 
                 Position: "CEO", 
                 Brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"},
                 {img: "http://sitetemplate.demo.ithemeslab.com/riana/assets/images/team/avatar_2.jpg", 
                 Position: "CEO", 
                 Brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"},
                 {img: "http://sitetemplate.demo.ithemeslab.com/riana/assets/images/team/avatar_2.jpg", 
                 Position: "CEO", 
                 Brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}]
function Founders() {
  return (
    <div>
        <h2>Founders</h2>
        <div>
            {
                FoundersTab.map((item)=>{
                    return (
                        <div>
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
