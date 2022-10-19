import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// React Native style Example 1

export default class Example6 extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <Text style={styles.text1}>Text 1</Text>
        <Text style={styles.text2}>Text 2</Text>
        <Text style={styles.text3}>Text 3</Text>
        <Text style={[styles.text4, { color: 'orange' }]}>Text 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 12,
    color: '#262626',
    paddingHorizontal: 20,
  },
  text2: {
    fontSize: 18,
    color: '#404040',
    backgroundColor: '#ff99bb40',
    paddingHorizontal: 20,
  },
  text3: {
    fontSize: 24,
    color: '#595959',
    paddingHorizontal: 20,
  },
  text4: {
    fontSize: 30,
    paddingHorizontal: 20,
    color: '#737373',
  },
});
