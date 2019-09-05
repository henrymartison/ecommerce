import React, {Component} from 'react'
import {View, Text} from 'react-native'

import {specifications} from '../../../../../components/DetailsComponent'


export default class Specifications extends Component{
    render() {
        return(
            <View style={{marginTop: 10}}>
                <Text style={{paddingHorizontal: 10}}>{specifications}</Text>
            </View>
        )
    }
}