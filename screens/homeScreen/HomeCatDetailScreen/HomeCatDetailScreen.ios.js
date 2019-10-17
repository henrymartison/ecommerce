import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions, Image, ScrollView} from 'react-native'
import { Icon } from 'native-base'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import StarRating from 'react-native-star-rating'


import { TouchableOpacity } from '../../../components/TouchableOpacity'
import ShoppingCartIcon from '../../../components/ShoppingCartIcon'
import Colors from '../../../constants/Colors'
import AddToFavorites from '../../../components/AddToFavorites'


const images = [
    require('../../../assets/images/card/1.jpg'),
    require('../../../assets/images/card/2.jpg'),
    require('../../../assets/images/card/3.jpg'),
    require('../../../assets/images/card/4.jpg'),
    require('../../../assets/images/card/5.jpg'),
    require('../../../assets/images/card/6.jpg'),
]

const name = 'WD WDBYFT0040BBK-WESN My Passport USB 3.0 Secure Portable External Hard Drive - 4TB Black'
const length = 55
const trimmedString = name.length > length ? name.substring(0, length) + "..." : name

export default class HomeCatDetailScreen extends Component{
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title'),
        headerTitleStyle: {fontWeight: '400'},
        headerRight: (
            <View style={{paddingRight: 8}}>
                <ShoppingCartIcon/>
            </View>
          ),
          headerLeft: (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
              </TouchableOpacity>
          )
    })

    renderProductsRow() {
        return images.map((image, index) => {
            return (
                <View key={index}>
                    <TouchableOpacity 
                        style={styles.productContainer}
                        activeOpacity={.8}
                        onPress={() => this.props.navigation.navigate('Details')}
                    >
                        <View style={{flex: 1.5, backgroundColor: 'white'}}>
                            <Image source={image}
                                style={{flex: 1, height: null, width: null, resizeMode: 'contain'}}/>
                        </View>

                        <View style={{flex: 3, backgroundColor: 'white', paddingLeft: 15}}>
                            <Text style={{fontSize: 16, color: 'grey', paddingTop: 8}}>{trimmedString}</Text>
                            <View style={{flexDirection: 'row', paddingTop: 5, justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 18, fontWeight: '600',}}>GH₵ 1,104</Text>
                                <AddToFavorites/> 
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                                <View style={{flexDirection: 'row'}}>
                                    <StarRating
                                        disabled={true}
                                        reversed={false}
                                        maxStars={5}
                                        rating={4}
                                        starSize={12}
                                        fullStarColor='orange'
                                        emptyStarColor='orange'
                                        halfStarEnabled={true}
                                    />
                                    <Text style={{paddingLeft: 10, color: 'grey'}}>4.8</Text>
                                </View>
                                <Text style={{color: 'grey'}}>1,447 orders</Text>
                            </View>
                            <View style={{
                                marginTop: 10,
                                backgroundColor: '#ecf1f9',
                                borderRadius: 15,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 4,
                                width: width/3 - 10
                            }}>
                                <Text style={{color: Colors.darkBlue}}>Free Shipping</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {this.renderProductsRow()}
            </ScrollView>
        )
    }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    productContainer: {
        height: width/2 - 29,
        width: width,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
        // paddingBottom: 14,
        marginTop: 10
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e8e8e8'
    }
})