import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import { Container, Header, Left, Right, Icon, Body, Subtitle, Title, Content } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'


import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import DeliveryCardItem from '../../../components/CheckOut/Delivery/DeliveryCardItem'
import AddressCardItem from '../../../components/CheckOut/Delivery/AddressCardItem'
import PaymentCardItem from '../../../components/CheckOut/Delivery/PaymentCardItem'

import CustomHeader from '../../../components/common/Header'

export default class CompleteOrder extends Component{
    static navigationOptions = ({navigation}) => ({
        header: Platform.OS === 'ios' ? null
        : <CustomHeader 
            title='Delivery' 
            onPress={() => navigation.goBack()} 
        />
    })

    render() {

        const {navigate, goBack} = this.props.navigation
        return (
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                {
                    Platform.OS === 'ios' ? 
                    <Header>
                    <Left>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='md-arrow-back'/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title>Checkout</Title>
                        <Subtitle>Method of Delivery</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                : null
                }

                <ScrollView>
                    <View style={{marginBottom: 20}}>
                        <AddressCardItem
                            firstName='Henry'
                            lastName='Martison'
                            region='Greater Accra'
                            city='Madina'
                            address='Ashaley Botwe'
                            mobileNumber='549695108'
                        />
                        <DeliveryCardItem/>
                        <PaymentCardItem/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}