import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import { Icon } from 'native-base'


import Colors from '../../../constants/Colors'
import OrderCardItem from '../../../components/Orders/OrderCardItem'
import ShoppingCartIcon from '../../../components/ShoppingCartIcon'
import { TouchableOpacity } from '../../../components/TouchableOpacity'

export default class Orders extends Component{
  static navigationOptions = {
    title: 'Orders',
    headerTitleStyle: {fontWeight: '400'},
    headerRight: (
        <ShoppingCartIcon/>
      ),
      headerLeft: (
          <TouchableOpacity>
              <Icon name='md-arrow-back' style={{paddingLeft: 10, fontWeight: '400'}} />
          </TouchableOpacity>
      )
    }
  render() {
    return(
      <View style={{flex: 1, backgroundColor: Colors.bgColorDeep}}>
        <View style={{padding: 20}}>
          <Text style={{color: 'grey', fontWeight: '600'}}>MY ORDER HISTORY</Text>
        </View>
        <ScrollView>
          <OrderCardItem 
            orderNumber='302632679'
            date='2019-10-03'
            total='546'
          />
          <OrderCardItem 
            orderNumber='302632681'
            date='2018-04-11'
            total='113'
          />
          <OrderCardItem 
            orderNumber='302635879'
            date='2019-01-22'
            total='987'
          />
          <OrderCardItem 
            orderNumber='302452679'
            date='2015-12-03'
            total='29'
          />
          <OrderCardItem 
            orderNumber='302631172'
            date='2014-06-13'
            total='155'
          />
          <OrderCardItem 
            orderNumber='302631172'
            date='2014-06-13'
            total='155'
          />
          <OrderCardItem 
            orderNumber='302631172'
            date='2014-06-13'
            total='155'
          />
        </ScrollView>
      </View>
    )
  }
}
