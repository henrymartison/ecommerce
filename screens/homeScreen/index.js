import React, {Component} from 'react'
import {View, Text, Image, ImageBackground, SafeAreaView, Dimensions} from 'react-native'
import {Container, Content, Button, Icon, Header, Item, Input, Card, CardItem} from 'native-base'
import Swiper from 'react-native-swiper'
import PTRView from 'react-native-pull-to-refresh'
// import {FontAwesomeIcon} from 'react-native-vector-icons'

import {NavigationActions} from 'react-navigation'

import styles from './styles'
import RecommendedCardItem from '../../components/RecommendedCardItem'
import ItemCategory from '../../components/ItemCategory'
import CardComponent from '../../components/CardComponent'
import ShoppingCartIcon from '../../components/ShoppingCartIcon'


var images = [
    require('../../assets/images/card/1.jpg'),
    require('../../assets/images/card/2.jpg'),
    require('../../assets/images/card/3.jpg'),
    require('../../assets/images/card/4.jpg'),
]

const {width, height} = Dimensions.get('window')

export default class MainHome extends Component{

    static navigationOptions = ({navigation}) => ({
        tabBarVisible: (navigation.state.params && navigation.state.params.hideTabBar) == true, 
        animationEnabled: true
    })

    componentWillMount() {
        const setParamsAction = NavigationActions.setParams({
          params: {hideTabBar: true}
        });
        this.props.navigation.dispatch(setParamsAction);
    }

    componentWillUnmount() {
        const setParamsAction = NavigationActions.setParams({
          params: {hideTabBar: false}
        });
        this.props.navigation.dispatch(setParamsAction);
    }

    _refresh = () => {
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
      }

    render() {

        const {navigate} = this.props.navigation

        return(
            <Container style={{backgroundColor: 'rgb(247,247,247)'}}>
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

                <PTRView onRefresh={this._refresh}>
                    <Content>
                        <Swiper style={styles.swiperImage} autoplay={true} loop={true}>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img1.jpg')} resizeMode='cover' />
                            </View>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img2.jpg')} resizeMode='cover' />
                            </View>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img3.jpg')} resizeMode='cover' />
                            </View>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img4.jpg')} resizeMode='cover' />
                            </View>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img5.jpg')} resizeMode='cover' />
                            </View>
                            <View style={{flex: 1}}>
                                <Image 
                                style={{height: null, width: null, flex: 1}}
                                source={require('../../assets/images/img6.jpg')} resizeMode='cover' />
                            </View>

                        </Swiper>
                            
                            <View style={styles.subMenuContainer}>
                                <View style={{alignItems: 'center'}}>
                                    <View style={styles.subView}>
                                        <Icon name='md-pizza' style={{color: '#fff'}} />
                                    </View>
                                    <Text style={styles.subMenuText}>Seller Coupons</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <View style={styles.subView}>
                                        <Icon name='md-trophy' style={{color: '#fff'}} />
                                    </View>
                                    <Text style={styles.subMenuText}>Social Savings</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <View style={styles.subView}>
                                        <Icon name='md-briefcase' style={{color: '#fff'}} />
                                    </View>
                                    <Text style={styles.subMenuText}>DHrefer</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <View style={styles.subView}>
                                        <Icon name='ios-bookmarks' style={{color: '#fff'}} />
                                    </View>
                                    <Text style={styles.subMenuText}>Win Coupons</Text>
                                </View>
                            </View>

                            <View>
                                <ImageBackground
                                    source={require('../../assets/images/background.jpg')}
                                    style={styles.backgroundImage}
                                >

                                </ImageBackground>
                            </View>
                            
                            <Card style={{ marginTop: 5}}>
                                <RecommendedCardItem
                                itemName='Generic 1017E 10 inch Full HD External Headrest Monitors'
                                itemCreator='Generic'
                                itemPrice='GH₵676'
                                savings='GH₵2.5'
                                imageUri={require('../../assets/images/card/1.jpg')}
                                rating={3.5}
                                onPress={() => this.props.navigation.navigate('Details', {hideTabBar: 'true'})}
                                />
                                <RecommendedCardItem
                                itemName='WD WDBYFT0040BBK-WESN My Passport USB 3.0 Secure Portable External Hard Drive - 4TB Black'
                                itemCreator="WD"
                                itemPrice='GH₵605'
                                savings='GH₵7.9'
                                imageUri={require('../../assets/images/card/2.jpg')}
                                rating={2}
                                onPress={() => this.props.navigation.navigate('Details')}
                                onPress={() => this.props.navigation.navigate('Details')}
                                />
                                <RecommendedCardItem
                                itemName='Generic lodaon Fashion Women Lady Loose Long Sleeve Chiffon Casual Blouse Shirt Tops Blouse'
                                itemCreator="Generic"
                                itemPrice='GH₵25'
                                savings='GH₵7.9'
                                imageUri={require('../../assets/images/card/3.jpg')}
                                rating={2}
                                onPress={() => this.props.navigation.navigate('Details')}
                                />
                                <RecommendedCardItem
                                itemName='DELL Inspiron 3573 - Intel Celeron N4000U - 500GB HDD - 4GB RAM -15.6" HD - Windows 10 - Black'
                                itemCreator="DELL"
                                itemPrice='GH₵1370'
                                savings='GH₵7.9'
                                imageUri={require('../../assets/images/card/4.jpg')}
                                rating={2}
                                onPress={() => this.props.navigation.navigate('Details')}
                                />
                                
                            </Card>

                            <CardComponent 
                                price='465.99'
                                prevPrice='543.48'
                                heading='Browse By Categories'
                            />
                            <CardComponent 
                                price='465.99'
                                prevPrice='543.48'
                                heading='Flash Sales'
                            />
                            <CardComponent 
                                price='465.99'
                                prevPrice='543.48'
                                heading='Social Savings'
                            />
                            <CardComponent 
                                price='465.99'
                                prevPrice='543.48'
                                heading="Related to Items You've Viewed"
                            />
                            <CardComponent 
                                price='465.99'
                                prevPrice='543.48'
                                heading='Inspired by Your Shopping Trends'
                            />
                    </Content>
            </PTRView>

            </Container>
        )
    }
}