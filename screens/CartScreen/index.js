import React, {Component} from 'react'
import {View, Text, Image, SafeAreaView, StyleSheet, Alert} from 'react-native'
import { Button, Icon, } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { showMessage } from "react-native-flash-message"
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


import { TouchableOpacity } from '../../components/TouchableOpacity';
import CartItem from '../../components/CartItem';

import Colors from '../../constants/Colors'
import ShoppingCartIcon from '../../components/ShoppingCartIcon';


export default class Cart extends Component{

    static navigationOptions = ({navigation}) => ({
        title: 'Cart',
        headerRight: navigation.state.params && navigation.state.params.headerRight,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
            </TouchableOpacity>
        )
    })

    componentDidMount(){
        this.props.navigation.setParams({
            headerRight: (
                <View style={{flexDirection: 'row'}}>
                    <Button transparent onPress={this.onPressInfoButton}>
                        <Icon name='ios-information-circle-outline' style={{color: 'black'}} />
                    </Button>
                    <Button transparent onPress={this.onPressTrashButton}>
                        <Icon name='ios-trash' style={{color: 'black'}} />
                    </Button>
                </View>
                ),
        })
   }

    onPressInfoButton() {
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

    _updateCart = () => {
        showMessage({
            message: 'Cart Updated',
            type: 'success',
            style: {alignItems: 'center'}
        })
        
        
    }

    render() {

        const {navigate, goBack} = this.props.navigation
        const name = 'Generic 1017E 10 inch Full HD External Headrest Monitors'
        const length = 50
        const trimmedString = name.length > length ? name.substring(0, length - 3) + "..." : name

        return(
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                
                <ScrollView>
                        <CartItem
                            itemName={trimmedString}
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/6.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />
                        <CartItem
                            itemName={trimmedString}
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/5.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />
                        <CartItem
                            itemName={trimmedString}
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/4.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />
                        <CartItem
                            itemName={trimmedString}
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/2.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />
                        <CartItem
                            itemName={trimmedString}
                            itemCreator='Generic'
                            itemPrice='546'
                            prevPrice='672'
                            imageUri={require('../../assets/images/card/1.jpg')}
                            onDeletePress={this.onPressTrashButton}
                        />

                </ScrollView>
                
                <View style={styles.bottomView}>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', backgroundColor: Colors.bgColorDeep}}>
                        <View style={{flexDirection: 'row', paddingRight: 15, alignItems: 'center'}}>
                            <Text style={{color: 'grey', fontSize: 16}}>SubTotal: </Text>
                            <Text style={{fontSize: 22, fontWeight: '600'}}>GH₵ 546</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={styles.updateCart}>
                            <TouchableOpacity onPress={this._updateCart}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <ShoppingCartIcon/>
                                    <Text style={{paddingLeft: 10}}>Update Cart</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.checkoutButton}>
                            <TouchableOpacity onPress={() => navigate('CompleteOrder')}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'white'}}>Proceed to Checkout</Text>
                                    <Ionicons name='ios-arrow-forward' color='white' size={24} style={{paddingLeft: 10}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const tabHeight = hp('8%')


const styles = StyleSheet.create({
    bottomView: {
        height: hp('15%'),
        backgroundColor: 'white'
    },
    checkoutButton: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateCart: {
        flex: 1,
        backgroundColor: 'rgba(255,203,5, .4)',
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center'

    }
})