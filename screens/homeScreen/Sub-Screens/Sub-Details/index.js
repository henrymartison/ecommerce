import React, { Component } from 'react';
import {SafeAreaView} from 'react-native'
import { Container, Header, Tab, Tabs, Title, TabHeading, Input, Button, Item, Icon, Text, Content, ScrollableTab, Left, Body, Right } from 'native-base';
import Description from './Description-Tabs/Description';
import Specifications from './Description-Tabs/Specifications';
import Reviews from './Description-Tabs/Reviews';
import { TouchableOpacity } from '../../../../components/TouchableOpacity';

export default class SubDetails extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
        <Container>
            <SafeAreaView>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-arrow-back' style={{color: '#000', fontSize: 24}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{fontSize: 20}}>Details</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('Cart Screen')}>
                            <Icon name='md-cart' style={{color: '#000', fontSize: 24}} />
                        </Button>
                    </Right>
                </Header>  
            </SafeAreaView>
        <Content>
        <Tabs
            tabBarUnderlineStyle={{backgroundColor: 'black', height: 1.5,}}
            tabBarActiveTextColor='#000'
            // renderTabBar={()=> <ScrollableTab />}
        >
          <Tab heading="Description">
            <Description />
          </Tab>
          <Tab heading="Specifications">
            <Specifications />
          </Tab>
          <Tab heading="Reviews / Rating">
            <Reviews />
          </Tab>
        </Tabs>
        </Content>
      </Container>
    );
  }
}