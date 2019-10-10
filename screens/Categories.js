import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView} from 'react-native'
import {Container, Content, Header, Icon, Item, Button, Input} from 'native-base'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'


import ShoppingCartIcon from '../components/ShoppingCartIcon';
import CategoryCard from '../components/Categories/CategoryCard';
import Colors from '../constants/Colors';

export default class Categories extends Component{
  render() {
    return(
      <View style={{backgroundColor: Colors.bgColorDeep, flex: 1}}>
        <SafeAreaView>
          <Header searchBar rounded style={{backgroundColor: '#fff', paddingBottom: 10}}>
              {/* <Icon name='ios-menu' style={{paddingTop: 3, color: 'gray'}} /> */}
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

        <ScrollView style={{flex: 1}}>
        <View style={{height: hp('8%'), marginHorizontal: 10, marginTop: 10, borderRadius: 10, backgroundColor: 'white', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>SEE ALL PRODUCTS</Text>
                    <Ionicons name='ios-arrow-forward' size={18}/>
                </View>
            </View>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </ScrollView>
     </View>
    )
  }
}

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  categories: {
    backgroundColor: 'orange',
    flex: 1
  }
})
