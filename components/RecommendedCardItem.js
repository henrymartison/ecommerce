import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {
    Card, CardItem, Right
} from 'native-base'
import StarRating from 'react-native-star-rating'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { TouchableOpacity } from "react-native-gesture-handler"
import {fontSizeResponsive} from './metrics'

const RecommendedCardItem = ({imageUri, itemName, itemPrice, rating, itemCreator, savings, onPress}) => {
        return (
            <TouchableOpacity activeOpacity={.75} onPress={onPress}>
                <CardItem bordered>
                    <View>
                        <Image
                            style={{height: hp('10%'), width: wp('18%')}} 
                            source={imageUri} />
                    </View>
                    <Right style={{flex: 1, alignItems: 'flex-start', paddingHorizontal: 20}}>
                        <Text>{itemName}</Text>
                        <Text style={{color: 'grey', fontSize: 11, paddingVertical: 2}}>{itemCreator}</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'red'}}>{itemPrice}</Text>
                        <Text><Text style={{color: 'grey', fontWeight: '300', fontSize: 12}}>
                            Save
                        </Text> {savings}</Text>
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
                    </Right>
                </CardItem>
            </TouchableOpacity>
        );
    }
export default RecommendedCardItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});