import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {EvilIcons, FontAwesome5} from '@expo/vector-icons'
import { CheckBox } from 'native-base'

import { TouchableOpacity } from '../../TouchableOpacity'
import Colors from '../../../constants/Colors'

const PaymentMethodCard = () => {
    return (
        <View>
            <View style={{height: hp('13%'), backgroundColor: Colors.bgColor, flexDirection: 'row',paddingTop: 20}}>
                <View style={{width: wp('20%'), backgroundColor: '', alignItems: 'center',}}>
                    <View style={{
                        height: 27,
                        width: 27,
                        borderRadius: 27/2,
                        // backgroundColor: 'orange',
                        borderWidth: 1,
                        borderColor: 'green',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <EvilIcons name='lock' size={20} color='green' />
                    </View>
                </View>
                <View style={{paddingRight: 30, flex: 1}}>
                    <Text style={{color: 'grey', fontWeight: '600', fontSize: 18, paddingBottom: 5}}>Your Payment is 100% Secure</Text>
                    <Text style={{color: 'grey', fontSize: 14}}>Trusted by over 100 million shoppers in over 150 different countries</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{backgroundColor: '', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{paddingLeft: 10, fontSize: 17, fontWeight: '500'}}>Payment Method</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={{flex: 2.5, flexDirection: 'row', paddingTop: 20}}>
                        <View style={{backgroundColor: '', width: wp('10%'), alignItems: 'center',}}>
                            <CheckBox color={Colors.PRIMARY} />
                        </View>
                        <View style={{paddingLeft: 20,}}>
                            <Text style={{fontSize: 17, }}>Pay with a New card</Text>
                            <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                <FontAwesome5 name='cc-visa' size={25}  />
                                <FontAwesome5 name='cc-mastercard' size={25} color='brown' />
                                <FontAwesome5 name='cc-paypal' size={25} color='orange' />
                                <FontAwesome5 name='cc-amex' size={25} color='lightskyblue' />
                            </View>
                        </View>
                    </View>
                        <View style={styles.separator}/>
                            <View style={{flex: 3, flexDirection: 'row', paddingTop: 25}}>
                                <View style={{backgroundColor: '', width: wp('10%'), alignItems: 'center',}}>
                                    <CheckBox checked color={Colors.PRIMARY} />
                                </View>
                                <View style={{paddingLeft: 20,}}>
                                    <Text style={{fontSize: 17, }}>More Payment Methods          </Text>
                                    <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <FontAwesome5 name='cc-stripe' size={25} color='#666804' />
                                        <FontAwesome5 name='cc-apple-pay' size={25} color={Colors.GREEN} />
                                        <FontAwesome5 name='cc-amazon-pay' size={25} color='tomato' />
                                        <FontAwesome5 name='google-wallet' size={25} color='#5e5e5e' />
                                        <FontAwesome5 name='bitcoin' size={25} color='#EAEB5E' />
                                    </View>
                                </View>
                                
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: hp('40%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        // paddingTop: 15,
        // marginBottom: hp('20%')
    },
    separator: {
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
})

export default PaymentMethodCard