import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {List, ListItem, Left, Right, Body, Icon, CardItem, Button, Container, Content} from 'native-base'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import StarRating from 'react-native-star-rating'
import ReadMore from 'react-native-read-more-text'
import Swiper from 'react-native-swiper'
import {withNavigation} from 'react-navigation'

import { TouchableOpacity } from './TouchableOpacity';
import {fontSizeResponsive as fsr} from '../components/metrics'

import ReviewCardComponent from './ReviewCardComponent'
import CardComponent from './CardComponent';
import Colors from '../constants/Colors'

export const description = 'Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure.Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure.'
export const specifications = 'Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure.Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure. Ad nostrud cillum magna anim elit duis cillum. Consectetur amet et eiusmod eiusmod enim pariatur. Nulla non elit aute quis laboris sit magna irure.'

class DetailsComponent extends Component{

    _handleTextReady = () => {
        console.log('ready!');
      }

      _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: 'lightskyblue', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
    
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: 'lightskyblue', marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }

      _readMore() {
          
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
            rate,
            navigation
        } = this.props
 
    return (
            <ScrollView>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                    <Text style={{color: 'gray', fontSize: 15}}>{itemCreator}</Text>
                    <Text style={{paddingTop: 5, fontSize: 18, fontWeight: '500'}}>{itemName}</Text>
                </View>

                <View style={{alignContent: 'flex-end',}}>
                    <Swiper
                        style={styles.swiperImage}
                        autoplay={false}
                        loop={true}
                        activeDotColor={Colors.PRIMARY}
                        paginationStyle={{ bottom: 0, left: 20, right: null}}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/card/1.jpg')}  style={styles.image} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/card/6.jpg')}  style={styles.image} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/card/5.jpg')}  style={styles.image} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={require('../assets/images/card/3.jpg')}  style={styles.image} />
                        </View>
                    </Swiper>
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

                            <ListItem icon>
                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('SubDetails')}
                                    style={{flexDirection: 'row'}}>
                                <Body style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
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
                                        <Icon name='arrow-forward' style={{fontSize: 20, color: 'grey'}} />
                                </Body>
                                <Right />
                                </TouchableOpacity>

                            </ListItem>

                    <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{fontWeight: 'bold'}}>DESCRIPTION</Text>
                    </ListItem>
                    <ListItem>
                        <ReadMore
                            numberOfLines={3}
                            onReady={this._handleTextReady}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}
                        >
                            <Text style={styles.cardText}>
                                {description}
                            </Text>
                        </ReadMore>
                    </ListItem>

                    <ListItem icon>
                        
                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('SubDetails')}
                                    style={{
                                        flexDirection: 'row',
                                    }}>
                                    <Body style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <Text style={{color: 'blue', fontSize: fsr(2.0), paddingLeft: 5}}>View All</Text>
                                        <Icon name='arrow-forward' style={{fontSize: 20, color: 'grey'}} />
                                    </Body>
                                </TouchableOpacity>
                                <Right>
                                </Right>
                            </ListItem>

                    <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{fontWeight: 'bold'}}>SELLER INFORMATION</Text>
                    </ListItem>

                    <ListItem>
                        <ReadMore
                            numberOfLines={3}
                            onReady={this._handleTextReady}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}
                        >
                            <Text style={styles.cardText}>
                                Nostrud ipsum sit non et voluptate dolore eu eu in exercitation est aliquip consequat. Velit fugiat incididunt et laborum. Eu ea cupidatat ea ex do proident nostrud dolor aliqua aliqua sunt. Magna nulla culpa ipsum aliquip ea aliqua non sint dolor mollit et sunt aliqua eiusmod. Aliqua non ad labore nostrud enim et quis consectetur ullamco. Aliqua deserunt consectetur excepteur nostrud duis. Amet ad fugiat do dolore cupidatat occaecat laborum anim sit laboris commodo mollit voluptate.

                                Incididunt amet cupidatat et sunt duis proident consequat do eiusmod consequat velit qui. Id tempor aliqua anim est. Do officia amet ad deserunt aliquip cillum laborum qui culpa ullamco sunt ea aliquip. Sint id cupidatat id ipsum anim deserunt officia. Aute aliquip esse Lorem adipisicing anim sit ipsum ea cupidatat esse qui exercitation aute laboris. Irure proident consectetur labore pariatur duis fugiat tempor id ullamco consequat laboris quis in eiusmod.

                                Consequat eiusmod voluptate nisi mollit ipsum commodo enim. Officia aliqua voluptate mollit sunt cupidatat consequat non. Et excepteur anim nostrud dolore eu. Est pariatur esse anim deserunt duis duis sint commodo cillum.
                            </Text>
                        </ReadMore>
                    </ListItem> 

                    <ReviewCardComponent onPress={() => this.props.navigation.navigate('SubDetails')} />


                    <View style={{backgroundColor: 'rgb(247,247,247)'}}>
                        <CardComponent 
                            price='465.99'
                            prevPrice='543.48'
                            heading='More Items'
                        />

                    </View>
                </View>


        </ScrollView>
    );
}
}

const {width} = Dimensions.get('window')

export default withNavigation(DetailsComponent);

const styles = StyleSheet.create({
    swiperImage: {
        height: hp('25%'),
        alignItems: 'center', 
        marginTop: 50,
        // flex: 1,
        // paddingLeft: 40
    },
    image: {
        height: hp('18.5%'), 
        width: hp('18.5%'),
    },
    imageContainer: {
        height: hp('25%'),
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
    },
    card: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: '#fff',
      },
      cardText: {
        fontSize: 14,
      },
})
