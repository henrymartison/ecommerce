import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import DealsCardComponent from '../../../components/DealsCardComponent'
import {fontSizeResponsive} from '../../../components/metrics'

export default class Tab1 extends Component{
    render() {
        return(
            <View style={{backgroundColor: 'rgb(247,247,247)'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: hp('6.4%'), marginHorizontal: 10}}>
                        <Text style={{color: '#0d0d0d', fontSize: fontSizeResponsive(2.5), fontWeight: '400'}}></Text>
                        <View style={{flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{fontSize: fontSizeResponsive(2.5), fontWeight: '500'}}>Sort</Text>
                        </View>
                    </View>
                    
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
                    <DealsCardComponent 
                        price='453.43'
                        prevPrice='675.22'
                        percentageLayoff='57'
                    />
            </View>
        )
    }
}