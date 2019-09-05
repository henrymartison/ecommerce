import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignIn from '../screens/auth-screens/SignIn';
import SignUp from '../screens/auth-screens/SignUp';
import AuthLoadingScreen from '../screens/auth-screens/AuthLoadingScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    // AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    // Auth: AuthStack
  })
);

// const AuthStack = createStackNavigator({
//   SignIn: SignIn,
//   SignUp: SignUp
// })
