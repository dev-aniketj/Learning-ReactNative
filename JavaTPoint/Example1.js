import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

// React Native View

export default class Example1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.3, backgroundColor: '#ff44aa' }} />
        <View style={{ flex: 0.4, backgroundColor: '#ff8822' }} />
        <View
          style={{
            flex: 0.3,
            backgroundColor: '#88ffee',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 40,
              color: '#4d4d4d',
              fontSize: 18,
              letterSpacing: 2.25,
            }}>
            Hello World, My name is Aniket.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#f2f2f2',
  },
});
