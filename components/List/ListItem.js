import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import Icon from './icon'

const ListItem = ({text, onPress, selected=false, checkmark=true, visible=true}) => {
    return(
        <TouchableHighlight onPress={onPress} underlayColor='#e2e2e2'>
            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>
                {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
            </View>
        </TouchableHighlight>
    )
}

export default ListItem

const styles = StyleSheet.create({
    row: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#343434'
    }
})