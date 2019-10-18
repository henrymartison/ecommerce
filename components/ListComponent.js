import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {List, ListItem, Left, Body, Right, Icon} from 'native-base'
import FA from '@expo/vector-icons/FontAwesome5'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";


const ListComponent = ({iconName, text, color, onPress}) => (
    <View>
        <TouchableOpacity style={{
            paddingVertical: 15, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            paddingHorizontal: 10,
            alignItems: 'center'
        }} 
            activeOpacity={.75} onPress={onPress}
        >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {
                    text === 'Settings' ? <Ionicons size={25} color='grey' name='ios-cog' />
                    : <Feather size={18} name={iconName} color='rgba(0, 0, 0, 0.55)' />
                }
                <Text style={styles.listText}>{text}</Text>
            </View>
            <Ionicons size={20} color='grey' name='ios-arrow-forward' />
        </TouchableOpacity>
        <View style={styles.separator} />
    </View>
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
        color: 'rgba(0, 0, 0, 0.7)',
        paddingLeft: 15
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e8e8e8',
        marginLeft: 40
    },
});