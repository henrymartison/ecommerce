import React, {Component} from 'react'
import {View, Text, Image, SafeAreaView} from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Content, CardItem, CheckBox } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import {fontSizeResponsive as fsr} from '../../components/metrics'
import { TouchableOpacity } from '../../components/TouchableOpacity';



export default class Cart extends Component{

    static navigationOptions = {
        header: null
    }

    render() {

        const {navigate, goBack} = this.props.navigation

        return(
            <Container style={{backgroundColor: 'rgb(247,247,247)'}}>
                <SafeAreaView>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='md-arrow-back' style={{color: 'black'}} />
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <Button transparent>
                            <Icon name='ios-information-circle-outline' style={{color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-trash' style={{color: 'black'}} />
                        </Button>
                    </Right>
                </Header>
                </SafeAreaView>
                
                <Content contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
                    <View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: fsr(4.4), fontWeight: '600'}}>Cart</Text>
                    </View>
                    <View>
                        <CardItem bordered>
                            <Body>
                                <Text>Generic</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity>
                                    <Text>Get Coupons</Text>
                                </TouchableOpacity>
                            </Right>
                        </CardItem>
                        
                        <TouchableOpacity activeOpacity={.75}>
                            <CardItem bordered>
                                <View>
                                    <Image
                                        style={{height: hp('10%'), width: wp('18%')}} 
                                        source={require('../../assets/images/card/1.jpg')} />
                                </View>
                                <Right style={{flex: 1, alignItems: 'flex-start', height: hp('14%'), paddingHorizontal: 20}}>
                                    <Text>Generic 1017E 10 inch Full HD External Headrest Monitors</Text>
                                    <Text style={{color: 'grey', fontSize: 13}}>Dummy Text</Text>

                                    <View style={{flexDirection: 'row'}}>
                                        <Button transparent>
                                            <Text style={{fontSize: fsr(5)}}>+   </Text>
                                            <Text style={{fontSize: fsr(3)}}> 0</Text>
                                        </Button>
                                        <Button transparent>
                                            <Text style={{fontSize: fsr(5)}}>   -</Text>
                                        </Button>
                                    </View>
                                    
                                    
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                        
                        <CardItem style={{height: hp('8%')}}>
                            <Left/>
                            <Body/>
                            <Right>
                                <Text style={{paddingRight: wp('10%')}}>SubTotal: GHC 432.00</Text>
                            </Right>
                        </CardItem>
                    </View>
                    </View>
                    <Button style={{marginHorizontal: wp('5%'), backgroundColor: 'orange', justifyContent: 'center', marginBottom: hp('2%')}}>
                        <Text style={{fontSize: fsr(2.2)}}>Check Out</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}