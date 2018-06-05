import React, { Component } from 'react';
import {

  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';

export default class Calendar extends Component{

  render(){
    let years =  range(2018,2020)
    
    return(

      <View style={styles.calendar_header}>
      <View style={styles.calendar_header_item}>
          <TouchableHighlight
              noDefaultStyles={true}
              title='year'
          >
            <Icon name="chevron-left" size={18} color="#333" />
          </TouchableHighlight>
          <Text style={styles.calendar_header_text}>2013</Text>
          <TouchableHighlight
              noDefaultStyles={true}
              title='month'
          >
              <Icon name="chevron-right" size={18} color="#333" />
          </TouchableHighlight>
      </View>


      <View style={styles.calendar_header_item}>
          <TouchableHighlight
              noDefaultStyles={true}
              title='week'
          >
              <Icon name="chevron-left" size={18} color="#333" />
          </TouchableHighlight>
          <Text style={styles.calendar_header_text}> November </Text>
          <TouchableHighlight
              noDefaultStyles={true}
              title='wat?'
          >
              <Icon name="chevron-right" size={18} color="#333" />
          </TouchableHighlight>
      </View>


  </View>

    )
  }

}
const styles ={
  calendar_header: {
  flexDirection: 'row'
},
calendar_header_item: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 15,
  paddingRight: 40,
  paddingLeft: 40,

},
calendar_header_text: {
  fontWeight: 'bold',
  fontSize: 20
},

};
