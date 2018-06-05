/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from './Components/Buttons'
import { range } from 'lodash'
import firebase from 'firebase'
import CalendarSelect from './Components/Calendar'
import WeekDay from './Components/Weekday'
import Month from './Components/Month'
import Modals from './Components/Modals'
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDLz51rM3lwAm9HfkJuRHeBg3sy27PyO4E",
      authDomain: "lift-log-634c0.firebaseapp.com",
      databaseURL: "https://lift-log-634c0.firebaseio.com",
      projectId: "lift-log-634c0",
      storageBucket: "",
      messagingSenderId: "464519657877"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (

      <View style={{flex:1}}>
        <Buttons/>
          <CalendarSelect/>
          <WeekDay/>
          <Month/>
          <Modals/>
      </View>
    );
  }
}
