import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { Icon } from 'native-base'

import styles from './styles'
import { TouchableOpacity } from '../../TouchableOpacity'

const CustomHeader = ({title, onPress}) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={onPress} style={{flex: .5,}}>
                <Icon name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center',}}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CustomHeader