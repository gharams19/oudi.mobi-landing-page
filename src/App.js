import React, {Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component {
  render() {
    return (
      <div id = "navbar">
        <FontAwesomeIcon icon = {faSearch} id = "searchIcon"/>
        <a href = "#home">Home</a>
        <a href = "#about">About</a>
        <a href = "#subscribe">Subscribe</a>
        <a href = "#privacy">Privacy and Security</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <section id = "home">
        <NavBar/>
        <p className="content">Oudi.mobi™ core mission is redifining freedom of speech</p>
      </section>
      <section id = "about">
        <h1 className="title">
          About
        </h1>
        <div className="contentContainer">

        </div>
      </section>
      <section id = "subscribe">

      </section>
      <section id = "privacy">

      </section>
      

    </div>
  );
}

export default App;
