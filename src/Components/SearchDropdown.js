import React from 'react'
import "../styles/commonstyles.css";

export default function SearchDropdown({item,setItem}) {
    

window.addEventListener('mouseup', (event)=>{
    const bx = document.getElementById('ddlist');
    if(event.target != bx){
        document.getElementById('ddlist').style.display = 'none' 
    }

})
  return (
    <>
    <div id="ddlist">
            <ul >
                <li>All documents</li>
                <li>Deals</li>
                <li>Laptops</li>
                <li>Computers</li>
                <li>Ipade</li>
                <li>Mobile</li>
                <li>Chair</li>
                <li>Coffee</li>
                <li>Soap</li>
                <li>Pills</li>
                <li>Grill</li>
                <li>Chain</li>
                <li>Lassers</li>
                <li>Food</li>
            </ul>
        </div>      
    </>
  )
}
