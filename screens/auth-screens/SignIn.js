import React, {Component} from 'react'
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import { Container, Content, Header, Title, Body, Thumbnail, Form, Item, Label, Input, Icon, Button, Right, Left } from 'native-base';
import Divider from 'react-native-divider'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import { fontSizeResponsive as fsr } from '../../components/metrics';
import { TouchableOpacity } from '../../components/TouchableOpacity';

export default class SignIn extends Component {
    render() {
        return(
            <Container>
                <SafeAreaView>
                    <Header>
                        <Left/>
                        <Body>
                            <Title>Sign In</Title>
                        </Body>
                        <Right>
                            <Icon name='ios-close-circle-outline' style={{color: 'grey'}} />
                        </Right>
                    </Header>
                </SafeAreaView>

                <Content>
                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <Text style={{fontSize: fsr(2.5), opacity: .5}}>Sign in with your social account</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                        <TouchableOpacity style={{marginRight: 10}}>
                            <Thumbnail source={require('../../assets/images/logos/fb_alt.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 20}}>
                            <Thumbnail source={require('../../assets/images/logos/twitter.png')} />
                        </TouchableOpacity>
                    </View>
                    <Divider borderColor="#e8e8e8" color="#000" orientation="center">
                        OR
                    </Divider>

                    <Form>
                        <Item floatingLabel>
                            <Label style={{opacity: .7}}>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{opacity: .7}}>Password</Label>
                            <Input secureTextEntry={true} />
                            <Icon name='ios-eye' style={{color: 'grey'}} />
                        </Item>
                        <Button style={{marginHorizontal: wp('5%'), backgroundColor: 'orange', justifyContent: 'center', marginTop: 20}}>
                            <Text style={{fontSize: fsr(2.2)}}>Sign In</Text>
                        </Button>

                        <TouchableOpacity style={{alignItems: 'center', marginTop: 18,}} onPress={() => alert('Forgot Password')}>
                            <Text style={{color: 'blue', opacity: .5}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </Form>

                    <View style={{alignItems: 'center', marginTop: hp('10%')}}>
                        <Text style={{fontSize: fsr(2.2), fontWeight: '400'}}>Not a member?</Text>
                        <Button block bordered warning style={{marginHorizontal: wp('5%'), marginTop: 18,}} onPress={() => this.props.navigation.navigate('SignUp')} >
                            <Text style={{fontSize: fsr(2.2), color: 'orange'}}>Create an account</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }
}