import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  Stylesheet
} from 'react-native'

export default class Modals extends Component{
  state = {
    modalVisible: false
  }

  render() {

    return (
      <View style={{marginTop: 22,flexDirection:'row'}}>
        <Modal  animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');}}>

            <View style={styles.modal}>
              <Text style={styles.modal_text}>Opener? I hardly knew her</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>

        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Open er up brother!</Text>
        </TouchableHighlight>

      </View>
    );
  }
  setModalVisible(visible){
    console.log('opening', this.state.modalVisible)
    this.setState({modalVisible: visible});
  }

}
const styles= {
  modal:{
    borderRadius:15,
    width: 80,
    marginTop:22
  },
  modal_text:{
    textAlign:'center'
  }
}
