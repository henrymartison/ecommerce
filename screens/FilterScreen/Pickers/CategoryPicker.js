import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { CheckBox } from 'native-base'
import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'



const categories = [
    'Sneakers', 'Loofer', 'Brogues'
]

export default class CategoryPicker extends Component{
    state = {
        checked: false
    }

    onSelectColor = (color) => {
        const {checked} = this.state
        this.setState({checked: !checked})
    }

    renderCategories() {
        return categories.map((cat, index) => {
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
                    <Text style={{fontSize: 17}}>{cat}</Text>
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
                {this.renderCategories()}
            </ScrollView>
        )
    }
}