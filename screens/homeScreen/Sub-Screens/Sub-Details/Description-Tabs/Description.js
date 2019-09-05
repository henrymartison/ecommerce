import React, {Component} from 'react'
import {View, Text} from 'react-native'

import Details from '../../../DetailsScreen'
import DetailsComponent from '../../../../../components/DetailsComponent';
import {description} from '../../../../../components/DetailsComponent'

export default class Description extends Component{
    render() {
        return(
            <View style={{marginTop: 10}}>
                <Text style={{paddingHorizontal: 10}}>{description}</Text>
            </View>
        )
    }
}