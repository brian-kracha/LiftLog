import React, { Component } from 'react'
import {
  View,
  Text,
  Stylesheet,
  TouchableHighlight,
  Button,
  Modal
} from "react-native"
import { range } from 'lodash'
import Modals from './Modals'
const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

export default class Month extends Component{

  render(){
    console.disableYellowBox = true
    return(
      <View>
        <Modals/>
          { this.renderWeeks() }
      </View>
    )
  }
  openWeeks
  renderWeeks() {
    let past_month_days = range(27, 31)
    let this_month_days = range(1, 30)
    let days = past_month_days.concat(this_month_days, past_month_days )
    let grouped_days = this.getWeeksArray(days)
    console.log(grouped_days);
    return grouped_days.map((week_days, index) => {
        return (
            <View key={index} style={styles.week_days}>
                { this.renderDays(week_days) }
            </View>
        )
    })
}
getWeeksArray(days) {
    var weeks_r = []
    var seven_days = []
    var count = 0
    days.forEach((day) => {
      count += 1
      seven_days.push(day)
      if(count == 7){
        weeks_r.push(seven_days)
        count = 0
        seven_days = []
      }
    });
    return weeks_r
}

renderDays(week_days) {
  console.log('days of the week',week_days);
    return week_days.map((day, index) => {

        return (

            <TouchableHighlight
              key= {index}
              style= {styles.day}
              onPress={() => {this.setModalVisible(true)}}
            >
              <Text style= {styles.day_text}>
                {day}
              </Text>
            </TouchableHighlight>

        );
    });
}
  handlePress(){
    console.log('pressed days')
    return null
  }

}
const styles = {

  week_days: {
    flexDirection: 'row',

  },
  day: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 15,
      margin: 2
  },
  day_text: {
      textAlign: 'center',
      color: '#A9A9A9',
      fontSize: 16,

  },
}
