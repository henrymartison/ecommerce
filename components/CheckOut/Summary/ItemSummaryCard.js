import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

import { TouchableOpacity } from '../../TouchableOpacity'
import Colors from '../../../constants/Colors'

const ItemSummaryCard = () => {
    return(
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 10
            }} />
            <View style={styles.cardContainer}>
                <View style={{flex: 3}}>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>Order Number</Text>
                        <Text style={styles.summaryText}>344059200</Text>
                    </View>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>Total Item(s)</Text>
                        <Text style={styles.summaryText}>GH₵ 646</Text>
                    </View>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>Shipping Fee</Text>
                        <Text style={styles.summaryText}>GH₵ 10</Text>
                    </View>
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryText}>JG Free Shipping</Text>
                        <Text style={[styles.summaryText, {color: Colors.GREEN}]}>- GH₵ 5</Text>
                    </View>
                </View>
                <View style={styles._separator} />
                <View style={{flex: 1, justifyContent: 'center',}}>
                    <View style={[styles.summaryContainer, {paddingVertical: 12, alignItems: 'center'}]}>
                        <Text style={styles.summaryText}>Total Payment</Text>
                        <Text style={{fontSize: 18, fontWeight: '700', color: Colors.PRIMARY}}>GH₵ 651</Text>
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
        paddingTop: 15
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
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    summaryText: {
        fontWeight: '500',
        fontSize: 18,
        paddingVertical: 1
    }
})

export default ItemSummaryCard