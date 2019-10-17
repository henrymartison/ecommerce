import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView} from 'react-native'
import {Container, Content, Header, Icon, Item, Button, Input} from 'native-base'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'


import CategoryCard from '../../components/Categories/CategoryCard';
import Colors from '../../constants/Colors';
import Search from '../../components/common/Search'
import CategoryRowItem from '../../components/Categories/CategoryRowItem'

export default class Categories extends Component{
  static navigationOptions = {
    header: <Search/>
  }
  render() {
    return(
      <View style={{backgroundColor: Colors.bgColorDeep, flex: 1}}>
        <ScrollView style={{flex: 1}}>
        {/* <View style={{height: hp('8%'), marginHorizontal: 10, marginTop: 10, borderRadius: 10, backgroundColor: 'white', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>SEE ALL PRODUCTS</Text>
                    <Ionicons name='ios-arrow-forward' size={18}/>
                </View>
            </View> */}
          
          <CategoryRowItem/>
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
