import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Example8 extends Component {
  render() {
    return (
      <View style={{marginTop:30}}>
        <View style={styles.blue1} />
        <View style={styles.blue2} />
        <View style={styles.blue3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue1: {
    width: 100,
    height: 100,
    backgroundColor: 'powderblue',
  },
  blue2: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
  },
  blue3: {
    width: 300,
    height: 300,
    backgroundColor: 'steelblue',
  },
});
