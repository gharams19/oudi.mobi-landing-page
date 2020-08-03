import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
export default class Table1 extends Component {
    render() {
      return (
        <div id ="table1">
          <div className = "tableContainer">
              <table id = "t01">
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
                  <td id = "firstColumn">Cloud Firestore</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Cloud Functions for Firebase</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Cloud Storage for Firebase</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase A/B Testing</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Authentication</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Cloud Messaging</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Crash Reporting</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Crashlytics</td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Dynamic Links</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
                <tr>
                  <td id = "firstColumn">Firebase Hosting</td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faTimes} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                  <td><FontAwesomeIcon icon={faCheck} /></td>
                </tr>
  
              </table>
              </div>
  
        </div>
  
      );
    }
  }