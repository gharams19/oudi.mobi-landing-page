import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLongArrowAltRight,
  faCircle,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="page">
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
            <p className="content">"Your voice is powerful"</p>
            <input type="text" placeholder="Your email" id="email"></input>
            <btn>Subscribe</btn>
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
              onClick={() => showPrivacyPage()}
              style={{ fontWeight: "400", marginLeft: "50px" }}
            >
              Continue reading <FontAwesomeIcon icon={faLongArrowAltRight} />
            </btn>
          </div>
        </section>
      </div>
      <div className="page">
        <h1>Privacy and Security OUDI.MOBI™</h1>
        <p style={{ textAlign: "center", color: "black" }}>March 27, 2020</p>
        <p style={{ textAlign: "center", color: "black", marginTop: "20px" }}>
          {" "}
          This page outlines OUDI.MOBI™ key security and privacy information.
        </p>
        <div id="privacy_page">
          <div className="contentContainer">
            <div className="title">Data protection</div>
            <p className="content">
              <div style={{ marginBottom: "20px" }}>
                OUDI.MOBI™ support GDPR and CCPA
              </div>
              On May 25th, 2018, the EU General Data Protection Regulation
              (GDPR) replaced the 1995 EU Data Protection Directive. On January
              1, 2020, the California Consumer Privacy Act (CCPA) takes effect.
              OUDI.MOBI™ are committed to be handling our customers data under
              these privacy regulations; as a social media software company.
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                The GDPR imposes obligations on data controllers and data
                processors, and the CCPA imposes obligations on businesses and
                their service providers. OUDI.MOBI™ customers typically act as
                the "data controller" (GDPR) or "business" (CCPA) for any
                personal data or information about their end-users they provide
                to OUDI.MOBI™ in connection with their use of the platform, and
                OUDI.MOBI™ generally operates as a "data processor" (GDPR) or
                "service provider" (CCPA).
              </div>
              This means that data is under the customer's control. Customers
              are responsible for obligations like fulfilling an individual's
              rights with respect to their personal data or information.
            </p>
          </div>
          <div className="contentContainer">
            <div className="title">
              OUDI.MOBI™ Data Processing and Security Terms
            </div>
            <p className="content">
              When customers use OUDI.MOBI™, OUDI.MOBI™ is generally a data
              processor under GDPR and processes personal data on their behalf.
              Similarly, when customers use OUDI.MOBI™, OUDI.MOBI™ generally
              operates as a service provider under the CCPA handling personal
              information on their behalf. OUDI.MOBI™ terms include{" "}
              <a href="https://oudimobi.com" target="blank" >https://oudimobi.com</a> detailing
              these responsibilities.
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                Certain OUDI.MOBI™ services governed by the{" "}
                <a href="https://cloud.google.com/terms/" target="blank">
                  Google Cloud Platform (GCP) Terms of Service
                </a>{" "}
                are already covered by associated data processing terms, the{" "}
                <a href="https://cloud.google.com/terms/data-processing-terms" target="blank">
                  GCP Data Processing and Security Terms.
                </a>{" "}
                A complete list of OUDI.MOBI™ services currently governed by the
                GCP Terms of Service is available in the{" "}
                <a href="https://firebase.google.com/terms/" target="blank">
                  Terms of Service for Firebase Services.
                </a>
              </div>
              OUDI.MOBI™ are governed by the{" "}
              <a href="https://firebase.google.com/terms/crashlytics" target="blank">
                Firebase Crashlytics and Firebase App Distribution Terms of
                Service
              </a>
              , and are covered by those{" "}
              <a href="https://firebase.google.com/terms/crashlytics-app-distribution-data-processing-terms/" target="blank">
                associated data processing terms
              </a>
              .
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                OUDI.MOBI™ analytics for Firebase and Google Analytics are
                governed by the{" "}
                <a href="https://firebase.google.com/terms/analytics" target="blank">
                  Google Analytics for Firebase Terms of Service
                </a>{" "}
                and the{" "}
                <a href="https://privacy.google.com/businesses/processorterms/" target="blank">
                  Google Analytics Terms
                </a>{" "}
                of Service, respectively, as well as the Google Ads Data
                Processing Terms. For additional information, refer to{" "}
                <a href="https://support.google.com/analytics/answer/6004245" target="blank">
                  Safeguarding your data
                </a>
                .
              </div>
              OUDI.MOBI™ is certified under major privacy and security standards
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                ISO and SOC compliance
              </div>
              All OUDI.MOBI™ services have successfully completed the{" "}
              <a href="https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27001.pdf" target="blank">
                ISO 27001
              </a>{" "}
              and{" "}
              <a href="https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc1report.html" target="blank">
                SOC 1
              </a>
              ,{" "}
              <a href="https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html" target="blank">
                SOC 2
              </a>
              , and{" "}
              <a href="https://firebase.google.com/downloads/gdpr/2019_Firebase_SOC3_Report.pdf" target="blank">
                SOC 3
              </a>{" "}
              evaluation process, and some have also completed the{" "}
              <a href="https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27017.pdf" target="blank">
                ISO 27017
              </a>{" "}
              and{" "}
              <a href="https://firebase.google.com/downloads/gdpr/2019_Firebase_ISO_27018.pdf" target="blank">
                ISO 27018
              </a>{" "}
              certification process:
            </p>
            <table className="table">
              <tr>
                <th>Service name</th>
                <th>ISO 27001</th>
                <th>ISO 27017</th>
                <th>ISO 27018</th>
                <th>SOC 1</th>
                <th>SOC 2</th>
                <th>SOC 3</th>
              </tr>
              <tr>
                <td>Cloud Firestore</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Cloud Functions for Firebase</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Cloud Storage for Firebase</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase A/B Testing</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase Authentication</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase Cloud Messaging</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase Crash Reporting</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase Crashlytics</td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
              </tr>
              <tr>
                <td>Firebase Dynamic Links</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <td>Firebase Hosting</td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faTimes} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>

            </table>
          </div>
          <div className="contentContainer">
            <div className="title">Privacy Shield Framework certifications</div>
            <p className="content">
              In July 2016, the European Commission concluded that the EU-U.S. Privacy Shield Framework provides an adequate mechanism to allow EU companies to comply with requirements under the Directive in connection with transfer of personal data from the European Union to the United States. OUDI.MOBI™ is certified under both the EU-U.S. and Swiss-U.S. Privacy Shield frameworks.

              <div style = {{marginTop: "20px", marginBottom: "20px" }}>Examples of end-user personal data processed by OUDI.MOBI™</div>

              Some OUDI.MOBI™ services process your end users' personal data to provide their service. The chart below has examples of how various OUDI.MOBI™ services use and handle end-user personal data. In addition, many OUDI.MOBI™ services offer the ability to request deletion of specific data or control how data is handled.
              </p>
          </div>
          <div className="contentContainer">
            <div className="title">Data processing information</div>
            <p className="content">              
            Guides for enabling opt-in for end-user personal data processing

            <div style = {{marginTop: "20px", marginBottom: "20px" }}>Services in the table above need some amount of end-user personal data to function. As a result, it's not possible to entirely disable data collection while using those services.</div>

            If you're a customer who would like to offer users a chance to opt-in to a service, and the data collection that comes with it, in most cases that just requires adding a dialog or settings toggle before using the service.

            <div style = {{marginTop: "20px", marginBottom: "20px" }}>Some OUDI.MOBI™ services, however, start up automatically when included in an app. To give users a chance to opt-in before using those services, you can choose to disable auto-initialization for each service, and manually initialize them at run time instead. To find out how, read the guides below:</div>

            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Cloud Messaging: <a href = "https://firebase.google.com/docs/cloud-messaging/android/client#prevent-auto-init" target="blank">Prevent Auto-initialization (Android)</a> or <a href = "https://firebase.google.com/docs/cloud-messaging/ios/client#prevent_auto_initialization" target="blank">Prevent Auto-initialization (IOS)</a></div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Crashlytics: <a href = "https://firebase.google.com/docs/crashlytics/customize-crash-reports#enable_opt-in_reporting" target="blank">Enable Opt-in Reporting</a></div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Crash Reporting: <a href = "https://firebase.google.com/docs/crash/disable-sdk" target="blank">Enable Opt-in Reporting</a></div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Performance Monitoring: <a href = "https://firebase.google.com/docs/perf-mon/disable-sdk" target="blank">Enable Opt-in Monitoring</a></div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Analytics: <a href = "https://firebase.google.com/docs/analytics/configure-data-collection" target="blank">Configure Analytics Data Collection</a></div>

            </p>
          </div>
          <div className="contentContainer">
            <div className="title">Data storage and processing locations</div>
            <p className="content">
              Unless a service or feature offers data location selection, OUDI.MOBI™ may process and store your data anywhere OUDI.MOBI™ or its agents maintain facilities. Potential facility locations vary.
            </p>
          </div>
          <div className="contentContainer">
            <div className="title">US-only services</div>
            <p className="content">
            <div style = {{marginTop: "20px", marginBottom: "20px" }}>A few OUDI.MOBI™  services are only run from US data centers. As a result, these services process data exclusively in the United States.</div>

            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Realtime Database</div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Hosting</div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Authentication</div>
            <div style = {{marginTop: "20px"}}><span style= {{fontWeight: "400"}}>Note:</span> Firebase Hosting caches response data in globally distributed content delivery servers to provide the service, but processes all requests in the United States.</div>
            </p>
          </div>
          <div className="contentContainer">
            <div className="title">Global services</div>
            <p className="content">
            The majority of OUDI.MOBI™ services run on global Google infrastructure. They could process data at any of the <a href = "https://cloud.google.com/about/locations/" target="blank">Google Cloud Platform locations</a> or <a href = "https://www.google.com/about/datacenters/inside/locations/index.html" target="blank">Google data center locations</a>. For some services you can make a specific <a href = "https://cloud.google.com/terms/#data_location" target="blank">Data Location Selection</a> which restricts processing to that location.

            <div style = {{marginTop: "20px", marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Cloud Storage for Firebase</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Cloud Firestore</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Cloud Functions for Firebase</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Performance Monitoring</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Crash Reportin</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Dynamic Links</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Remote Config</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Cloud Messaging</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Predictions</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Google Analytics</div>
            <div style = {{marginBottom: "10px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>ML Kit for Firebase</div>
            <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>Firebase Test Lab</div>

            </p>
          </div>
          <div className="contentContainer">
            <div className="title">OUDI.MOBI™  Security information (Data Encryption)</div>
            <p className="content">
            OUDI.MOBI™ services encrypt data in transit using HTTPS and logically isolate customer data.

            <div style = {{marginTop: "20px", marginBottom: "20px"}}>Security practices</div>

            To keep personal data safe, OUDI.MOBI™  employs extensive security measures to minimize access:

            <div style = {{marginTop: "20px"}}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>OUDI.MOBI™ restricts access to a select employees who have a business purpose to access personal data.</div>
            <div style = {{marginBottom: "20px" }}><FontAwesomeIcon icon={faCircle} style= {{fontSize: "10px", marginRight: "5px"}}/>OUDI.MOBI™ logs employee access to systems that contain personal data.</div>
            OUDI.MOBI™  only permits access to personal data by employees who sign in with Google Sign-In and <a href = "https://fidoalliance.org/case-study-series-google-security-keys-work/" target="blank">2-factor authentication</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
