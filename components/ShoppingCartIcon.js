import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'native-base'
import {SimpleLineIcons} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'

import cartItems from '../redux/reducers/cartItems'
import { TouchableOpacity } from './TouchableOpacity'
import Colors from '../constants/Colors'


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
                    backgroundColor: Colors.PRIMARY,
                    right: 10,
                    bottom: 20, alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>0</Text>
                </View>
                <View>
                    <SimpleLineIcons name='basket' color='#000' size={25} style={{paddingRight: 10}} />
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