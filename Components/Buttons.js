import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/glyphmaps/FontAwesome';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import currentDateIndex from './horizontalCal'


export default class Buttons extends Component{

  render(){
    return(
      <View style={styles.header}>
        <TouchableHighlight
          noDefaultStyles={true}
          onPress={() => this._handlePress()}
          style={styles.header_item}
        >
            <Text style={[styles.header_text]}> Menu</Text>

        </TouchableHighlight>

        <View style={styles.header_item}>
          <Text style={[styles.header_text, styles.text_center, styles.bold_text]}>Calendar</Text>
        </View>
        <View style={styles.header_item}>
          <TouchableHighlight onPress={() => this.goToToday()} >
          <Text style={[styles.header_text,
            styles.text_right]}>
              Today
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }


  _handlePress(){
    console.log('Pressed')
  }

goToToday(currentDateIndex){
  alert('today')
  return this.currentDateIndex
}


}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#329BCB',
    flexDirection: 'row',
    padding: 20
  },
  header_item: {
      flex: 1,

  },
  header_button: {
      flexDirection: 'row'
  },
  text_center: {
      textAlign: 'center'
  },
  text_right: {
      textAlign: 'right'
  },
  header_text: {
      color: '#fff',
      fontSize: 20
  },
  bold_text: {
      fontWeight: 'bold'
  },
})
