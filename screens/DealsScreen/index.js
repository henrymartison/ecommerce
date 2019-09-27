import React, {Component} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { Container, Content, Tabs, Tab, ScrollableTab, Header, Icon, Item, Input, Button } from 'native-base'
import PTRView from 'react-native-pull-to-refresh'

import Tab1 from './Product-Tabs/tab1'
import Tab2 from './Product-Tabs/tab2'
import Tab3 from './Product-Tabs/tab3'
import Tab4 from './Product-Tabs/tab4'
import Tab5 from './Product-Tabs/tab5'


export default class Deals extends Component{
    static navigationOptions = {
        header: null
    }

    _refresh = () => {
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
      }
    render() {
        return(
            <Container>
                <SafeAreaView>
                    <Header searchBar rounded style={{backgroundColor: '#fff', paddingBottom: 10}}>
                        <Icon name='ios-menu' style={{paddingTop: 3, color: 'gray'}} />
                        <Item style={{marginLeft: 10}}>
                            <Icon name="ios-search" />
                            <Input 
                            placeholder="I'm shopping for..." 
                            placeholderTextColor='gray'
                            returnKeyType='search'
                            />
                            <Icon name="ios-camera" style={{color: 'gray'}} />
                        </Item>
                        <Button transparent onPress={() => navigate('Cart')}>
                            <Icon name='ios-cart' style={{color: 'gray'}} />
                        </Button>
                    </Header>
                </SafeAreaView>

                <PTRView onRefresh={this._refresh}>
                    <Content>
                        <Tabs
                            tabBarUnderlineStyle={{backgroundColor: 'orange', height: 1.5,}}
                            tabBarTextStyle={{color: 'orange'}}
                            renderTabBar={()=> <ScrollableTab />}
                            >
                            <Tab heading="Just for You">
                                <Tab1 />
                            </Tab>
                            <Tab heading="Ending soon">
                                <Tab2 />
                            </Tab>
                            <Tab heading="Health & Beauty">
                                <Tab3 />
                            </Tab>
                            <Tab heading="Jewelry">
                                <Tab4 />
                            </Tab>
                            <Tab heading="Electronics">
                                <Tab5 />
                            </Tab>
                        </Tabs>
                    </Content>
                </PTRView>
            </Container>
        )
    }
}