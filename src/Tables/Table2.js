import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
export default class Table2 extends Component {

    render() {
      return (
        <div id ="table2">
          <div className = "tableContainer">
              <table id = "t01">
                <tr>
                  <th>Firebase Service</th>
                  <th style = {{textAlign: "center"}}>Personal Data</th>
                  <th style = {{textAlign: "center"}}>How data helps provide the service</th>
                </tr>
                <tr>
                  <td id = "firstColumn">Cloud Functions for Firebase</td>
                  <td><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>IP addresses</td>
                  <td>How it helps: Cloud Functions uses IP addresses to execute event-handling functions and HTTP functions based on end-user actions.
  
                      <div style = {{marginTop: "10px"}}>Retention: Cloud functions only saves IP addresses temporarily, to provide the service.</div></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Authentication</td>
                  <td>
                    <div><FontAwesomeIcon icon={faCircle}  style= {{fontSize: "6px", marginRight: "5px"}}/>Passwords</div>
                    <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>Email addresses</div>
                    <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/> Phone numbers</div>
                    <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/> User agents</div>
                    <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/> IP addresses</div>
                    </td>
                  <td>How it helps: Firebase Authentication uses the data to enable end-user authentication, and facilitate end-user account management. It also uses user-agent strings and IP addresses to provide added security and prevent abuse during sign-up and authentication.
  
                  <div style = {{marginTop: "10px"}}>Retention: Firebase Authentication keeps logged IP addresses for a few weeks. It retains other authentication information until the Firebase customer initiates deletion of the associated user, after which data is removed from live and backup systems within 180 days.</div></td>
                  
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Cloud Messaging</td>
                  <td><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>Instance IDs</td>
                  <td>How it helps: Firebase Cloud Messaging uses Instance IDs to determine which devices to deliver messages to.
  
                  <div style = {{marginTop: "10px"}}>Retention: Firebase retains Instance IDs until the Firebase customer makes an API call to delete the ID. After the call, data is removed from live and backup systems within 180 days.</div></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Crash Reporting</td>
                  <td>
                    <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>Instance IDs</div>
                  <div><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>Crash traces</div>
                  </td>
                  <td>How it helps: Crash Reporting uses crash stack traces to associate crashes with a project, send email alerts to project members and display them in the Firebase Console, and help Firebase customers debug crashes. It uses Instance IDs to measure number of users impacted by a crash.
  
                  <div style = {{marginTop: "10px"}}>Retention: Crash Reporting retains crash stack traces for 180 days. Firebase retains Instance IDs until the Firebase customer makes an API call to delete the ID. After the call, data is removed from live and backup systems within 180 days.</div></td>
                  
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Crashlytics</td>
                  <td></td>
                  <td>For more information on Crashlytics and end-user data processing, see the Crashlytics <a href =  "https://docs.fabric.io/apple/fabric/data-privacy.html#data-collection-policies" target="blank">Data Collection Policies.</a></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Dynamic Links</td>
                  <td><FontAwesomeIcon icon={faCircle} style= {{fontSize: "6px", marginRight: "5px"}}/>Device specs (iOS)</td>
                  <td>How it helps: Dynamic Links uses device specs on iOS to open newly-installed apps to a specific page or context.
  
                  <div style = {{marginTop: "10px"}}>Retention: Dynamic Links only stores device specs temporarily, to provide the service.</div></td>
                </tr>
              </table>
              </div>
  
        </div>
  
      );
    }
  }