import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


import { TouchableOpacity } from '../../TouchableOpacity'
import { CheckBox } from 'native-base'
import Colors from '../../../constants/Colors'


const DeliveryMethodCard = () => {
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
                <Text style={{color: 'grey', fontWeight: '600'}}>DELIVERY METHOD</Text>
                <TouchableOpacity onPress={() => alert('Change Address')}>
                    <Text style={{fontWeight: 'bold', color: Colors.PRIMARY}}>CHANGE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <View style={{flex: 1}}>
                    <View style={{backgroundColor: '', flex: 1, paddingHorizontal: 12, paddingTop: 10}}>
                        <Text style={{fontSize: 17, fontWeight: '600'}}>Home & Office Delivery</Text>
                        <Text style={{paddingTop: 7, color: 'grey', fontSize: 18, paddingRight: 30}}>
                            Delivered between Thursday 3 Oct and Monday 7 Oct
                        </Text>
                            <Text style={{fontWeight: '600', color: 'grey', fontSize: 18, paddingTop: 3}}>Shipping Fee: 
                                <Text style={{color: Colors.PRIMARY,}}> GH₵ 10</Text>
                            </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        paddingVertical: 15,
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


export default DeliveryMethodCard