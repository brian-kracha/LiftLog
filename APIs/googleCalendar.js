import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  WebView
} from 'react-native'
import firebase from 'firebase'
import gapi from "https://apis.google.com/js/api.js"
export default class GoogleCalendar extends Component{

render(){
  return(
    <View>
      <WebView
        source={html:"
        <html>
  <head>
    <title>Say hello using the People API</title>
    <meta charset='utf-8' />
  </head>
  <body>
    <p>Say hello using the People API.</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize-button" style="display: none;">Authorize</button>
    <button id="signout-button" style="display: none;">Sign Out</button>

    <div id="content"></div>

    <script type="text/javascript">
      // Enter an API key from the Google API Console:
      //   https://console.developers.google.com/apis/credentials
      var apiKey = 'egyPHrluvYt7W_aC0QGPXFU';
      // Enter the API Discovery Docs that describes the APIs you want to
      // access. In this example, we are accessing the People API, so we load
      // Discovery Doc found here: https://developers.google.com/people/api/rest/
      var discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];
      // Enter a client ID for a web application from the Google API Console:
      //   https://console.developers.google.com/apis/credentials?project=_
      // In your API Console project, add a JavaScript origin that corresponds
      //   to the domain where you will be running the script.
      var clientId = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';
      // Enter one or more authorization scopes. Refer to the documentation for
      // the API or https://developers.google.com/people/v1/how-tos/authorizing
      // for details.
      var scopes = 'profile';
      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');
      function handleClientLoad() {
        // Load the API client and auth2 library
        gapi.load('client:auth2', initClient);
      }
      function initClient() {
        gapi.client.init({
            apiKey: apiKey,
            discoveryDocs: discoveryDocs,
            clientId: clientId,
            scope: scopes
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          makeApiCall();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }
      // Load the API and make an API call.  Display the results on the screen.
      function makeApiCall() {
        gapi.client.people.people.get({
          'resourceName': 'people/me',
          'requestMask.includeField': 'person.names'
        }).then(function(resp) {
          var p = document.createElement('p');
          var name = resp.result.names[0].givenName;
          p.appendChild(document.createTextNode('Hello, '+name+'!'));
          document.getElementById('content').appendChild(p);
        });
      }
    </script>
    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
  </body>
</html>
    /*  <html>
        <head>
          <title>Say hello using the People API</title>
          <meta charset='utf-8' />
        </head>
        <body>
          <p>Say hello using the People API.</p>


          <button id='authorize-button' style='display: none;'>Authorize</button>
          <button id='signout-button' style='display: none';>Sign Out</button>

          <div id='content'></div>

          <script type='text/javascript'>

            var apiKey = 'egyPHrluvYt7W_aC0QGPXFUF'

            var discoveryDocs = ['https:people.googleapis.com/$discovery/rest?version=v1'];

            var clientId = '946450286314-qe6jrpuafei2pfaikiou0hhu1q5p3cj5.apps.googleusercontent.com';

            var scopes = 'profile';
            var authorizeButton = document.getElementById('authorize-button');
            var signoutButton = document.getElementById('signout-button');
            function handleClientLoad() {
              // Load the API client and auth2 library
              gapi.load('client:auth2', initClient);
            }
            function initClient() {
              gapi.client.init({
                  apiKey: apiKey,
                  discoveryDocs: discoveryDocs,
                  clientId: clientId,
                  scope: scopes
              }).then(function () {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                authorizeButton.onclick = handleAuthClick;
                signoutButton.onclick = handleSignoutClick;
              });
            }
            function updateSigninStatus(isSignedIn) {
              if (isSignedIn) {
                authorizeButton.style.display = 'none';
                signoutButton.style.display = 'block';
                makeApiCall();
              } else {
                authorizeButton.style.display = 'block';
                signoutButton.style.display = 'none';
              }
            }
            function handleAuthClick(event) {
              gapi.auth2.getAuthInstance().signIn();
            }
            function handleSignoutClick(event) {
              gapi.auth2.getAuthInstance().signOut();
            }
          //  Load the API and make an API call.  Display the results on the screen.
            function makeApiCall() {
              gapi.client.people.people.get({
                'resourceName': 'people/me',
                'requestMask.includeField': 'person.names'
              }).then(function(resp) {
                var p = document.createElement('p');
                var name = resp.result.names[0].givenName;
                p.appendChild(document.createTextNode('Hello, '+name+'!'));
                document.getElementById('content').appendChild(p);
              });
            }
          </script>
          <script async defer src='https://apis.google.com/js/api.js'
            onload='this.onload=function(){};handleClientLoad()'
            onreadystatechange='if (this.readyState === 'complete') this.onload()'>
          </script>
        </body>
      </html>"}
      />
    </View>

      /**


      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */


    </script>

    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
  )
}
// *  Called when the signed in status changes, to update the UI
// *  appropriately. After a sign-in, the API is called.
// */
function updateSigninStatus(isSignedIn) {
 if (isSignedIn) {
   authorizeButton.style.display = 'none';
   signoutButton.style.display = 'block';
   listUpcomingEvents();
 } else {
   authorizeButton.style.display = 'block';
   signoutButton.style.display = 'none';
 }
}

/**
*  Sign in the user upon button click.
*/
handleAuthClick(event) {
 gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
handleSignoutClick(event) {
 gapi.auth2.getAuthInstance().signOut();
}

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
appendPre(message) {
 var pre = document.getElementById('content');
 var textContent = document.createTextNode(message + '\n');
 pre.appendChild(textContent);
}
// * Append a pre element to the body containing the given message
// * as its text node. Used to display the results of the API call.
// *
// * @param {string} message Text to be placed in pre element.
// */
appendPre(message) {
   var pre = document.getElementById('content');
   var textContent = document.createTextNode(message + '\n');
   pre.appendChild(textContent);
}

listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(function(response) {
      var events = response.result.items;
      appendPre('Upcoming events:');

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          appendPre(event.summary + ' (' + when + ')')
        }
      } else {
        appendPre('No upcoming events found.');
      }
    })
  }

  //  Append a pre element to the body containing the given message
  //  as its text node. Used to display the results of the API call.
  //
  //  @param {string} message Text to be placed in pre element.

 appendPre(message) {
   var pre = document.getElementById('content');
   var textContent = document.createTextNode(message + '\n');
   pre.appendChild(textContent);
 }

  }
