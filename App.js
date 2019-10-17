import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import FlashMessage from "react-native-flash-message";


import AppNavigator from './navigation/AppNavigator';
import SignIn from './screens/auth-screens/SignIn';
import SignUp from './screens/auth-screens/SignUp';
import store from './redux/store';
import Colors from './constants/Colors';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            backgroundColor: Platform.OS === 'ios' ? Colors.bgColor : Colors.DARKGRAY,
            height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
          }}>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor={Colors.darkBlue}
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        </View>
        <AppNavigator />
        <FlashMessage ref="myLocalFlashMessage" /> 
      </Provider>
    )
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
