import React, { Component } from 'react';
import { Text, View } from 'react-native';

// React Native State

export default class Example2 extends Component {
  state = {
    myState: 'I am good in React Native',
    myValue: 20,
  };
  updateState = () => {
    this.setState({
      myState: 'Now I am a React Native Developer',
      myValue: 100,
    });
  };

  render() {
    return (
      <View>
        <Text
          onPress={this.updateState}
          style={{ marginTop: 60, marginStart: 20 }}>
          Message : {this.state.myState}
        </Text>
        <Text
          onPress={this.updateState}
          style={{ marginTop: 10, marginStart: 20 }}>
          Value : {this.state.myValue}
        </Text>
      </View>
    );
  }
}
