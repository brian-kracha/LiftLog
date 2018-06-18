
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from './Components/Buttons'
import { range } from 'lodash'
import firebase from 'firebase'
import CalendarSelect from './Components/Calendar'
import WeekDay from './Components/Weekday'
import Month from './Components/Month'
import Modals from './Components/Modals'
// import GoogleCalendar from './Components/googleCalendar'
import HorizontalCalendar from './Components/horizontalCal'
import type Moment from 'moment'
import Dates from './Components/Dates'
import faker from 'faker'
import moment from 'moment'
import Events from './Components/Events'


export type EventType = {
  date: Moment,
  title: string,
  description: string,
  image: string,
  }
  const FAKE_EVENTS: Array<EventType> = (() => {
    const startDay = moment().subtract(5, 'days').startOf('day');
    return [...new Array(64)].map(_ => ({
      date: startDay.add(4, 'hours').clone(),
      title: faker.company.companyName(),
      description: faker.lorem.sentence(),
      // use random dimensions to get random urls
      image: faker.image.nightlife(Math.floor(Math.random() * 200) + 100, Math.floor(Math.random() * 200) + 100),
    }));
  })();

  // Filter events by date
  const filterEvents = (date: Moment): ?Array<EventType> =>
    FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));
// type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    // Initialize Firebase
      let data = fetch('https://www.googleapis.com/fitness/v1/users/me/dataSources')

    console.log(data);
    const config = {
      apiKey: "AIzaSyDLz51rM3lwAm9HfkJuRHeBg3sy27PyO4E",
      authDomain: "lift-log-634c0.firebaseapp.com",
      databaseURL: "https://lift-log-634c0.firebaseio.com",
      projectId: "lift-log-634c0",
      storageBucket: "",
      messagingSenderId: "464519657877"
    };
    var myApp = firebase.initializeApp(config);
    var defaultDatabase = myApp.database()
    console.log(myApp);
  }


    state = {
      events: filterEvents(moment()),
    };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };


  render() {
    console.disableYellowBox = true
    const { events } = this.state;
    return (

      <View style={{flex:1, backgroundColor:'#6c6cdd'}}>
        <Buttons/>
        <StatusBar hidden={true} />
        <HorizontalCalendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate}/>
        <Events events={events}/>


      </View>
    );
  }
}
