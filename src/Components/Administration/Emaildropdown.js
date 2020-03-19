import React from 'react'
import {FaSortDown} from 'react-icons/fa'
import '../CSSFiles/Emaildropdown.css'
const dropdown= () =>
                    {
                    var dropdown = document.getElementsByClassName("dropdown-btnsyn")
                    var i
                    for (i = 0; i < dropdown.length; i++)
                        {
                        dropdown[i].addEventListener("click", 
                        function() {
                            this.classList.toggle("active")
                            var dropdownContent = this.nextElementSibling
                            if (dropdownContent.style.display === "block") 
                            {
                            dropdownContent.style.display = "none"
                            } 
                            else
                            {
                            dropdownContent.style.display = "block"
                            }
                        })
                        }
                    }
let Emaildropdown = (props) => 
<div>
   {props.givenTable.map((itemsobj, i) => {
               return (
                       <div className="question_answer_style">
                           <button className="dropdown-btnsyn" onClick={dropdown} >From {itemsobj.email} <FaSortDown/> </button>
                           <div className="dropdown-containersyn"> 
                               <h4> About: {itemsobj.subject}</h4>
                               <p> <span>First Name:</span> {itemsobj.fname} <span> Last Name:</span> {itemsobj.lname}</p>
                               <p><span> Content:</span> {itemsobj.content}</p>
                            </div>
                       </div>
                       )
                   }
           )  
   }
</div>

export default Emaildropdown