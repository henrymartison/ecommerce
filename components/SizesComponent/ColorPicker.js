import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from '../TouchableOpacity'
import Colors from '../../constants/Colors'

class ColorPicker extends React.Component {
    
    state = {
        selected: false
    }

    onPressColor = () => {
        const contaninerStyle = [styles.colorSelectedContainer]
        const textStyle = [styles.colorSelectedText]

        if(!this.state.selected) {
            contaninerStyle.push(styles.colorSelectedContainer)
        } else if(!this.state.selected){
            textStyle.push(styles.colorSelectedText)
        }
        return alert('Color Picked')
    }

    render() {
        const {color, colorName} = this.props

        return (
            <TouchableOpacity onPress={this.onPressColor}>
                <View style={styles.colorPicker}>
                    <Text style={{fontWeight: '500', color: color}}>{colorName}</Text>
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
    },
    colorSelectedContainer: {
        backgroundColor: 'orange'
    },
    colorSelectedText: {
        color: 'white'
    }
})

export default ColorPicker