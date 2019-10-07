import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
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


import StoreTabScreen from '../screens/StoresScreen/StoreInfoTabs';
import SizesPage from '../screens/homeScreen/SizesPage';
import SizeChart from '../screens/homeScreen/SizeChart';
import Personalize from '../screens/account/screens/Personalize';
import Gender from '../screens/account/screens/Personalize/Gender';
import GenderModal from '../components/account-components/Modals/GenderModal';
import ShippingAddress from '../screens/account/screens/ShippingAddress';
import Orders from '../screens/account/screens/Orders';
import Favorites from '../screens/account/screens/Favorites';
import AddressForm from '../screens/account/screens/ShippingAddress/AddressForm';
import Colors from '../constants/Colors';


const HomeStack = createStackNavigator({
  Home: {
    screen: MainHome,
    navigationOptions: {header: null}
  },
  Details: Details,
  SizesPage: SizesPage,
  SizeChart: SizeChart,
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
  ShippingAddress: ShippingAddress,
  RecentlyViewed: RecentlyViewed,
  Personalize: Personalize,
  GenderModal: GenderModal,
  Orders: Orders,
  Favorites: Favorites,
  AddressForm: AddressForm
})

const AccountRootStack = createStackNavigator({
  Main: {
    screen: AccountStack,
    navigationOptions: {
      header: null
    }
  },
  GenderModal: {screen: Gender}
}, {
  mode: 'modal',
})

AccountStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0){
    tabBarVisible = false
  }
  return{
    tabBarVisible,

    tabBarLabel: 'Account',
    tabBarIcon: ({tintColor}) => (
    <Icon name='user' size={20} color={tintColor} />
  )
  }
}

const StoresStack = createStackNavigator({
  Store: {screen: Stores},
  StoreTabScreen: StoreTabScreen
})
StoresStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0){
    tabBarVisible = false
  }
  return{
    tabBarVisible,

    tabBarLabel: 'Store',
    tabBarIcon: ({tintColor}) => (
    <Icon name='shopping-bag' size={20} color={tintColor} />
  )
  }
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
  // DealsStack,
  StoresStack,
  AccountStack,
},
  {
    tabBarOptions: {
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: "grey",
  },

  // tabBarComponent: props => <TabBar
  //     activeColors={['#e6b580', 'tomato', '#c095c9']} // or activeColors={'#e6b580'}
  //     activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']} // or activeTabBackgrounds={'#ede7e6'}
  //     {...props}
  // />,
})