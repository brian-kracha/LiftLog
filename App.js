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
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from './Components/Buttons'
import { range } from 'lodash';

import CalendarSelect from './Components/Calendar'
import WeekDay from './Components/Weekday'
import Month from './Components/Month'
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <View style={{flex:1}}>
        <Buttons/>
          <CalendarSelect/>
          <WeekDay/>
          <Month/>
        </View>
    );
  }
}