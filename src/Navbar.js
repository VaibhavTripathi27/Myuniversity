import React from 'react';
import logo from "./eduford_img/logo.png";
import "./App.css";
import About from "./About"

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

export default function Navbar() {
  
    return (
        <nav>
 <a href="index.html"><img src={logo} alt="logo" /></a>
 <div className="nav-links" id="navLinks">
   <i className="bi bi-x-lg" onClick={hideMenu}>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       fill="currentColor"
       className="bi bi-x-lg"
       viewBox="0 0 16 16"
     >
       <path
         fillRule="evenodd"
         d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
       />
       <path
         fillRule="evenodd"
         d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
       />
     </svg>
   </i>
   <ul>
     <li><a href="/">HOME</a></li>
     <li><a href="/About">ABOUT</a></li>
     <li><a href="/">COURSE</a></li>
     <li><a href="/">BLOG</a></li>
     <li><a href="/">CONTACT</a></li>
   </ul>
 </div>
 <i className="bi bi-list" onClick={showMenu}>
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width="16"
     height="16"
     fill="currentColor"
     className="bi bi-list"
     viewBox="0 0 16 16"
     >
     <path
       fillRule="evenodd"
       d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
       />
   </svg>
 </i>
</nav>
    )
}
