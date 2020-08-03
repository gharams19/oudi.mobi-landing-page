import React, { Component } from 'react';
import logo from "../logo.png"

export default class NavBar2 extends Component {
    render() {
      function ShowSection(num) {
        document.getElementsByClassName("page")[0].style.display = "inline";
        document.getElementsByClassName("page")[1].style.display = "none";
        switch (num) {
          case 1: document.getElementById("home").scrollIntoView();
            break;
          case 2: document.getElementById("about").scrollIntoView();
            break;
          case 3: document.getElementById("subscribe").scrollIntoView();
            break;
          case 4: document.getElementById("privacy").scrollIntoView();
            break;
    
          default:
    
        }
      }
      return (
        <div >
        <img id = "logoImg2" alt = "" src = {logo}></img>
  
        
        <div id="navbar">
          <div id = "btnsSection">
          <btn onClick={() => ShowSection(1)}>Home</btn>
          <btn onClick={() => ShowSection(2)} >About</btn>
          <btn onClick={() => ShowSection(3)}>Subscribe</btn>
          <btn onClick={() => ShowSection(4)}>Privacy and Security</btn>
          </div>
        </div>
        </div>
      );
    }
}