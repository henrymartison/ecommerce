import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Deals extends Component{
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Deals</Text>
            </View>
        )
    }
}

import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {List, ListItem, Left, Right, Body, Icon} from 'native-base'
import StarRating from 'react-native-star-rating'
import ReadMore from 'react-native-read-more-text'

import { TouchableOpacity } from './TouchableOpacity';




const renderTruncatedFooter = handlePress => (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.readMore}>Read more</Text>
    </TouchableOpacity>
  );

  const renderRevealedFooter = handlePress => (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.readMore}>Read less</Text>
    </TouchableOpacity>
  );

class DetailsComponent extends Component{

    _renderTruncatedFooter = (handlePress) => {
        return (
          <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
            Read more
          </RegularText>
        );
      }

      _renderRevealedFooter = (handlePress) => {
        return (
          <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
            Show less
          </RegularText>
        );
      }

    
    render() {

        const {
            imageUri,
            itemName,
            itemPrice,
            rating,
            itemCreator,
            savings,
            onPress,
            productDescription,
            sellerInfo,
            prevPrice,
            rate
        } = this.props
 
    return (
        <ScrollView>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                    <Text style={{color: 'gray', fontSize: 15}}>{itemCreator}</Text>
                    <Text style={{paddingTop: 5, fontSize: 18, fontWeight: '500'}}>{itemName}</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 50}}>
                    <Image source={require('../assets/images/card/1.jpg')}  style={{height: 150, width: 150}} />
                    <Icon name='ios-heart-empty' style={{position: 'absolute', top: -20, right: 20, color: 'orange', fontSize:23}} />
                </View>
                <View>
                    <ListItem icon>
                        <Body />
                            
                     </ListItem>
                    <ListItem icon>
                        <Body>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.listText}>GH₵ {itemPrice}</Text>
                                <Text style={styles.strikeThrough}>GH₵ {prevPrice}</Text>
                                <View style={styles.discountBox}>
                                    <Text style={{color: 'orange', fontSize: 14}}>-{savings}%</Text>
                                </View>
                            </View>
                        </Body>
                     </ListItem>
                     <TouchableOpacity onPress={onPress}>
                        <ListItem icon>
                
                            <Body style={{flex: 1, alignItems: 'flex-start'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <StarRating
                                            disabled={true}
                                            reversed={true}
                                            maxStars={5}
                                            rating={rating}
                                            starSize={12}
                                            fullStarColor='orange'
                                            emptyStarColor='orange'
                                            halfStarEnabled={true}
                                        />
                                        <Text style={{paddingLeft: 10, color: '#1A5276'}}>{rate} ratings</Text>
                                    </View>
                            </Body>
                            <Right>
                                <Icon name='arrow-forward' />
                            </Right>
                        </ListItem>
                     </TouchableOpacity>

                        <ListItem itemDivider style={{paddingTop: 20}}>
                         <Text style={{fontWeight: 'bold'}}>DESCRIPTION</Text>
                        </ListItem>

                     <ListItem icon>
                         <Body>
                             <Text>{productDescription}</Text>
                         </Body>
                     </ListItem>

                     <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{fontWeight: 'bold'}}>SELLER INFORMATION</Text>
                    </ListItem>

                    <ListItem icon>
                         <Body>
                             <Text>{sellerInfo}</Text>
                         </Body>
                     </ListItem>
                    
                    <ListItem icon>
                         <Body>
                             <Text>Delivery in Accra between Monday 2 Sep and Friday 6 Sep</Text>
                         </Body>
                     </ListItem>
                </View>
            </ScrollView>
    );
}
}
export default DetailsComponent;

const styles = StyleSheet.create({
    listText: {
        fontSize: 18,
        fontWeight: '400'
    },
    strikeThrough: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationColor: 'gray',
        textDecorationStyle: 'solid',
        color: 'gray',
        paddingLeft: 10
    },
    discountBox: {
        borderWidth: 1,
        borderColor: 'orange',
        width: 40,
        alignItems: 'center',
        marginLeft: 10
    }
})
