import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'native-base'
import {withNavigation} from 'react-navigation'

import cartItems from '../redux/reducers/cartItems'
import { TouchableOpacity } from './TouchableOpacity'


class ShoppingCartIcon extends React.Component {
    render() {

        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
            <View style={{padding: 5}}>
                <View style={{
                    position: 'absolute',
                    height: 18,
                    width: 18,
                    borderRadius: 18/2,
                    backgroundColor: 'rgba(95, 197, 123, .9)',
                    right: 10,
                    bottom: 26, alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>0</Text>
                </View>
                <View>
                    <Icon name='md-cart' style={{paddingRight: 10, color: '#000'}} />
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default withNavigation(ShoppingCartIcon)