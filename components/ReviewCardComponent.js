import React from 'react'
import {View, Text} from 'react-native'
import {CardItem, Icon, Right, Left, Body} from 'native-base'
import StarRating from 'react-native-star-rating'
import {withNavigation} from 'react-navigation'

import { TouchableOpacity } from './TouchableOpacity';
import {fontSizeResponsive as fsr} from '../components/metrics'


const ReviewCardComponent = ({onPress}) => (
    <View>
        <CardItem bordered style={{justifyContent: 'space-between'}}>
            <TouchableOpacity activeOpacity={.5} onPress={() => alert('')}>
                <View>
                    <Text style={{fontSize: fsr(3.0),}}>Reviews & Rating</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                    <Text style={{fontSize: fsr(7.5), color: 'grey'}}>4.5</Text>
                    <View style={{marginLeft: 10, alignItems: 'center'}}>
                        <StarRating
                            disabled={true}
                            reversed={true}
                            maxStars={5}
                            rating={4.5}
                            starSize={20}
                            fullStarColor='orange'
                            emptyStarColor='orange'
                            halfStarEnabled={true}
                        />
                        <Text style={{color: 'grey', fontSize: fsr('1.8'), paddingTop: 5}}>42 reviews</Text>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
                <Icon name='arrow-forward' style={{color: 'grey', textAlign: 'center', fontSize: 24, paddingLeft: 1}} />
        </CardItem>
        <CardItem bordered style={{justifyContent: 'space-between'}}>
            <View>
                <View>
                    <Text style={{fontSize: fsr(2), color: 'grey'}}>Most Relevant Reviews</Text>
                    <View style={{alignItems: 'flex-start', flexDirection: 'row', marginTop: 10}}>
                        <StarRating
                            disabled={true}
                            reversed={true}
                            maxStars={5}
                            rating={4.5}
                            starSize={12}
                            fullStarColor='orange'
                            emptyStarColor='orange'
                            halfStarEnabled={true}
                        />
                        <Text style={{paddingLeft: 10, color: 'grey'}}> by henry martison</Text>
                    </View>
                </View>
                <Text style={{paddingTop: 10}}>
                    Occaecat proident esse nulla nulla cupidatat ea ad dolore esse sit dolore. Velit dolor in esse minim sunt Lorem consectetur eu et laboris occaecat. Proident veniam exercitation nostrud irure nisi mollit eiusmod eiusmod tempor id id anim. Velit quis exercitation voluptate Lorem cupidatat pariatur ullamco consequat velit exercitation do pariatur.
                </Text>
            </View>
        </CardItem>
        <CardItem bordered style={{justifyContent: 'space-between'}}>
            <View>
                <View>
                    <View style={{alignItems: 'flex-start', flexDirection: 'row', marginTop: 10}}>
                        <StarRating
                            disabled={true}
                            reversed={true}
                            maxStars={5}
                            rating={4.5}
                            starSize={12}
                            fullStarColor='orange'
                            emptyStarColor='orange'
                            halfStarEnabled={true}
                        />
                        <Text style={{paddingLeft: 10, color: 'grey'}}> by cobi</Text>
                    </View>
                </View>
                <Text style={{paddingTop: 10}}>
                    Occaecat proident esse nulla nulla cupidatat ea ad dolore esse sit dolore. Velit dolor in esse minim sunt Lorem consectetur eu et laboris occaecat. Proident veniam exercitation nostrud irure nisi mollit eiusmod eiusmod tempor id id anim. Velit quis exercitation voluptate Lorem cupidatat pariatur ullamco consequat velit exercitation do pariatur.
                </Text>
            </View>
        </CardItem> 

        <TouchableOpacity onPress={onPress}>
            <CardItem bordered>
                <Left/>
                <Body>
                    <Text style={{fontSize: fsr(2), color: 'grey', fontWeight: '500'}}>View All (42)</Text>
                </Body>
                <Right/>
            </CardItem>
        </TouchableOpacity>
</View>
)

export default withNavigation(ReviewCardComponent)