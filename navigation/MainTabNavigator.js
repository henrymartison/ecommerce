import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

import JumiaHomeScreen from '../screens/JumiaHomeScreen'
import MainHome from '../screens/homeScreen/index'
import Account from '../screens/account/Account'
import Categories from '../screens/Categories'
import Saved from '../screens/account/Saved'

import Details from '../screens/homeScreen/DetailsScreen'
import Stores from '../screens/StoresScreen';
import Deals from '../screens/DealsScreen';
import SubDetails from '../screens/homeScreen/Sub-Screens/Sub-Details';
import Reviews from '../screens/homeScreen/Sub-Screens/Sub-Details/Description-Tabs/Reviews';
import Cart from '../screens/CartScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: MainHome,
    navigationOptions: {header: null}
  },
  Details: Details,
  SubDetails: SubDetails,
  ReviewsTab: Reviews,
  Cart: Cart
})
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => (
    <Icon name='md-home' size={25} color={tintColor} />
  )
}


const CategoriesStack = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {header: null}
  }
})
CategoriesStack.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon name='th-large' size={20} color={tintColor} />
  )
}

const AccountStack = createStackNavigator({
  Account: {screen: Account},
  Saved: Saved
})
AccountStack.navigationOptions = {
  tabBarLabel: 'account',
  tabBarIcon: ({tintColor}) => (
    <Icon name='ios-person' size={25} color={tintColor} />
  )
}

const StoresStack = createStackNavigator({
  Store: {screen: Stores},
})
StoresStack.navigationOptions = {
  tabBarLabel: 'Stores',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon name='store' size={18} color={tintColor} />
  )
}

const DealsStack = createStackNavigator({
  Deals: {screen: Deals},
})
DealsStack.navigationOptions = {
  tabBarLabel: 'Deals',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon name='tags' size={18} color={tintColor} />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  CategoriesStack,
  DealsStack,
  StoresStack,
  AccountStack,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      activeTintColor: '#D35400'
    }
  })
})