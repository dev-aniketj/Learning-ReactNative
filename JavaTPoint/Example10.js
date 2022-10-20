import { Component } from 'react';
import { Alert, StyleSheet, View, Text, Button } from 'react-native';

export default class Example10 extends Component {
  onPressButton() {
    Alert.alert('You clicked the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButton} title="Press Me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="#009933"
          />
        </View>
        <View style={styles.multiButtonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Disable Button"
            disabled={true}
          />
          <Button onPress={this.onPressButton} title="Ok!" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
