import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Flex Dimensions

export default class Example9 extends Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.powderblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  powderblue: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});
