import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { Button, Icon } from 'native-base'
import {showMessage} from 'react-native-flash-message'

import { TouchableOpacity } from '../TouchableOpacity'
import Colors from '../../constants/Colors'

class FavoriteCardItem extends React.Component {

    _trashPressed = () => {
        showMessage({
            message: 'Product successfully removed from cart',
            type: 'success',
            style: {alignItems: 'center'},
        })
    }
    _addToCart = () => {
        showMessage({
            message: 'Product successfully added to cart',
            type: 'success',
            style: {alignItems: 'center'},
        })
    }

    render() {
        const {
            itemName,
            itemCreator,
            itemPrice,
            prevPrice,
            imageUri
        } = this.props

        const name = itemName
        const length = 100
        const trimmedString = name.length > length ? name.substring(0, length) + "..." : name


        return(
            <View style={styles.container}>
                <View style={{flex: .8, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                    <Image 
                        source={imageUri}
                        style={{height: 60, width: 60, resizeMode: 'contain'}}
                    />
                </View>
                <View style={{flex: 2,}}>
                    <View style={{flex: 3}}>
                        <View style={{paddingLeft: 10, paddingTop: 15}}>
                            <Text style={{color: 'grey'}}>{itemCreator}</Text>
                            <Text style={{fontWeight: '600', fontSize: 16, paddingTop: 5}}>
                                {trimmedString}
                            </Text>
                            <View style={{flexDirection: 'row', paddingTop: 5}}>
                                <Text>GH₵ {itemPrice}</Text>
                                <Text style={styles.strikeThrough}>GH₵ {prevPrice}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1.9, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingRight: 20}}>
                        <TouchableOpacity onPress={this._trashPressed}>
                            <Icon name='md-trash' style={{paddingRight: 30, color: Colors.PRIMARY}} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this._addToCart}
                            style={styles.button}
                        >
                            <Text style={{fontWeight: '500', fontSize: 18, color: 'white'}}>
                                BUY NOW
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('25%'),
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomWidth: .5,
        borderBottomColor: '#e2e2e2'
    },
    text: {
        fontSize: 15,
        color: 'grey',
        paddingTop: 5,
        fontWeight: '500'
    },
    button: {
        backgroundColor: Colors.PRIMARY, 
        width: wp('30%'), 
        justifyContent: 'center',
        height: hp('6%'),
        alignItems: 'center',
        borderRadius: 3
    },
    strikeThrough: {
        // fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationColor: 'gray',
        textDecorationStyle: 'solid',
        color: 'gray',
        paddingLeft: 10
    },
})

export default FavoriteCardItem