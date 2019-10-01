import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {List, ListItem, Left, Body, Right, Icon} from 'native-base'
import FA from '@expo/vector-icons/FontAwesome5'
import { TouchableOpacity } from "react-native-gesture-handler";


const ListComponent = ({iconName, text, color, onPress}) => (
    <TouchableOpacity style={{paddingTop: 10}} activeOpacity={.75} onPress={onPress}>
        <ListItem icon>
            <Left>
                <FA size={20} name={iconName} color='rgba(0, 0, 0, 0.55)' />
            </Left>
            <Body>
                <Text style={styles.listText}>{text}</Text>
            </Body>
            <Right>
                <Icon name='arrow-forward' />
            </Right>
        </ListItem>
    </TouchableOpacity>
    )
export default ListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.7)'
    }
});