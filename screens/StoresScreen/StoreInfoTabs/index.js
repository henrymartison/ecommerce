import React, {Component} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { Container, Content, Tabs, Tab, ScrollableTab, Header, Icon, Item, Input, Button } from 'native-base'


import Home from './Home'
import Products from './Products'
import Information from './Information'
import StoreCategories from './Categories'

import Colors from '../../../constants/Colors'
import ShoppingCartIcon from '../../../components/ShoppingCartIcon'
import { TouchableOpacity } from '../../../components/TouchableOpacity'



export default class StoreTabScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render() {
        const {navigate, goBack} = this.props.navigation
        return (
            <Container style={{backgroundColor: Colors.bgColor}}>
                <SafeAreaView>
                <Header searchBar rounded style={{backgroundColor: '#fff', paddingBottom: 10}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='md-arrow-back' style={{paddingTop: 3,}} />
                        </TouchableOpacity>
                        <Item style={{marginLeft: 10}}>
                            <Icon name="ios-search" />
                            <Input 
                            placeholder="I'm shopping for Products, Brands..." 
                            placeholderTextColor='gray'
                            returnKeyType='search'
                            />
                        </Item>
                        <ShoppingCartIcon/>
                    </Header>
                </SafeAreaView>


                    <Content>
                        <Tabs
                            tabBarUnderlineStyle={{backgroundColor: '#000', height: 1.5,}}
                            tabBarActiveTextColor='#000'
                            initialPage={0}
                            locked={false}
                            // renderTabBar={() => <ScrollableTab />}
                            >
                            <Tab heading="Store Home" textStyle={{textAlign: 'center'}}>
                                <Home />
                            </Tab>
                            <Tab heading="Products" textStyle={{textAlign: 'center'}}>
                                <Products />
                            </Tab>
                            <Tab heading="Categories" textStyle={{textAlign: 'center'}}>
                                <StoreCategories />
                            </Tab>
                            <Tab heading="Store Infomation" textStyle={{textAlign: 'center'}}>
                                <Information />
                            </Tab>
                        </Tabs>
                    </Content>
            </Container>
        )
    }
}