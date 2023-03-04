import React, { useState } from "react";
import styles from "../styles/style.module.css";
import "../styles/commonstyles.css";
import logo from "../images/amazon_logo.PNG";
import { TiLocationOutline } from "react-icons/ti";
import { AiOutlineCaretDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchDropdown from "./SearchDropdown";

export default function Header_top() {
    const [item, setItem] = useState('Ali')
    const [isclicked, setIsClicked] = useState(false)
    let show =()=>{
        console.log('button clicked')
        document.getElementById('ddlist').style.display = 'block'
    }
    
  return (
    <>
      <div className="navbar">
        <div>
          <img id="logo" src={logo} />
        </div>
        <div className="location">
          <TiLocationOutline /> Deliver to <br />
          <br />
          <br /> Pakistan
        </div>
        <div id="ddown" className="dropdown" >
            <button onClick={show} className="dropdownbtn">{item} <AiOutlineCaretDown /></button>
            
            <input className="searchinput" type='text' placeholder="Search Amazon" ></input>
            <button id="searchbtn"><GoSearch />  </button>
       
        </div>


        <div id="language">
            <p>EN</p><AiOutlineCaretDown />
        </div>
        <div id="signin">
        <p>Hello sign in</p><AiOutlineCaretDown />
        </div>
        <div id="returnandorders">
        <p>Returns<br /><br /><br /> &#38; Orders</p>
        </div>
        <div id="cart">
        <AiOutlineShoppingCart />Cart
        </div>
      </div>
      <SearchDropdown item={item} setItem={setItem} />
    </>
  );
}
