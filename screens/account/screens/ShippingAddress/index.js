import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'native-base'


import Colors from '../../../../constants/Colors'
import { TouchableOpacity } from '../../../../components/TouchableOpacity'
import AddressCardItem from '../../../../components/CheckOut/Delivery/AddressCardItem'
import ShoppingCartIcon from '../../../../components/ShoppingCartIcon'


class ShippingAddress extends React.Component{
    static navigationOptions = {
        title: 'Shipping Address',
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

        const {navigate} = this.props.navigation
        return (
            <View style={{flex: 1, backgroundColor: Colors.bgColorDeep}}>
                <TouchableOpacity onPress={() => navigate('AddressForm')}>
                    <View style={{height: hp('8%'), backgroundColor: 'white', marginTop: 20,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                            <Ionicons name='ios-add' size={30} />
                            <Text style={{fontSize: 18, paddingLeft: 10}}>New Shipping Address</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View>
                    <AddressCardItem
                        firstName='Henry'
                        lastName='Martison'
                        region='Greater Accra'
                        city='Madina'
                        address='Ashaley Botwe'
                        mobileNumber='549695108'
                    />
                </View>
            </View>
        )
    }
}

export default ShippingAddress