import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Icon } from 'native-base'

import { TouchableOpacity } from '../../../../../components/TouchableOpacity'
import Colors from '../../../../../constants/Colors'

export default class Contact extends Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Contact Us',
        headerTitleStyle: {fontWeight: '400'},
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
            </TouchableOpacity>
        )
    })

    render() {
        return (
            <View style={{flex: 1, backgroundColor: Colors.bgColor}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Fax</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>86-10-82025922</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Office Hours</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>Mon-Sun 9:00am to 6:00pm(GMT+00:00)</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Customer Service Center</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>For inquiries regarding your recent orders, please Click Here.</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Brand Infringement Complaints</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>Intellectual Property Protection System</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Media Requests</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>ecommerce@example.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: Colors.bgColor,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    contentText: {
        fontWeight: '400',
        fontSize: 12
    }
})