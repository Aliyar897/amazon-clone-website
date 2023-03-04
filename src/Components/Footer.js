import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai';

export default function Footer() {
    const showSideBar = ()=>{
        let sidebar = document.getElementById('sidebar')
        sidebar.style.width = '0px';
        console.log('this is div sidebar'+ sidebar );
      }
      window.addEventListener('mouseup', (event)=>{
        const bx = document.getElementById('sidebar');
        if(event.target != bx){
            document.getElementById('sidebar').style.width = '0px' 
        }
    
    })

  return (
    <>
    <div id='footer'>
        <h1>Hello Footer</h1>
    </div>
    <div id='sidebar' className='bar'>
            <div id='sidebarbox'>
                <button onClick={showSideBar}><AiOutlineCloseSquare /> </button>            
            </div>
            Hello Sidebar
    </div>
    </>
  )
}
