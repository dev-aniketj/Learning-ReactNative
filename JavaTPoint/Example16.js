import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

// React Native Positioning Element with Flex
// Example 3

export default class Example16 extends React.Component {
  state = {
    placeName: '',
    places: [],
  };
  placeNameChangeHolder = (val) => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    alert('Value : ' + this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={{ textAlign: 'center', width: '70%' }}
            placeholder="An awesome place"
            onChangeText={this.placeNameChangeHolder}
          />
          <Button
            style={{ width: '30%' }}
            title="Submit"
            onPress={this.placeSubmitHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
