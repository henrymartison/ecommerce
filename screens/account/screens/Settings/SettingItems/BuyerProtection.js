import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Icon } from 'native-base'

import { TouchableOpacity } from '../../../../../components/TouchableOpacity'
import Colors from '../../../../../constants/Colors'

export default class BuyerProtection extends Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Ecommerce Mobile',
        headerTitleStyle: {fontWeight: '400'},
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
            </TouchableOpacity>
        )
    })

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: Colors.bgColor, paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={styles.titleText}>Ecommerce Service Pledge</Text>
                <Text style={styles.contentText}>
                    Reprehenderit irure id eu nisi. Tempor laboris cupidatat veniam labore velit. Et aliquip deserunt magna aute in aliqua fugiat aute aliquip eiusmod excepteur exercitation voluptate elit. Qui pariatur veniam laboris commodo. Anim non proident duis elit anim nisi nisi aliqua anim in. Reprehenderit Lorem enim exercitation minim cillum duis mollit.

                    Quis fugiat mollit esse fugiat sit aliqua nulla reprehenderit commodo. Aliqua qui quis magna aliquip proident ex pariatur sit. Adipisicing aliquip dolore ut excepteur. Ad voluptate tempor deserunt aute. Fugiat cupidatat tempor et eiusmod amet eiusmod incididunt.

                    Irure pariatur ut ut reprehenderit non aute cillum consectetur elit. Esse voluptate id excepteur in enim esse consequat cupidatat culpa labore fugiat. Duis magna adipisicing ad sint officia est consectetur id duis eu nostrud id veniam fugiat. Ex mollit culpa laborum qui voluptate occaecat Lorem elit. Est cupidatat nulla Lorem dolore enim. Exercitation ad pariatur dolore minim velit eiusmod exercitation dolor exercitation laboris pariatur eu.

                    Duis cillum voluptate tempor sint enim laboris consequat proident cupidatat. Cupidatat laboris quis dolore irure. Aute aute nostrud pariatur deserunt tempor in est occaecat elit. Laboris sit et do irure commodo aute mollit.

                    In qui voluptate adipisicing excepteur cillum voluptate duis sunt ea ea nulla Lorem anim. Nulla elit tempor ut dolore laborum duis nisi ex officia nostrud esse aute enim. Amet ea exercitation qui sit quis.

                    Irure officia ipsum proident nisi nisi nostrud eiusmod voluptate duis. Veniam exercitation dolor velit laboris deserunt aute enim aute aute commodo non. Occaecat consequat anim nulla reprehenderit commodo consequat excepteur id dolor. Voluptate do ipsum et in in enim fugiat.

                    Ad pariatur eiusmod commodo adipisicing eiusmod nulla quis voluptate ullamco aliqua occaecat ea et. Voluptate ullamco do consequat elit reprehenderit Lorem adipisicing adipisicing. Reprehenderit excepteur consectetur quis sunt id exercitation. Nostrud in sit excepteur tempor. Labore duis quis laboris anim proident cillum id magna ut fugiat eiusmod voluptate dolore pariatur.
                    Ad pariatur eiusmod commodo adipisicing eiusmod nulla quis voluptate ullamco aliqua occaecat ea et. Voluptate ullamco do consequat elit reprehenderit Lorem adipisicing adipisicing. Reprehenderit excepteur consectetur quis sunt id exercitation. Nostrud in sit excepteur tempor. Labore duis quis laboris anim proident cillum id magna ut fugiat eiusmod voluptate dolore pariatur.
                    Ad pariatur eiusmod commodo adipisicing eiusmod nulla quis voluptate ullamco aliqua occaecat ea et. Voluptate ullamco do consequat elit reprehenderit Lorem adipisicing adipisicing. Reprehenderit excepteur consectetur quis sunt id exercitation. Nostrud in sit excepteur tempor. Labore duis quis laboris anim proident cillum id magna ut fugiat eiusmod voluptate dolore pariatur.
                    Ad pariatur eiusmod commodo adipisicing eiusmod nulla quis voluptate ullamco aliqua occaecat ea et. Voluptate ullamco do consequat elit reprehenderit Lorem adipisicing adipisicing. Reprehenderit excepteur consectetur quis sunt id exercitation. Nostrud in sit excepteur tempor. Labore duis quis laboris anim proident cillum id magna ut fugiat eiusmod voluptate dolore pariatur.
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        fontWeight: '700'
    },
    contentText: {
        paddingTop: 10
    }
})