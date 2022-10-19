import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

// React Native State

export default class Example3 extends Component {
  state: {
    password: string,
    isPasswordVisible: Boolean,
    toggleText: string,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      isPasswordVisible: true,
      toggleText: 'Show',
    };
  }

  handleToggle = () => {
    const { isPasswordVisible } = this.state;
    if (isPasswordVisible) {
      this.setState({ isPasswordVisible: false });
      this.setState({ toggleText: 'Hide' });
    } else {
      this.setState({ isPasswordVisible: true, toggleText: 'Show' });
    }
  };

  render() {
    return (
      <View style={styles.conatiner}>
        <TextInput
          secureTextEntry={this.state.isPasswordVisible}
          style={styles.text_input}
        />
        <TouchableOpacity onPress={this.handleToggle}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>
            {this.state.toggleText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    width: 300,
    height: 50,
    backgroundColor: '#a7a6a9',
    color: 'white',
    fontSize: 20,
  },
});
