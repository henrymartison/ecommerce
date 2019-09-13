import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Container, Header, Content, Tabs, Tab, ScrollableTab } from 'native-base'

import Tab1 from './Product-Tabs/tab1'
import Tab2 from './Product-Tabs/tab2'
import Tab3 from './Product-Tabs/tab3'
import Tab4 from './Product-Tabs/tab4'
import Tab5 from './Product-Tabs/tab5'

export default class Deals extends Component{
    render() {
        return(
            <Container>
                {/* <Header/> */}
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
            </Container>
        )
    }
}