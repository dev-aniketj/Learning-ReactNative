import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import StyleComponent from '../components/Style/StyleComponent';

// React Native style Example 2

export default class Example7 extends Component {
  state = {
    myName: 'Name : \tAniket Jain',
    myMessage: 'Message : \tI am an Android Developer \nNow I am shifting on React Native.',
  };
  render() {
    return (
      <View style={{marginTop:60}}>
        <StyleComponent myState={this.state.myName}/>
        <StyleComponent myState={this.state.myMessage} />
      </View>
    );
  }
}
