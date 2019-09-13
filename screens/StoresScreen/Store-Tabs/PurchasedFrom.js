import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class PurchasedFrom extends Component{
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>No Sellers could be found!</Text>
            </View>
        )
    }
}