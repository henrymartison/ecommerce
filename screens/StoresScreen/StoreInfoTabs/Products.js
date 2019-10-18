import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../../constants/Colors'
import { Thumbnail } from 'native-base'
import StarRating from 'react-native-star-rating'

import { TouchableOpacity } from '../../../components/TouchableOpacity'
import { Ionicons } from '@expo/vector-icons'
import AddToFavorites from '../../../components/AddToFavorites'


const {width} = Dimensions.get('window')

const productPadding = [
    // index % 2 !== 0 ? { paddingLeft: 1 } : { paddingLeft: 0 }
]

const styles = StyleSheet.create({
    recommendedProducts: {
        backgroundColor: 'white',
        height: hp('8.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    productContainer: {
        height: width/2 + hp('15%'), 
        width: width/2 - 10,
        marginBottom: 4,
        // backgroundColor: 'red'
        
    }
})

const images = [
    require('../../../assets/images/card/1.jpg'),
    require('../../../assets/images/card/2.jpg'),
    require('../../../assets/images/card/3.jpg'),
    require('../../../assets/images/card/4.jpg'),
    require('../../../assets/images/card/5.jpg'),
    require('../../../assets/images/card/6.jpg'),
    require('../../../assets/images/card/1.jpg'),
    require('../../../assets/images/card/2.jpg'),
    require('../../../assets/images/card/3.jpg'),
    require('../../../assets/images/card/4.jpg'),
    require('../../../assets/images/card/5.jpg'),
]

export default class Home extends Component{

    state = {
        followers: Math.floor((Math.random() * 10) + 1),
        following: [false, true]
    }

    _onHandlePress = () => {
        const {followers, following} = this.state

        if(following) {
            this.setState({following: true, followers: followers+1})
        } else {
            this.setState({following: false, followers: followers-1})
        }
    }

    renderProducts() {
        return images.map((image, index) => {
            return(
                <View 
                    key={index}
                    style={[
                        styles.productContainer, 
                        index % 2 !== 0 ? { marginLeft: 1 } : { marginLeft: 0 }
                    ]} 
                >
                    <View style={{flex: 2, backgroundColor: 'white'}}>
                        <Image
                            source={image}
                            style={{
                                height: null, width: null, resizeMode: 'contain', flex: 1
                            }}
                        />
                    </View>
                    <View style={{backgroundColor: 'white', flex: 1.8, paddingHorizontal: 10, paddingTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '600', paddingLeft: 5}}>GH₵ 1,104</Text>
                        <Text style={{paddingTop: 5, color: 'grey', paddingLeft: 5}}>1,447 orders</Text>
                        <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5}}>
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
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8}}>
                            <View style={{
                                backgroundColor: '#ecf1f9',
                                borderRadius: 15,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 3,
                            }}>
                                <Text style={{color: Colors.darkBlue}}>Free Shipping</Text>
                            </View>
                            <AddToFavorites/>
                        </View>
                    </View>
                </View>
            )
        })
    }

    render() {
        const {followers, following} = this.state

        return (
            <ScrollView>
                <View style={{flex: 1, backgroundColor: Colors.bgColor}}>
                <View style={{}}>
                        <View style={{flexDirection: 'row', marginLeft: 10, flexWrap: 'wrap'}}>
                            {this.renderProducts()}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}