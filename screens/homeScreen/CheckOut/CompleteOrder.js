import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Container, Header, Left, Right, Icon, Body, Subtitle, Title, Content } from 'native-base'


import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import DeliveryCardItem from '../../../components/CheckOut/Delivery/DeliveryCardItem'
import AddressCardItem from '../../../components/CheckOut/Delivery/AddressCardItem'
import PaymentCardItem from '../../../components/CheckOut/Delivery/PaymentCardItem'
import { ScrollView } from 'react-native-gesture-handler'

export default class CompleteOrder extends Component{
    static navigationOptions = {
        header: null
    }

    render() {

        const {navigate, goBack} = this.props.navigation
        return (
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
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

                <ScrollView>
                    <View style={{marginBottom: 20}}>
                        <AddressCardItem/>
                        <DeliveryCardItem/>
                        <PaymentCardItem/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}