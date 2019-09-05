import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import SignIn from './screens/auth-screens/SignIn';
import SignUp from './screens/auth-screens/SignUp';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}

const AuthStack = createSwitchNavigator({
  SignIn: SignIn,
  SignUp: SignUp
})

const AppContainer = createAppContainer(AuthStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
