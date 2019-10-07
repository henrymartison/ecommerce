import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Button } from 'native-base'
import {withNavigation} from 'react-navigation'

import { TouchableOpacity } from '../../TouchableOpacity'
import Colors from '../../../constants/Colors'


class PaymentCardItem extends React.Component {
    render() {

        return(
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // backgroundColor: 'blue',
                    marginVertical: 10,
                    paddingHorizontal: 10
                }} />
                    
                <View style={styles.cardContainer}>
                    <View style={{flex: 2}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                            <Text style={{fontWeight: '600', fontSize: 17}}>SubTotal</Text>
                            <Text style={{fontWeight: '600', fontSize: 17}}>GH₵ 546</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 7}}>
                            <Text style={{fontWeight: '600', fontSize: 17}}>Shipping Fee</Text>
                            <Text style={{fontWeight: '600', fontSize: 17}}>GH₵ 10</Text>
                        </View>
                    </View>
                    <View style={styles._separator} />
                    <View style={{flex: 3}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 13}}>
                            <Text style={{fontWeight: '600', fontSize: 17}}>Total</Text>
                            <Text style={{fontWeight: '600', fontSize: 17}}>GH₵ 646</Text>
                        </View>
    
                        <Button 
                            onPress={() => this.props.navigation.navigate('Payment')}
                            style={styles.checkoutButton}>
                            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>Proceed to Payment</Text>
                        </Button>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: 'grey', paddingTop: 10}}>You will be able to add a voucher in the next step</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        height: hp('35%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        paddingVertical: 15
    },
    text: {
        fontSize: 17,
        paddingHorizontal: 20
    },
    _separator: {
        marginHorizontal: 15,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
    checkoutButton: {
        marginHorizontal: wp('2%'),
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        marginTop: 20
    }
})

export default withNavigation(PaymentCardItem)