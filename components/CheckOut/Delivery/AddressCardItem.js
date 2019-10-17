import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Swipeout from 'react-native-swipeout'

import { TouchableOpacity } from '../../TouchableOpacity'
import Colors from '../../../constants/Colors'


var swipeoutBtns = [
    {text: 'Delete', backgroundColor: 'red'},
  ]

const AddressCardItem = ({firstName, lastName, address, region, city, mobileNumber}) => {
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
                    <Text style={{fontWeight: 'bold', color: Colors.PRIMARY}}>CHANGE</Text>
                </TouchableOpacity>
            </View>
            <Swipeout 
                right={swipeoutBtns}
                autoClose={true}
                color='red'
                sensitivity={100}
            >
            <View style={styles.cardContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 17, paddingLeft: 20}}>{firstName}, </Text>
                    <Text style={{fontSize: 17}}>{lastName}</Text>
                </View>
                <Text style={styles.text}>{address}</Text>
                <Text style={styles.text}>{region}</Text>
                <Text style={styles.text}>{city}</Text>
                <Text style={styles.text}>+233 {mobileNumber}</Text>
            </View>
            </Swipeout>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
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