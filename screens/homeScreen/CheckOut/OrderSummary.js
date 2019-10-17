import React from 'react'
import {View, StyleSheet,Platform} from 'react-native'
import {Header, Left, Body, Title, Subtitle, Right, Icon, Button} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'


import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import SummaryComponent from '.'
import CustomHeader from '../../../components/common/Header'

export default class OrderSummary extends React.Component{
    static navigationOptions = ({navigation}) => ({
        header: Platform.OS === 'ios' ? null
        : <CustomHeader 
            title='Payment' 
            onPress={() => navigation.goBack()} 
        />
    })
    constructor(props) {
        super(props);
        
      }

      

    render() {
        const {goBack} = this.props.navigation
        
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
                        <Subtitle>Order Summary</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                : null
                }

                <ScrollView style={{marginBottom: 10}}>
                    <SummaryComponent/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({})