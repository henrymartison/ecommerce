import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Icon } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


import ShippingForm from '../../../../components/account-components/ShippingAddress/ShippingForm'
import { TouchableOpacity } from '../../../../components/TouchableOpacity'
import Colors from '../../../../constants/Colors'

export default class AddressForm extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'New Shipping Address',
        headerTitleStyle: {fontWeight: '400', fontSize: 14},
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='md-arrow-back' style={{fontWeight: '400', paddingLeft: 10}}/>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => alert('Validate Form')}>
                <Text style={{paddingRight: 10, fontSize: 20, fontWeight: '500', color: '#ffc40c'}}>Done</Text>
            </TouchableOpacity>
        ),
    })
    render() {
        return (
            <View>
                <ShippingForm/>
                {/* <TouchableOpacity 
                    style={{alignItems: 'flex-end'}}
                    onPress={() => alert('Changes Saved')}
                >
                    <View style={styles.bottomBar}>
                        <Text style={{fontSize: 18, color: Colors.darkBlue}}>Save Changes</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        height: hp('10%'),
        backgroundColor: '#ffc40c',
        width: wp('50%'),
        alignItems: 'center',
        paddingTop: 18
    }
})