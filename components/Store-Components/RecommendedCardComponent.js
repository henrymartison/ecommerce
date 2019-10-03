import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Content, Card, Container, CardItem, Left, Thumbnail, Body } from 'native-base'
import {FontAwesome5} from '@expo/vector-icons'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {withNavigation} from 'react-navigation'

import {fontSizeResponsive as fsr} from '../metrics'
import { TouchableOpacity } from '../TouchableOpacity'
import Colors from '../../constants/Colors'


const images = [
    {id: '1', price: '149', src: require('../../assets/images/card/3.jpg')},
    {id: '2', price: '476', src: require('../../assets/images/card/1.jpg')},
    {id: '3', price: '1,010', src: require('../../assets/images/card/2.jpg')},
    {id: '4', price: '999', src: require('../../assets/images/card/4.jpg')},
    {id: '5', price: '514', src: require('../../assets/images/card/6.jpg')},
    {id: '6', price: '280', src: require('../../assets/images/card/5.jpg')},
]

class RecommendedCardComponent extends Component{

    renderProducts() {
        return images.map((image, index) => {
            return(
                <View key={image.id} style={{flex: 1, width: wp('25%'), marginLeft: 12}}>
                    <View style={{flex: 3, backgroundColor: Colors.bgColor, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={image.src}
                            style={{height: 60, width: 60, resizeMode: 'contain'}}
                        />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>
                            GH₵ {image.price}
                        </Text>
                    </View>
                </View>
            )
        })
    }
    render() {

        const {
            sellerName,
            info,
            itemPrice,
            profile,
            navigation
        } = this.props
        return(
            <View style={styles.container}>
                <View style={{flex: 1.8, flexDirection: 'row'}}>
                    <View style={{
                            width: wp('20%'),
                            alignItems: 'center',
                            justifyContent: 'center' ,
                            marginLeft: 20,
                            paddingTop: 10,
                            borderRadius: wp('10%'),
                            backgroundColor: Colors.bgColor,
                            marginTop: 5
                        }}>
                        <Image 
                            source={require('../../assets/images/logos/marvalinks.png')}
                            style={{height: 30, width: 30, resizeMode: 'contain'}}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('StoreTabScreen')}>
                        <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{fontSize: 18, fontWeight: '600'}}>MARVALINKS STORE</Text>
                            <Text style={{color: 'grey', fontSize: 16, paddingTop: 5, fontWeight: '500'}}>Henry Martison</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3, backgroundColor: ''}}>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}>
                    {this.renderProducts()}
                    <View style={{width: wp('25%'), justifyContent: 'center', alignItems: 'center',}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('StoreTabScreen')}
                            style={{alignItems: 'center',}}
                        >
                            <FontAwesome5 name='store' style={{color: '#ccc', paddingLeft: 10, fontSize: 30}}/>
                            <Text style={{color: 'grey', fontSize: 20, paddingLeft: 10, paddingTop: 4}}>Visit Store</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('30%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        margin: 10
    }
})

export default withNavigation(RecommendedCardComponent)