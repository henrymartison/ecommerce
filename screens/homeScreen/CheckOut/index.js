import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button } from 'native-base'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


import ItemSummaryCard from '../../../components/CheckOut/Summary/ItemSummaryCard'
import AddressCardItem from '../../../components/CheckOut/Delivery/AddressCardItem'
import DeliveryMethodCard from '../../../components/CheckOut/Summary/DeliveryMethodCard'
import PaymentMethodCard from '../../../components/CheckOut/Summary/PaymentMethodCard'
import Colors from '../../../constants/Colors'

const SummaryComponent = () => {
    return(
        <View>
            <ItemSummaryCard/>
            <AddressCardItem
                firstName='Henry'
                lastName='Martison'
                region='Greater Accra'
                city='Madina'
                address='Ashaley Botwe'
                mobileNumber='549695108'
            />
            <DeliveryMethodCard/>
            <PaymentMethodCard/>
            <Button
                onPress={() => alert('Order Confirmed')}
                style={styles.checkoutButton}>
                <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>Confirm</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomView: {
        height: heightPercentageToDP('15%'),
        backgroundColor: 'white'
    },
    checkoutButton: {
        marginHorizontal: widthPercentageToDP('2%'),
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        marginTop: 15
    }
})

export default SummaryComponent