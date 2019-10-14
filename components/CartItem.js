import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'
import { TouchableOpacity } from './TouchableOpacity'
import AddToFavorites from './AddToFavorites'

class CartItem extends React.Component{

    state = {
        productCount: 1
    }

    _onIncreasePress = () => {
        this.setState({productCount: this.state.productCount + 1})
    }
    _onDecreasePress = () => {
        this.setState({productCount: this.state.productCount - 1})
    }

    render() {
        const {
            itemName,
            itemCreator,
            itemPrice,
            prevPrice,
            imageUri,
            onDeletePress
        } = this.props

        const imageSize = hp('12%')

        return(
            <View style={styles.cartItemContainer}>
                <View style={{flex: 3, backgroundColor: '', flexDirection: 'row'}}>
                    <View style={{backgroundColor: '', width: wp('30%'), alignItems: 'center', justifyContent: 'center', marginBottom: 3}}>
                        <Image 
                            style={{height: imageSize, width: imageSize}}
                            source={imageUri}
                        />
                    </View>
                    <View style={{backgroundColor: '', flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 20, fontWeight: '500'}}>
                            {itemName}
                        </Text>
                        <Text style={{fontSize: 16, color: 'grey', paddingTop: 5}}>{itemCreator}</Text>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Text style={{fontSize: 15}}>GH₵ {itemPrice}</Text>
                            <Text style={styles.strikeThrough}>GH₵ {prevPrice}</Text>
                        </View>
                    </View>
                </View>
    
                <View style={styles.separator} />
    
                <View style={{height: hp('9%'), flexDirection: 'row'}}>
                    <AddToFavorites/>
                    <View style={styles.verticalSpeparator}/>
                    <View style={styles.removeItem}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={onDeletePress}>
                            <Ionicons name='md-trash' size={24} color={Colors.PRIMARY} />
                            <Text style={{fontWeight: 'bold', color: Colors.PRIMARY, paddingLeft: 5}}>REMOVE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.button} onPress={this._onDecreasePress}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 24, fontWeight: '500', paddingHorizontal: 14}}>
                                    {this.state.productCount}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={this._onIncreasePress}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


export default CartItem

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    cartItemContainer: {
        backgroundColor: '#fff',
        height: hp('28%'),
        marginHorizontal: 8,
        marginTop: 10,
        borderRadius: 6,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        padding: 5
    },
    separator: {
        marginHorizontal: 20,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
    verticalSpeparator: {
        backgroundColor: '#e2e2e2',
        width: StyleSheet.hairlineWidth,
        marginVertical: 10
    },
    strikeThrough: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        textDecorationColor: 'gray',
        textDecorationStyle: 'solid',
        color: 'gray',
        paddingLeft: 10
    },
    addToFavorites: {
        width: wp('20%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    removeItem: {
        width: wp('35%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        backgroundColor: Colors.PRIMARY,
        height: 25,
        width: 25,
        borderRadius: 25/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff'
    }
})