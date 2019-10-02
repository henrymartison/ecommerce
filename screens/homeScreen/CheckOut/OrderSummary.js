import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header, Left, Body, Title, Subtitle, Right, Icon, Button} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import AddressCardItem from '../../../components/CheckOut/Delivery/AddressCardItem'
import ItemSummaryCard from '../../../components/CheckOut/Summary/ItemSummaryCard'
import DeliveryMethodCard from '../../../components/CheckOut/Summary/DeliveryMethodCard'
import { ScrollView } from 'react-native-gesture-handler'
import PaymentMethodCard from '../../../components/CheckOut/Summary/PaymentMethodCard'
import SummaryComponent from '.'

export default class OrderSummary extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        
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
                        <Subtitle>Order Summary</Subtitle>
                    </Body>
                    <Right/>
                </Header>

                <ScrollView style={{marginBottom: 10}}>
                    <SummaryComponent/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({})