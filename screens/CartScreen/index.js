import React, {Component} from 'react'
import {View, Text, Image, SafeAreaView, StyleSheet, Alert} from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Content, CardItem, CheckBox } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import {fontSizeResponsive as fsr} from '../../components/metrics'
import { TouchableOpacity } from '../../components/TouchableOpacity';
import CartItem from '../../components/CartItem';

import Colors from '../../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler';



export default class Cart extends Component{

    static navigationOptions = {
        header: null
    }

    onPressInfoButton = () => {
        Alert.alert(
            'Mixed Order Rules',
            'Items now added to your cart from the same product page with the same price, regardless of their options (size, color, etc), will now be regarded as the same product, and therefore be eligible for wholesale proving discounts.',
            [
              
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    onPressTrashButton = () => {
        Alert.alert(
            '',
            'Are you sure you want to empty your cart?',
            [
                {text: 'REMOVE', onPress: () => console.log('Cart emptied')},
                {text: 'CANCEL', onPress: () => console.log('Cancelled')},
            ]
        )
    }

    render() {

        const {navigate, goBack} = this.props.navigation

        return(
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='md-arrow-back' style={{color: 'black'}} />
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <Button transparent onPress={this.onPressInfoButton}>
                            <Icon name='ios-information-circle-outline' style={{color: 'black'}} />
                        </Button>
                        <Button transparent onPress={this.onPressTrashButton}>
                            <Icon name='ios-trash' style={{color: 'black'}} />
                        </Button>
                    </Right>
                </Header>
                
                <ScrollView>
                        <CartItem
                            itemName='Generic 1017E 10 inch Full HD External Headrest Monitors'
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/1.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />

                </ScrollView>
                
                <View style={styles.bottomView}>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', paddingRight: 15, alignItems: 'center'}}>
                            <Text style={{color: 'grey', fontSize: 16}}>SubTotal: </Text>
                            <Text style={{fontSize: 22, fontWeight: '600'}}>GH₵ 546</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                    <Button 
                        onPress={() => alert('Checked Out')}
                        style={styles.checkoutButton}>
                        <Text style={{fontSize: 18}}>Proceed To Check Out</Text>
                    </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomView: {
        height: hp('15%'),
        backgroundColor: 'white'
    },
    checkoutButton: {
        marginHorizontal: wp('2%'),
        backgroundColor: 'orange',
        justifyContent: 'center',
    }
})