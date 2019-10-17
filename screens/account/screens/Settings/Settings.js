import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import { Icon } from 'native-base'

import SettingsList from '../../../../components/account-components/SettingsList'
import Colors from '../../../../constants/Colors'
import { TouchableOpacity } from '../../../../components/TouchableOpacity'
import ShoppingCartIcon from '../../../../components/ShoppingCartIcon'

export default class Settings extends Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Settings',
        headerTitleStyle: {fontWeight: '400'},
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
            </TouchableOpacity>
        ),
        headerRight: (
          <ShoppingCartIcon/>
        ),
  })

  versionCheck = () => {
    Alert.alert(
        '',
        'You are using the latest version of this application',
        [
          {text: 'OK', onPress: () => console.log('Version Checked')},
        ]
    )
  }

  render() {
    const {navigate} = this.props.navigation
    return(
      <View style={{flex: 1, backgroundColor: Colors.bgColor}}>
        <SettingsList 
          attribute='Ship to'
          subText='Ghana'
        />
        <SettingsList 
          attribute='Version check'
          subText='1.0.0'
          onPress={this.versionCheck}
        />
        <View style={{marginTop: 20}}/>
        <SettingsList 
          attribute='Privacy Policy(GH)'
          onPress={() => navigate('BuyerProtection')}
        />
        <SettingsList 
          attribute='Contact Us'
          onPress={() => navigate('Contact')}
        />
        <SettingsList 
          attribute='License'
          onPress={() => navigate('License')}
        />
        <View style={{marginTop: 20}}/>
        <SettingsList 
          attribute='FAQ'
          onPress={() => navigate('FAQ')}
        />
        <SettingsList 
          attribute='Terms of Use'
          onPress={() => navigate('TermsOfUse')}
        />
      </View>
    )
  }
}
