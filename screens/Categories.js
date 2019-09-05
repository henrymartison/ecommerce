import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Container, Content, Header, Icon, Item, Button, Input} from 'native-base'
import CategoryList from '../components/CategoryList';

export default class Categories extends Component{
  render() {
    return(
     <Container style={{backgroundColor: '#d5d5d6'}}>
       <Header searchBar rounded style={{backgroundColor: '#5D3F39'}}>
          <Item>
            <Icon name="ios-search" />
            <Input 
              placeholder="Search for Products, Brands..." 
              returnKeyType='search'
            />
            {/* <Icon name="ios-people" /> */}
          </Item>
          <Button transparent>
            <Icon name='ios-cart' style={{color: '#fff'}} />
          </Button>
        </Header>

        <Content>
          <View>
            <View style={styles.categories}>
              <CategoryList title='Phones & Tablets' onPress={() => alert('')} />
              <CategoryList title='Electronics' />
              <CategoryList title="Men's Fashion" />
              <CategoryList title="Women's Fashion" />
              <CategoryList title='Groceries' />
              <CategoryList title='Computing' />
              <CategoryList title='Baby Products' />
              <CategoryList title='Health & Beauty' />
              <CategoryList title='Gaming' />
            </View>
          </View>
        </Content>
     </Container>
    )
  }
}

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
    width: (SCREEN_WIDTH/3) - 18,
  }
})
