import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Button} from 'native-base'
import { TouchableOpacity } from "./TouchableOpacity";


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const CategoryList = ({title, onPress}) => (
            <TouchableOpacity onPress={onPress} style={{ justifyContent: 'center', height: 70, marginHorizontal: 20}}>
                <Text style={{fontSize: 15, fontWeight: '600', color: 'gray'}}>{title}</Text>
            </TouchableOpacity>
    )
export default CategoryList;

const styles = StyleSheet.create({
    categories: {
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT,
        width: (SCREEN_WIDTH/3) - 25,
      }
});