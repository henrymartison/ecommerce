import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import {TabBar} from 'react-native-animated-nav-tab-bar'

import JumiaHomeScreen from '../screens/JumiaHomeScreen'
import MainHome from '../screens/homeScreen/index'
import Account from '../screens/account/Account'
import Categories from '../screens/Categories'
import Saved from '../screens/account/screens/Saved'

import Details from '../screens/homeScreen/DetailsScreen'
import Stores from '../screens/StoresScreen';
import Deals from '../screens/DealsScreen';
import SubDetails from '../screens/homeScreen/Sub-Screens/Sub-Details';
import Reviews from '../screens/homeScreen/Sub-Screens/Sub-Details/Description-Tabs/Reviews';
import Cart from '../screens/CartScreen';

import Settings from '../screens/account/screens/Settings/Settings';
import RecentlyViewed from '../screens/account/screens/RecentlyViewed';
import CompleteOrder from '../screens/homeScreen/CheckOut/CompleteOrder';
import Payment from '../screens/homeScreen/CheckOut/Payment';
import OrderSummary from '../screens/homeScreen/CheckOut/OrderSummary';


const HomeStack = createStackNavigator({
  Home: {
    screen: MainHome,
    navigationOptions: {header: null}
  },
  Details: Details,
  SubDetails: SubDetails,
  ReviewsTab: Reviews,
  Cart: Cart,
  CompleteOrder: CompleteOrder,
  Payment: Payment,
  Summary: OrderSummary
})
HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0){
    tabBarVisible = false
  }
  return{
    tabBarVisible,

    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
    <Icon name='home' size={20} color={tintColor} />
  )
  }
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
    <Icon name='grid' size={20} color={tintColor} />
  )
}

const AccountStack = createStackNavigator({
  Account: {screen: Account},
  Saved: Saved,
  Settings: Settings,
  RecentlyViewed: RecentlyViewed
})

AccountStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,

    tabBarLabel: 'account',
    tabBarIcon: ({tintColor}) => (
    <Icon name='user' size={20} color={tintColor} />
  )
  }
}

const StoresStack = createStackNavigator({
  Store: {screen: Stores},
})
StoresStack.navigationOptions = {
  tabBarLabel: 'Stores',
  tabBarIcon: ({tintColor}) => (
    <Icon name='shopping-bag' size={20} color={tintColor} />
  )
}

const DealsStack = createStackNavigator({
  Deals: {screen: Deals},
})
DealsStack.navigationOptions = {
  tabBarLabel: 'Deals',
  tabBarIcon: ({tintColor}) => (
    <Icon name='tag' size={20} color={tintColor} />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  CategoriesStack,
  DealsStack,
  StoresStack,
  AccountStack,
}, {
  tabBarOptions: {
      activeTintColor: "#2B7C85",
      inactiveTintColor: "grey",
  },

  tabBarComponent: props => <TabBar
      activeColors={['#e6b580', '#8e87d6', '#c095c9']} // or activeColors={'#e6b580'}
      activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']} // or activeTabBackgrounds={'#ede7e6'}
      {...props}
  />,
})