import React from 'react'
import { GoThreeBars } from "react-icons/go";

export default function SecondNavbar() {
  const showSideBar = ()=>{
    let sidebar = document.getElementById('sidebar')
    sidebar.style.width = '400px';
    console.log('this is div sidebar'+ sidebar );
  }
  return (
    <>
      <div id='secondnavbar'>
              <ul>
                <li onClick={showSideBar} id='all'><GoThreeBars /><b>All</b></li>
                <li>Today's Deal</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
                <li id='shopnow'><b>Shop great deals now</b></li>
              </ul>
              
      </div>
    </>
  )
}
