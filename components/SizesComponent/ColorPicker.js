import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from '../TouchableOpacity'
import Colors from '../../constants/Colors'
import { handlePress } from '../../screens/homeScreen/SizesPage'



const ColorPicker = ({color, colorName, onPress, selected}) => {
    const containerStyles = [styles.colorPicker]
    const textStyles = [{fontWeight: '500', color: color}]

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={containerStyles}>
                <Text style={textStyles}>{colorName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    colorPicker: {
        height: 35,
        width: 60,
        borderRadius: 23,
        backgroundColor: Colors.bgColor,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorSelectedContainer: {
        backgroundColor: 'orange'
    },
    colorSelectedText: {
        color: 'white'
    },
    // text: {
    //     fontWeight: '500', color: color
    // }
})

export default ColorPicker