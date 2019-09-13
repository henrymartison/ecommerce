import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Container, Header, Content, Tabs, Tab, ScrollableTab } from 'native-base'

import Recommended from './Store-Tabs/Recommended'
import Following from './Store-Tabs/Following'
import PurchasedFrom from './Store-Tabs/PurchasedFrom'

export default class Deals extends Component{
    render() {
        return(
            <Container>
                {/* <Header/> */}
                <Content>
                    <Tabs
                        tabBarUnderlineStyle={{backgroundColor: 'orange', height: 1.5,}}
                        tabBarActiveTextColor='#000'
                        initialPage={1}
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
                    </Tabs>
                </Content>
            </Container>
        )
    }
}