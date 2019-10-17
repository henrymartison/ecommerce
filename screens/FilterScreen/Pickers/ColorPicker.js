import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { CheckBox } from 'native-base'
import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'



const colors = [
    'Beige', 'Black', 'Blue', 'Brown', 'Gold', 'Green', 'Grey', 'Orange',
    'Pink', 'Purple', 'Red', 'White', 'Maroon', 'Violet', 'Scarlet', 'Wool'
]

export default class ColorPicker extends Component{
    state = {
        checked: false
    }

    onSelectColor = () => {
        const {checked} = this.state
        this.setState({checked: !checked})
    }

    renderColors() {
        return colors.map((color, index) => {
            return (
                <TouchableOpacity
                    onPress={this.onSelectColor}
                    key={index} 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 14
                    }}>
                    <Text style={{fontSize: 17}}>{color}</Text>
                    <CheckBox 
                        onPress={this.onSelectColor} 
                        checked={this.state.checked} 
                        color={Colors.PRIMARY} 
                    
                    />
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <ScrollView style={{}}>
                {this.renderColors()}
            </ScrollView>
        )
    }
}