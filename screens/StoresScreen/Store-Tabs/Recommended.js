import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

import RecommendedCardComponent from '../../../components/Store-Components/RecommendedCardComponent'
import Colors from '../../../constants/Colors'

export default class Recommended extends Component{
    render() {
        return(
           <View style={{backgroundColor: Colors.bgColor}}>
                <RecommendedCardComponent 
                    sellerName='Henry Martison'
                    info='GeekyAnts'
                    itemPrice='342.54'
                    profile={require('../../../assets/images/card/3.jpg')}
                />
                <RecommendedCardComponent 
                    sellerName='Henry Martison'
                    info='GeekyAnts'
                    itemPrice='342.54'
                    profile={require('../../../assets/images/card/3.jpg')}
                />
                <RecommendedCardComponent 
                    sellerName='Henry Martison'
                    info='GeekyAnts'
                    itemPrice='342.54'
                    profile={require('../../../assets/images/card/3.jpg')}
                />
                <RecommendedCardComponent 
                    sellerName='Henry Martison'
                    info='GeekyAnts'
                    itemPrice='342.54'
                    profile={require('../../../assets/images/card/3.jpg')}
                />
                <RecommendedCardComponent 
                    sellerName='Henry Martison'
                    info='GeekyAnts'
                    itemPrice='342.54'
                    profile={require('../../../assets/images/card/3.jpg')}
                />
           </View>
        )
    }
}