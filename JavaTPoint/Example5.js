import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Using props in our own Component

class ChildClass extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.welcome}>
          Hello {this.props.name}, today is the good day.
        </Text>
      </View>
    );
  }
}

export default class Example5 extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 70 }}>
        <ChildClass name="Ashu" />
        <ChildClass name="Aman" />
        <ChildClass name="Max" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 18,
    lineHeight: 22,
    backgroundColor: '#ff0066',
    margin: 4,
    paddingHorizontal: 12,
    color: '#f9f9f9',
    fontWeight: '400',
    letterSpacing: 0.4,
  },
});
