import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from '../TouchableOpacity'
import Colors from '../../constants/Colors'

class SizePicker extends React.Component {
    render() {
        const {size} = this.props

        return (
            <TouchableOpacity>
                <View style={styles.colorPicker}>
                    <Text style={{fontWeight: '500',}}>{size}</Text>
                </View>
            </TouchableOpacity>
        )
    }
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
    }
})

export default SizePicker