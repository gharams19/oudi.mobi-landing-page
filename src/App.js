import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <FontAwesomeIcon icon={faSearch} id="searchIcon" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#subscribe">Subscribe</a>
        <a href="#privacy">Privacy and Security</a>
      </div>
    );
  }
}

function App() {
  function showPrivacyPage() {
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("page")[1].style.display = "flex";

  }
  return (
    <div className="App">
      <div className= "page">
      <section id="home">
        <NavBar />
        <p className="goal">
          Oudi.mobi™ core mission is redifining freedom of speech
        </p>
      </section>
      <section id="about">
      <div className="contentContainer">
      <div className="title">About</div>
          <p className="content">
            Oudi.mobi™ is a UK based tech company, founded in 2018. The
            Oudi.mobi™ team has spent thousands of hours collecting data by
            studying nature and human natural environments. We have replicated
            the data collected to Oudi.mobi™ algorithms. Creating an immersive
            social media platform using the human voice. “Before you could type
            you could speak”; voice is the natural way of human communication.
            At Oudi.mobi™ we believe the keyboard has created a silent world.
            The keyboard is a tool to express “freedom of words not speech”.
            Oudi.mobi™ is a platform for freethinkers to express themselves.
            Oudi.mobi™ is officially{" "}
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
          Oudi.mobi™ is a voice only operated mobile social networking platform designed around the human voice. 
          No typing "Gone are the days of social media typing"
          </p>
        </div>
        <div className="contentContainer">
          <div className="title">Oudi.mobi™ focus</div>
          <p className="content">
          Voice is the future, we only specialize on the microphone and speaker, not the keyboard or camera. 
          Oudi.mobi™ use cutting edge voice technology. 
          </p>
        </div>
        <div className="contentContainer">
          <div className="title">What type of future are Oudi.mobi™ creating?</div>
          <p className="content">
          <div id = "futureContent">We are creating a world that does not exist, solving a problem billions of people don't know they have.</div> 
          <div id = "futureContent">By 2023 Oudi.mobi™ will be recognized as pioneers of a revolution; changing the status quo. Generation Z will be able to comfortably, as conventional thinking say;</div>
          <div id = "futureContent" style = {{ fontWeight: "400"}}>Kylie Jenner 2023;"Dude, you still type! Who does that anymore, are we still in 2019? OudiMe, i'm in the gym"</div>
          </p>
        </div>
        
      </section>
      <section id="subscribe">
        <div className = "contentContainer">
        <div className="title">Subscribe to get early access</div>
          <p className="content">
          "Your voice is powerful"
          </p>
          <input type = "text" placeholder="Your email" id = "email"></input><btn>Subscribe</btn>
        </div>
      </section>
      <section id="privacy">
      <div className = "contentContainer">
        <div className="title">Privacy and Security</div>
          <p className="content">
          This page outlines OUDI.MOBI™ key security and privacy information. Data protection OUDI.MOBI™ support GDPR and CCPA On May 25th, 2018, the EU General Data Protection Regulation (GDPR) replaced the 1995...
          </p>
          <btn onClick = {()=> showPrivacyPage()} style = {{fontWeight: "400", marginLeft: "50px"}}>Continue reading <FontAwesomeIcon icon={faLongArrowAltRight} /></btn>
        </div>
      </section>
      </div>
      <div className="page">
      <h1>Privacy and Security OUDI.MOBI™</h1>
          <p style = {{textAlign: "center", color: "black"}}>March 27, 2020</p>
          <p style = {{textAlign: "center", color: "black", marginTop: "20px"}}> This page outlines OUDI.MOBI™ key security and privacy information.</p>
        <div id = "privacy_page">
        <div className="contentContainer">
            <div className="title">Data protection</div>
            <p className="content">
            <div style={{marginBottom: "20px"}}>OUDI.MOBI™ support GDPR and CCPA</div>
            On May 25th, 2018, the EU General Data Protection Regulation (GDPR) replaced the 1995 EU Data Protection Directive. On January 1, 2020, the California Consumer Privacy Act (CCPA) takes effect. OUDI.MOBI™ are committed to be handling our customers data under these privacy regulations; as a social media software company.
            <div style = {{marginTop: "20px", marginBottom: "20px"}}>The GDPR imposes obligations on data controllers and data processors, and the CCPA imposes obligations on businesses and their service providers. OUDI.MOBI™ customers typically act as the "data controller" (GDPR) or "business" (CCPA) for any personal data or information about their end-users they provide to OUDI.MOBI™  in connection with their use of the platform, and OUDI.MOBI™ generally operates as a "data processor" (GDPR) or "service provider" (CCPA).</div>
            This means that data is under the customer's control. Customers are responsible for obligations like fulfilling an individual's rights with respect to their personal data or information.
            </p>
          </div>
        <div className="contentContainer">
          <div className="title">OUDI.MOBI™ Data Processing and Security Terms</div>
          <p className="content">
            When customers use OUDI.MOBI™, OUDI.MOBI™ is generally a data processor under GDPR and processes personal data on their behalf. Similarly, when customers use OUDI.MOBI™, OUDI.MOBI™ generally operates as a service provider under the CCPA handling personal information on their behalf. OUDI.MOBI™ terms include <a href ="https://oudimobi.com">https://oudimobi.com</a> detailing these responsibilities.

            <div style = {{marginTop: "20px", marginBottom: "20px"}}>Certain OUDI.MOBI™ services governed by the <a href = "https://cloud.google.com/terms/">Google Cloud Platform (GCP) Terms of Service</a> are already covered by associated data processing terms, the <a href = "https://cloud.google.com/terms/data-processing-terms">GCP Data Processing and Security Terms.</a> A complete list of OUDI.MOBI™ services currently governed by the GCP Terms of Service is available in the <a href = "https://firebase.google.com/terms/">Terms of Service for Firebase Services.</a></div>

            OUDI.MOBI™ are governed by the <a href = "https://firebase.google.com/terms/crashlytics">Firebase Crashlytics and Firebase App Distribution Terms of Service</a>, and are covered by those <a href = "https://firebase.google.com/terms/crashlytics-app-distribution-data-processing-terms/">associated data processing terms</a>.

            <div style = {{marginTop: "20px", marginBottom: "20px"}}>OUDI.MOBI™ analytics for Firebase and Google Analytics are governed by the <a href = "https://firebase.google.com/terms/analytics">Google Analytics for Firebase Terms of Service</a> and the <a href =  "https://privacy.google.com/businesses/processorterms/">Google Analytics Terms</a> of Service, respectively, as well as the Google Ads Data Processing Terms. For additional information, refer to <a href = "https://support.google.com/analytics/answer/6004245">Safeguarding your data</a>.</div>

            OUDI.MOBI™ is certified under major privacy and security standards

            <div style = {{marginTop: "20px", marginBottom: "20px"}}>ISO and SOC compliance</div>

            All OUDI.MOBI™ services have successfully completed the <a href = "https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27001.pdf">ISO 27001</a> and <a href = "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc1report.html">SOC 1</a>, <a href = "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html">SOC 2</a>, and <a href = "https://firebase.google.com/downloads/gdpr/2019_Firebase_SOC3_Report.pdf">SOC 3</a> evaluation process, and some have also completed the <a href = "https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27017.pdf">ISO 27017</a> and <a href = "https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27018.pdf">ISO 27018</a> certification process:
          </p>
          </div>
        </div>
        
          </div>
          
    </div>
  
  );
}

export default App;
