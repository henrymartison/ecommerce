import React, {Component} from 'react'
import {
    View, 
    Text, 
    Image, 
    ImageBackground, 
    SafeAreaView, 
    Dimensions, 
    Keyboard,
} from 'react-native'
import {Container, Icon, Card} from 'native-base'
import Swiper from 'react-native-swiper'
import PTRView from 'react-native-pull-to-refresh'
import {LinearGradient} from 'expo-linear-gradient'
import { EvilIcons } from '@expo/vector-icons'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

import RecommendedCardItem from '../../components/RecommendedCardItem'
import ItemCategory from '../../components/ItemCategory'
import CardComponent from '../../components/CardComponent'
import ShoppingCartIcon from '../../components/ShoppingCartIcon'
import BrowseByCat from '../../components/BrowseByCat'

import Colors from '../../constants/Colors'

import Search from '../../components/common/Search'
import { TouchableOpacity } from '../../components/TouchableOpacity'
import ContactModal from '../../components/account-components/Modals/ContactModal'


var images = [
    require('../../assets/images/card/1.jpg'),
    require('../../assets/images/card/2.jpg'),
    require('../../assets/images/card/3.jpg'),
    require('../../assets/images/card/4.jpg'),
]

const {width, height} = Dimensions.get('window')

export default class MainHome extends Component{
    static navigationOptions ={
        header: <Search/>,
    }

    state = {
        searchBarFocused: false,
        isVisible: false
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }

    keyboardDidShow = () => {
        this.setState({searchBarFocused: true})
    }

    keyboardWillShow = () => {
        this.setState({searchBarFocused: true})
    }

    keyboardWillHide = () => {
        this.setState({searchBarFocused: false})
    }
    

    _refresh = () => {
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
      }

      actionContact = () => {
        this.setState(({ isVisible }) => {
          return { isVisible: !isVisible };
        });
      };

    render() {

        const {navigate} = this.props.navigation
        const {searchBarFocused, isVisible} = this.state
        const name = 'DELL Inspiron 3573 - Intel Celeron N4000U - 500GB HDD - 4GB RAM -15.6" HD - Windows 10 - Black'
        const length = 78
        const trimmedString = name.length > length ? name.substring(0, length - 3) + "..." : name

        return(
            // <KeyboardAwareScrollView>
                <Container style={{
                    backgroundColor: searchBarFocused ? 'rgba(0,0,0,.1)' : 'rgb(247,247,247)'
                }}>
                    {/* <SafeAreaView>
                        <Header>
                            <Search/>
                            <ShoppingCartIcon/>
                        </Header>
                    </SafeAreaView> */}

                    <PTRView onRefresh={this._refresh}>
                        <View>
                            <Swiper 
                                style={styles.swiperImage} 
                                autoplay={true} 
                                loop={true}
                                activeDotColor={Colors.PRIMARY}
                            >
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img1.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img2.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img3.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img4.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img5.jpg')} resizeMode='cover' />
                                </View>
                                <View style={{flex: 1}}>
                                    <Image 
                                    style={styles.swipers}
                                    source={require('../../assets/images/img6.jpg')} resizeMode='cover' />
                                </View>

                            </Swiper>
                                
                                <View style={styles.subMenuContainer}>
                                    <View style={{alignItems: 'center'}}>
                                        <LinearGradient 
                                            colors={['#fdc913', '#fdc41e', '#fcb641']}
                                            style={styles.subView}>
                                            <EvilIcons name='credit-card' size={35} style={{color: '#fff'}} />
                                        </LinearGradient>
                                        <Text style={styles.subMenuText}>Coupons</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <LinearGradient 
                                            colors={['#ff4066', '#f34351', '#ff2d5c']}
                                            style={styles.subView}>
                                            <Icon name='md-pizza' style={{color: '#fff'}} />
                                        </LinearGradient>
                                        <Text style={styles.subMenuText}>Social Savings</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigate('Flight')} style={{alignItems: 'center'}}>
                                        <LinearGradient 
                                            colors={['#fe683e', '#fe5e35', '#ff2e4b']}
                                            style={styles.subView}>
                                            <Image source={require('../../assets/images/airplane-travelling-around-earth.png')} style={{height: 30, width: 30, resizeMode: 'contain'}} />
                                        </LinearGradient>
                                        <Text style={styles.subMenuText}>Flight</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.actionContact} style={{alignItems: 'center'}}>
                                        <LinearGradient 
                                            colors={['#34c163', '#30b05b', '#31b15c']}
                                            style={styles.subView}>
                                            <Icon name='md-call' style={{color: '#fff'}} />
                                        </LinearGradient>
                                        <Text style={styles.subMenuText}>Contact</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{}}>
                                    <Image
                                        source={require('../../assets/images/background.jpg')}
                                        style={styles.backgroundImage}
                                    />

                                </View>
                                
                                <Card style={{ marginTop: 5}}>
                                    <RecommendedCardItem
                                    itemName={trimmedString}
                                    itemCreator='Generic'
                                    itemPrice='GH₵676'
                                    savings='GH₵2.5'
                                    imageUri={require('../../assets/images/card/1.jpg')}
                                    rating={3.5}
                                    onPress={() => this.props.navigation.navigate('Details', {hideTabBar: 'true'})}
                                    />
                                    <RecommendedCardItem
                                    itemName={trimmedString}
                                    itemCreator="WD"
                                    itemPrice='GH₵605'
                                    savings='GH₵7.9'
                                    imageUri={require('../../assets/images/card/2.jpg')}
                                    rating={2}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    />
                                    <RecommendedCardItem
                                    itemName={trimmedString}
                                    itemCreator="Generic"
                                    itemPrice='GH₵25'
                                    savings='GH₵7.9'
                                    imageUri={require('../../assets/images/card/3.jpg')}
                                    rating={2}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    />
                                    <RecommendedCardItem
                                    itemName={trimmedString}
                                    itemCreator="DELL"
                                    itemPrice='GH₵1370'
                                    savings='GH₵7.9'
                                    imageUri={require('../../assets/images/card/4.jpg')}
                                    rating={2}
                                    onPress={() => this.props.navigation.navigate('Details')}
                                    />
                                    
                                </Card>

                                <BrowseByCat/>

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
                        </View>
                </PTRView>
                <ContactModal
          isVisible={isVisible}
          actionContact={this.actionContact}
          style={styles.bottomModal}
        />
                </Container>
            // </KeyboardAwareScrollView>
        )
    }
}