import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'

import CurrencyList from './currencyList'
import SettingsList from '../../../../components/account-components/SettingsList'

export default class Settings extends Component{
  render() {
    return(
      <SettingsList/>
    )
  }
}
