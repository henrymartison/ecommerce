import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import { Content, Card, Container, CardItem, Left, Thumbnail, Body } from 'native-base'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import {fontSizeResponsive as fsr} from '../metrics'
import { ScrollView } from 'react-native-gesture-handler'

export default class RecommendedCardComponent extends Component{
    render() {

        const {
            sellerName,
            info,
            itemPrice,
            profile
        } = this.props
        return(
                <Card style={{height: hp('34%'), marginTop: 15, backgroundColor: 'rgb(250,250,250)'}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../../assets/images/logos/fb_alt.png')} />
                            <Body>
                            <Text style={{fontSize: fsr(2.4), fontWeight: '500'}}>{sellerName}</Text>
                            <Text note style={{fontSize: fsr(1.6), color: 'grey'}}>{info}</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image 
                                    source={profile} 
                                    style={{height: 100, width: 100}}
                                />

                                <Text style={{color: 'grey', fontSize: 13, paddingTop: 8}}>GHC {itemPrice}</Text>
                            </View>
                            
                        </ScrollView>
                    </CardItem>
                        
                </Card>
        )
    }
}