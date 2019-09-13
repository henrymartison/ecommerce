import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import DealsCardComponent2 from '../../../components/DealsCardComponent2'
import {fontSizeResponsive} from '../../../components/metrics'

export default class Tab2 extends Component{
    render() {
        return(
            <View style={{backgroundColor: 'rgb(247,247,247)'}}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: hp('6.4%'), marginHorizontal: 10}}>
                    <Text style={{color: 'grey', fontSize: fontSizeResponsive(2), fontWeight: '400'}}>754,592 Results</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{fontSize: fontSizeResponsive(2.2), fontWeight: '500'}}>Sort | Refine</Text>
                    </View>
                </View>

                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
                <DealsCardComponent2
                    prevPrice='897.44'
                    price='485.36'
                    percentageLayoff='23'
                />
            </View>
        )
    }
}