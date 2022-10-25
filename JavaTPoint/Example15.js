import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class Example15 extends React.Component {
  state = {
    placeName: '',
    places: [],
  };

  placeNameChangeHolder = (val) => {
    this.state({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    alert('Value : ' + this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="An awesome place"
            onChangeText={this.placeNameChangeHolder}
          />
          <Button title="Submit" onPress={this.placeSubmitHandler} />
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
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
