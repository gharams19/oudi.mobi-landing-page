import React, {Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component {
  render() {
    return (
      <div id = "navbar">
        <a href = "">Home</a>
        <a href = "">About</a>
        <a href = "">Subscribe</a>
        <a href = "">Privacy and Security</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
