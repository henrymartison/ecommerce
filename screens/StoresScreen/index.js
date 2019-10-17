import React, {Component} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { Container, Content, Tabs, Tab, ScrollableTab, Header, Icon, Item, Input, Button } from 'native-base'
import PTRView from 'react-native-pull-to-refresh'

import Recommended from './Store-Tabs/Recommended'
import Following from './Store-Tabs/Following'
import PurchasedFrom from './Store-Tabs/PurchasedFrom'
import ShoppingCartIcon from '../../components/ShoppingCartIcon'
import Colors from '../../constants/Colors'
import Search from '../../components/common/Search'

export default class Store extends Component{
    static navigationOptions = {
        header: <Search />
    }

    _refresh = () => {
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
      }
    render() {
        return(
            <Container style={{backgroundColor: Colors.bgColor}}>
                <PTRView onRefresh={this._refresh}>
                    <Content>
                        {/* <Tabs
                            tabBarUnderlineStyle={{backgroundColor: '#000', height: 1.5,}}
                            tabBarActiveTextColor='#000'
                            initialPage={1}
                            locked={true}
                            // renderTabBar={() => <ScrollableTab />}
                            >
                            <Tab heading="Purchased From">
                                <PurchasedFrom />
                            </Tab>
                            <Tab heading="Recommended">
                                <Recommended />
                            </Tab>
                            <Tab heading="Following">
                                <Following />
                            </Tab>
                        </Tabs> */}

                        <View>
                            <Recommended />
                        </View>
                    </Content>
                </PTRView>
            </Container>
        )
    }
}