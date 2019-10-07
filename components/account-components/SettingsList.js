import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {List, ListItem, Left, Body, Right, Icon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '../../constants/Colors'



const attributes = [
    {id: '1', attribute: 'Ship to', subText: 'Ghana',},
    {id: '3', attribute: 'Privacy Policy'},
    {id: '4', attribute: 'Buyer Protection'},
    {id: '5', attribute: 'Legal'},
    {id: '2', attribute: 'Version Check', subText: '1.0.0'},
    {id: '6', attribute: 'FAQ'},
    {id: '7', attribute: 'Contact us'},
]

class SettingsList extends React.Component {

    renderAttributes() {
        return attributes.map((attr, index) => {
            return(
                <View key={attr.id} style={{height: hp('7%'),}}>
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={styles.listText}>{attr.attribute}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.listText, {paddingRight: 10}]}>{attr.subText}</Text>
                            <Ionicons name='ios-arrow-forward' color='grey' size={20} />
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            )
        })
    }

    render() {
        const {onPress, attribute, subText} = this.props

        return(
            <TouchableOpacity style={styles.container} activeOpacity={.75} onPress={onPress}>
                <View style={{height: hp('7%'),}}>
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={styles.listText}>{attribute}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.listText, {paddingRight: 10}]}>{subText}</Text>
                            <Ionicons name='ios-arrow-forward' color='grey' size={20} />
                        </View>
                    </View>
                </View>
                <View style={styles.separator}/>
            </TouchableOpacity>
        )
    }
}

export default SettingsList

const styles = StyleSheet.create({
    container: {
        // paddingTop: 10,
        backgroundColor: 'white'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    listText: {
        fontSize: 17,
        color: 'grey'
    }
})