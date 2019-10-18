import React, {Component} from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Container, Content, Tabs, Tab, ScrollableTab, Header, Icon, Item, Input, Button } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'


import Home from './Home'
import Products from './Products'
import Information from './Information'
import StoreCategories from './Categories'

import Colors from '../../../constants/Colors'
import ShoppingCartIcon from '../../../components/ShoppingCartIcon'
import { TouchableOpacity } from '../../../components/TouchableOpacity'

import Search from '../../../components/common/Search'


export default class StoreTabScreen extends Component{
    static navigationOptions = ({navigation}) => ({
        header: <Search arrowCheck onPress={() => navigation.goBack()} />
    })

    state = {
        productCount: '241'
    }

    render() {
        const {productCount} = this.state

        return (
            <Container style={{backgroundColor: Colors.bgColor}}>
                
                <View style={{height: hp('6.8%'), backgroundColor: 'white', alignItems: 'flex-end', paddingRight: 25, justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => this.props.navigation.navigate('Filter')}
                    >
                        <Feather name='filter' size={20} color={Colors.PRIMARY} />
                        <Text style={{fontWeight: '600', fontSize: 16, color: Colors.PRIMARY}}>Filter</Text>
                    </TouchableOpacity>

                    
                </View>

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
                    <Tab heading={`Products (${productCount})`} textStyle={{textAlign: 'center'}}>
                        <Products />
                    </Tab>
                    {/* <Tab heading="Categories" textStyle={{textAlign: 'center'}}>
                        <StoreCategories />
                    </Tab>
                    <Tab heading="Store Infomation" textStyle={{textAlign: 'center'}}>
                        <Information />
                    </Tab> */}
                </Tabs>
            </Container>
        )
    }
}