import { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// React Native Props

export default class Example4 extends Component {
  render() {
    let imageUrl = {
      uri: 'https://pixabay.com/get/g621ac84f034645b16ef388f50e951fd89d3407ab1087807764e207fbd26e6beffe08aa13474309eea38551bfd439173eb82586c919fafedfb0f5264462a78d01cd438fead9bb4e5885dedeeada2651f5_1920.png',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Image
          source={imageUrl}
          style={{ width: 250, height: 250, alignSelf: 'center' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
});
