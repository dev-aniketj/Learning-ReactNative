import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// React Native Align Items

export default class Example13 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.powderBlue} />
        <View style={styles.skyBlue} />
        <View style={styles.steelBlue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  powderBlue: {
    width: 75,
    height: 75,
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    width: 75,
    height: 75,
    backgroundColor: 'skyblue',
  },
  steelBlue: {
    height: 75,
    backgroundColor: 'steelblue',
  },
});
