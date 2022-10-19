import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

const StyleComponent = (props) => {
  return (
    <View>
      <Text style={styles.myState}>{props.myState}</Text>
    </View>
  );
};

export default StyleComponent;

const styles = StyleSheet.create({
  myState: {
    marginTop: 5,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
