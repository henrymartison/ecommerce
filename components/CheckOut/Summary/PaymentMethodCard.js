import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { FontAwesome5 } from '@expo/vector-icons'


import { TouchableOpacity } from '../../TouchableOpacity'


const PaymentMethodCard = () => {
    return(
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: 'blue',
                marginVertical: 18,
                paddingHorizontal: 10,
            }}>
                <Text style={{color: 'grey', fontWeight: '600'}}>PAYMENT METHOD</Text>
                <TouchableOpacity onPress={() => alert('Change Address')}>
                    <Text style={{fontWeight: 'bold', color: 'orange'}}>CHANGE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <View style={{
                    // justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <FontAwesome5 name='cc-mastercard' size={25} color='brown' />
                    <Text style={{fontSize: 18, fontWeight: '500', paddingLeft: 20}}>-</Text>
                    <Text style={{fontSize: 18, fontWeight: '500', paddingLeft: 20}}>Via Mastercard</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        height: hp('10%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 17,
        paddingHorizontal: 20
    },
    separator: {
        // marginHorizontal: 15,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
    _separator: {
        marginHorizontal: 15,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
})


export default PaymentMethodCard