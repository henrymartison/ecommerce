import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import { Icon } from 'native-base'


import ShoppingCartIcon from '../../../components/ShoppingCartIcon'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import Colors from '../../../constants/Colors'
import FavoriteCardItem from '../../../components/Favorites/FavoriteCardItem'

export default class Favorites extends Component{
  static navigationOptions = {
    title: 'Favorites',
    headerTitleStyle: {fontWeight: '400'},
    headerRight: (
        <ShoppingCartIcon/>
      ),
      headerLeft: (
          <TouchableOpacity>
              <Icon name='md-arrow-back' style={{paddingLeft: 10, fontWeight: '400'}} />
          </TouchableOpacity>
      )
    }
  render() {
        
    return(
      <ScrollView style={{flex: 1, backgroundColor: Colors.bgColorDeep}}>
        <FavoriteCardItem
          itemCreator='Generic'
          itemName='Generic 1017E 10 inch Full HD External Headrest Monitors'
          itemPrice='665'
          prevPrice='763'
          imageUri={require('../../../assets/images/card/1.jpg')}
        />
        <FavoriteCardItem
          itemCreator='WD'
          itemName='WD WDBYFT0040BBK-WESN My Passport USB 3.0 Secure Portable External Hard Drive - 4TB Black'
          itemPrice='605'
          prevPrice='691'
          imageUri={require('../../../assets/images/card/2.jpg')}
        />
        <FavoriteCardItem
          itemCreator='Generic'
          itemName='Generic lodaon Fashion Women Lady Loose Long Sleeve Chiffon Casual Blouse Shirt Tops Blouse'
          itemPrice='25'
          prevPrice='44'
          imageUri={require('../../../assets/images/card/3.jpg')}
        />
        <FavoriteCardItem
          itemCreator='DELL'
          itemName='DELL Inspiron 3573 - Intel Celeron N4000U - 500GB HDD - 4GB RAM -15.6" HD - Windows 10 - Black'
          itemPrice='1370'
          prevPrice='1500'
          imageUri={require('../../../assets/images/card/4.jpg')}
        />
      </ScrollView>
    )
  }
}
