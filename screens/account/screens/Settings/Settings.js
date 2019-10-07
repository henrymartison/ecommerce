import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'

import CurrencyList from './currencyList'
import SettingsList from '../../../../components/account-components/SettingsList'
import Colors from '../../../../constants/Colors'

export default class Settings extends Component{
  render() {
    const {navigate} = this.props.navigation
    return(
      <View style={{flex: 1, backgroundColor: Colors.bgColor}}>
        <SettingsList 
          attribute='Ship to'
          subText='Ghana'
          onPress={() => alert('hey')}
        />
        <SettingsList 
          attribute='Version check'
          subText='1.0.0'
          onPress={() => alert('hey')}
        />
        <View style={{marginTop: 20}}/>
        <SettingsList 
          attribute='Buyer Protection'
          onPress={() => alert('hey')}
        />
        <SettingsList 
          attribute='Contact Us'
          onPress={() => alert('hey')}
        />
        <SettingsList 
          attribute='Terms of Use'
          onPress={() => alert('hey')}
        />
        <SettingsList 
          attribute='License'
          onPress={() => alert('hey')}
        />
        <View style={{marginTop: 20}}/>
        <SettingsList 
          attribute='Privacy Policy(GH)'
          onPress={() => alert('hey')}
        />
        <SettingsList 
          attribute='Legal'
          onPress={() => alert('hey')}
        />
      </View>
    )
  }
}
