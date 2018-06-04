import React, { Component } from 'react';
import {
  View,
  Text,StyleSheet
} from 'react-native'
export default class WeekDay extends Component{

  render(){
    return (
      <View style={styles.weekday_view}>
      {this.renderWeekdays()}
      </View>
    )
  }

  renderWeekdays(){
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
      return weekdays.map(day => {
        console.log(day);
        return (<Text key={day} style={styles.weekday_text}> {day.toUpperCase()}</Text>)
      })
  }
}
const styles = {
  weekday_view: {

    flexDirection: 'row',
    paddingRight:15,

  },
  weekday_text: {
    textAlign:'center',
    color: '#C0C0C0',
    padding: 8
  }
}
