import React, { useState } from 'react'
import img from '../images/s2.jpg'
import "../styles/commonstyles.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider() {
    const rightclick = ()=>{
        document.getElementById('rightbtn');
        console.log('right btn was click')
    }

    return (
    <>
        <div id='slider'>
            <img src={img} height= '200px' width='100%'/>
            <button className='slidebtn' id='leftbtn'><IoIosArrowBack /></button>
            <button className='slidebtn' onClick={rightclick} id='rightbtn'><IoIosArrowForward /></button>
        </div>
    </>
  )
}
