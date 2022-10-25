import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

// React Native Positioning Element with Flex
// Example 1

export default class Example14 extends React.Component {
  state = {
    placeName: '',
    palces: [],
  };

  placeNameChangedHandler = (val) => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    alert('Message : ' + this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button title="Submit" onPress={this.placeSubmitHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
