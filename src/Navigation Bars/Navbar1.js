import React, { Component } from 'react';
import logo from "../logo.png"

export default class NavBar1 extends Component {
    render() {
      return (
        <div >
        <img id = "logoImg" alt = "" src = {logo}></img>
  
        
        <div id="navbar">
          <div id = "btnsSection">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#subscribe">Subscribe</a>
          <a href="#privacy">Privacy and Security</a>
          </div>
        </div>
        </div>
      );
    }
  
}


