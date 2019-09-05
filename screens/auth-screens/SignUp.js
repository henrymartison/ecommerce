import React, {Component} from 'react'
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import { Container, Content, Header, Title, Body, Thumbnail, Form, Item, Label, Input, Icon, Button, Right, Left } from 'native-base';
import Divider from 'react-native-divider'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import { fontSizeResponsive as fsr } from '../../components/metrics';
import { TouchableOpacity } from '../../components/TouchableOpacity';


const agreement = 'By creating an account, you have read and agree to accept Marvalinks'

export default class SignUp extends Component {
    render() {
        return(
            <Container>
                <SafeAreaView>
                    <Header>
                        <Left/>
                        <Body>
                            <Title>Create Account</Title>
                        </Body>
                        <Right>
                            <Icon name='ios-close-circle-outline' style={{color: 'grey'}} />
                        </Right>
                    </Header>
                </SafeAreaView>

                <Content>
                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <Text style={{fontSize: fsr(2.5)}}>Sign in with your social account</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                        <View style={{marginRight: 10}}>
                            <Thumbnail source={require('../../assets/images/logos/fb_alt.png')} />
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Thumbnail source={require('../../assets/images/logos/twitter.png')} />
                        </View>
                    </View>
                    <Divider borderColor="#e8e8e8" color="#000" orientation="center">
                        OR
                    </Divider>

                    <Form>
                        <Item floatingLabel>
                            <Label style={{opacity: .7}}>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{opacity: .7}}>Password</Label>
                            <Input placeholder='pass' secureTextEntry={true} />
                            <Icon name='ios-eye' style={{color: 'grey'}} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{opacity: .7}}>Re-type Password</Label>
                            <Input placeholder='pass' secureTextEntry={true} />
                            <Icon name='ios-eye' style={{color: 'grey'}} />
                        </Item>
                        <View style={{alignItems: 'center', marginTop: 18,}}>
                            <Text style={{textAlign: 'center',}}>{agreement}</Text>
                            <TouchableOpacity onPress={() => alert('Registration Agreement')}>
                                <Text style={{textAlign: 'center', color: 'blue'}}>Registration Agreement</Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            onPress={() => alert('Account created`')}
                            style={{marginHorizontal: wp('5%'), backgroundColor: 'orange', justifyContent: 'center', marginTop: 20}}>
                            <Text style={{fontSize: fsr(2.2)}}>Agree and Create Account</Text>
                        </Button>

                    </Form>

                </Content>
            </Container>
        )
    }
}