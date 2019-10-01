import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {List, ListItem, Left, Body, Right, Icon} from 'native-base'
import FA from '@expo/vector-icons/FontAwesome5'



const SettingsList = ({onPress, iconName}) => {
    return(
        <TouchableOpacity style={{paddingTop: 10}} activeOpacity={.75} onPress={onPress}>
        <ListItem icon>
            {/* <Left>
                <FA size={20} name={iconName} color='rgba(0, 0, 0, 0.55)' />
            </Left> */}
            <Body>
                <Text style={styles.listText}>Hello</Text>
            </Body>
            <Right>
                <Icon name='arrow-forward' />
            </Right>
        </ListItem>
    </TouchableOpacity>
    )
}

export default SettingsList

const styles = StyleSheet.create({})