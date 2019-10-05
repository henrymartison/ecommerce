import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'


import Colors from '../../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import PersonalizeCardItem from '../../../../components/account-components/PersonalizeCardItem'

export default class Personalize extends React.Component{
    render() {
        return (
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                <PersonalizeCardItem />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#ccc',
        height: StyleSheet.hairlineWidth
    },
    container: {
        flex: 1, backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})