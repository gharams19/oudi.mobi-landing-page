import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import NavBar1 from "../Navigation Bars/Navbar1";
import AppImg from "../App.jpeg";
export default class MainPage extends Component {
  render() {
    function showPage(num) {
      if (num === 1) {
        document.getElementsByClassName("page")[0].style.display = "none";
        document.getElementsByClassName("page")[1].style.display = "flex";
        window.scrollTo(0, 0);
      } else {
        document.getElementsByClassName("page")[0].style.display = "inline";
        document.getElementsByClassName("page")[1].style.display = "none";
        window.scrollTo(0, 0);
      }
    }
    function Subscribe() {
      var input = document.getElementById("email");
      if (input.value.length === 0) {
        alert("Please enter a valid email address");
      } else {
        input.style.display = "none";
        document.getElementById("SubBtn").style.display = "none";
        document.getElementById("thanksForSub").style.display = "inline";
      }
    }
    return (
      <div className="page">
        <section id="home">
          <NavBar1 />
          <p className="goal">
            Oudi.mobi™ core mission is redifining freedom of speech
          </p>
        </section>
        <section id="home2">
          <div className="contentContainer">
            <div className="title">Voice is the future</div>
            <p className="content">
              <iframe
               title = "Voice is the future"
                id = "video"
                width="1050"
                height="600"
                src="https://www.youtube.com/embed/4ILHrmbDaRY"
                frameborder="0"
                allowFullScreen
              ></iframe>
            </p>
          </div>
        </section>
        <section id="about">
          <div className="contentContainer">
            <div className="title">About</div>
            <p className="content">
              Oudi.mobi™ is a UK based tech company, founded in 2018. The
              Oudi.mobi™ team has spent thousands of hours collecting data by
              studying nature and human natural environments. We have replicated
              the data collected to Oudi.mobi™ algorithms. Creating an immersive
              social media platform using the human voice. “Before you could
              type you could speak”; voice is the natural way of human
              communication. At Oudi.mobi™ we believe the keyboard has created a
              silent world. The keyboard is a tool to express “freedom of words
              not speech”. Oudi.mobi™ is a platform for freethinkers to express
              themselves. Oudi.mobi™ is officially{" "}
              <span style={{ fontWeight: "400" }}>
                the first on the go social media platform in the world
              </span>
              . It’s easy to use (PASSIVE), extremely fast and effective for
              communication with intent. "All you need is your voice"
            </p>
          </div>
          <div className="contentContainer">
            <div className="title">What is Oudi.mobi™</div>
            <p className="content">
              Oudi.mobi™ is a voice only operated mobile social networking
              platform designed around the human voice. No typing "Gone are the
              days of social media typing"
            </p>
            <img id = "appImg" src = {AppImg} alt = ""></img>

          </div>
          <div className="contentContainer">
            <div className="title">Oudi.mobi™ focus</div>
            <p className="content">
              Voice is the future, we only specialize on the microphone and
              speaker, not the keyboard or camera. Oudi.mobi™ use cutting edge
              voice technology.
            </p>
          </div>
          <div className="contentContainer">
            <div className="title">
              What type of future are Oudi.mobi™ creating?
            </div>
            <p className="content">
              <div id="futureContent">
                We are creating a world that does not exist, solving a problem
                billions of people don't know they have.
              </div>
              <div id="futureContent">
                By 2023 Oudi.mobi™ will be recognized as pioneers of a
                revolution; changing the status quo. Generation Z will be able
                to comfortably, as conventional thinking say;
              </div>
              <div id="futureContent" style={{ fontWeight: "400" }}>
                Kylie Jenner 2023;"Dude, you still type! Who does that anymore,
                are we still in 2019? OudiMe, i'm in the gym"
              </div>
            </p>
          </div>
        </section>
        <section id="subscribe">
          <div className="contentContainer">
            <div className="title">Subscribe to get early access</div>
            <p className="content">
              <div style={{ marginBottom: "20px" }}>
                "Your voice is powerful"
              </div>
              <div id="thanksForSub">Thank you for subscribing!</div>
            </p>
            <div id="inputSection">
              <input type="text" placeholder="Your email" id="email"></input>
              <btn id="SubBtn" onClick={() => Subscribe()}>
                Subscribe
              </btn>
            </div>
          </div>
        </section>
        <section id="privacy">
          <div className="contentContainer">
            <div className="title">Privacy and Security</div>
            <p className="content">
              This page outlines OUDI.MOBI™ key security and privacy
              information. Data protection OUDI.MOBI™ support GDPR and CCPA On
              May 25th, 2018, the EU General Data Protection Regulation (GDPR)
              replaced the 1995...
            </p>
            <btn
              onClick={() => showPage(1)}
              style={{ fontWeight: "400", marginLeft: "50px" }}
            >
              Continue reading <FontAwesomeIcon icon={faLongArrowAltRight} />
            </btn>
          </div>
        </section>
        <footer>
          <a href="#home">Home</a>© 2020, Oudi.mobi
        </footer>
      </div>
    );
  }
}
