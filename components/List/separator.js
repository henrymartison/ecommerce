import React from 'react'
import {View, StyleSheet} from 'react-native'

const Separator = () => <View style={styles.separator}/>

export default Separator

const styles = StyleSheet.create({
    separator: {
        marginLeft: 20,
        backgroundColor: '#e2e2e2',
        flex: 1,
        height: StyleSheet.hairlineWidth
    }
})