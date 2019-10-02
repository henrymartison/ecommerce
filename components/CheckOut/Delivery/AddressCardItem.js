import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from '../../TouchableOpacity'


const AddressCardItem = () => {
    return(
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: 'blue',
                marginVertical: 15,
                paddingHorizontal: 10
            }}>
                <Text style={{color: 'grey', fontWeight: '600'}}>ADDRESS DETAILS</Text>
                <TouchableOpacity onPress={() => alert('Change Address')}>
                    <Text style={{fontWeight: 'bold', color: 'orange'}}>CHANGE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.text}>henry martison</Text>
                <Text style={styles.text}>Botwe, School Junction</Text>
                <Text style={styles.text}>Greater Accra</Text>
                <Text style={styles.text}>Madina</Text>
                <Text style={styles.text}>+233 549 695 108</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: hp('20%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        paddingVertical: 15
    },
    text: {
        fontSize: 17,
        paddingHorizontal: 20
    }
})

export default AddressCardItem