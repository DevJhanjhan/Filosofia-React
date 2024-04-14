import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render() {
    return (
      <View style={{ width: '100%' }}>
        <Button color="red" title="Clique em mim"></Button>
      </View>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Meu segundo App</Text>
        <RedButton />
      </View>
    );
  }
}
