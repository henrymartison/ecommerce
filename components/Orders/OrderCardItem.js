import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

const OrderCardItem = ({orderNumber, date, total}) => {
    return(
        <View style={{height: hp('13%'), backgroundColor: 'white', marginBottom: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: '600', fontSize: 17}}>Order n°: {orderNumber}</Text>
                <Text style={styles.text}>{date}</Text>
                <Text style={styles.text}>Total: GH₵ {total}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'grey',
        paddingTop: 5,
        fontWeight: '500'
    }
})

export default OrderCardItem