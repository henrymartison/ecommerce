import React, {Component} from 'react'
import {View, Text, Image, StatusBar, StyleSheet, Dimensions} from 'react-native'
import {Container, Content, Button, Icon, Header, Item, Input, Card, CardItem} from 'native-base'
import Swiper from 'react-native-swiper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import {fontSizeResponsive} from '../components/metrics'

import RecommendedCardItem from '../components/RecommendedCardItem'
import ItemCategory from '../components/ItemCategory';

export default class Categories extends Component{
  render() {

    const {navigate} = this.props.navigation

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
          <View style={{marginTop: 8, marginHorizontal: 10}}>
            <Swiper style={{height: 200}} autoplay={true} loop={true}>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img1.jpg')} resizeMode='cover' />
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img2.jpg')} resizeMode='cover' />
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img3.jpg')} resizeMode='cover' />
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img4.jpg')} resizeMode='cover' />
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img5.jpg')} resizeMode='cover' />
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{height: null, width: null, flex: 1}}
                  source={require('../assets/images/img6.jpg')} resizeMode='cover' />
              </View>

            </Swiper>
          </View>
          <View style={{height: hp('15%'), marginTop: 10, backgroundColor: '#fff', marginHorizontal: 10, borderRadius: 5, flexDirection: 'row', shadowOpacity: 0.3, shadowRadius: 5, shadowColor: 'gray'}}>
            <View style={styles.misc}>
              <Image source={require('../assets/images/flight.png')} resizeMode='contain' style={styles.image} />
              <Text style={styles.text}>Jumia Global</Text>
            </View>
            <View style={styles.misc}>
              <Image source={require('../assets/images/flight.png')} resizeMode='contain' style={styles.image} />
              <Text style={styles.text}>Airtime & Bill</Text>
            </View>
            <View style={styles.misc}>
              <Image source={require('../assets/images/flight.png')} resizeMode='contain' style={styles.image} />
              <Text style={styles.text}>Weekly Deals</Text>
            </View>
            <View style={styles.misc}>
              <Image source={require('../assets/images/flight.png')} resizeMode='contain' style={styles.image} />
              <Text style={styles.text}>Contact Us</Text>
            </View>

          </View>

          <View style={{backgroundColor: '#fff', marginTop: 10, marginHorizontal: 10, borderRadius: 5}}>
            <View style={{backgroundColor: 'red', height: 60, borderRadius: 5}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#fff', paddingTop: 8, paddingLeft: 10, fontWeight: '600'}}>WEEKLY DEALS</Text>
                <Text style={{color: '#fff', paddingTop: 8, paddingRight: 10, fontWeight: '600'}}>SEE ALL</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
                <Icon name='alarm' style={{color: '#fff', paddingLeft: 10, fontSize: 24}} />
                <Text style={{color: '#fff', paddingLeft: 8, fontSize: 18, fontWeight: '500'}}>01h : 41: 19s left</Text>
              </View>
            </View>
            
          </View>
          <Card style={{marginLeft: 10, marginRight: 10, marginTop: -2, borderRadius: 5}}>
              <RecommendedCardItem
                itemName='Generic 1017E 10 inch Full HD External Headrest Monitors'
                itemCreator='Generic'
                itemPrice='GH₵676'
                savings='GH₵2.5'
                imageUri={require('../assets/images/card/1.jpg')}
                rating={3.5}
                onPress={() => this.props.navigation.navigate('Details', {hideTabBar: 'true'})}
              />
              <RecommendedCardItem
                itemName='WD WDBYFT0040BBK-WESN My Passport USB 3.0 Secure Portable External Hard Drive - 4TB Black'
                itemCreator="WD"
                itemPrice='GH₵605'
                savings='GH₵7.9'
                imageUri={require('../assets/images/card/2.jpg')}
                rating={2}
                onPress={() => this.props.navigation.navigate('Details')}
                onPress={() => this.props.navigation.navigate('Details')}
              />
              <RecommendedCardItem
                itemName='Generic lodaon Fashion Women Lady Loose Long Sleeve Chiffon Casual Blouse Shirt Tops Blouse'
                itemCreator="Generic"
                itemPrice='GH₵25'
                savings='GH₵7.9'
                imageUri={require('../assets/images/card/3.jpg')}
                rating={2}
                onPress={() => this.props.navigation.navigate('Details')}
              />
              <RecommendedCardItem
                itemName='DELL Inspiron 3573 - Intel Celeron N4000U - 500GB HDD - 4GB RAM -15.6" HD - Windows 10 - Black'
                itemCreator="DELL"
                itemPrice='GH₵1370'
                savings='GH₵7.9'
                imageUri={require('../assets/images/card/4.jpg')}
                rating={2}
                onPress={() => this.props.navigation.navigate('Details')}
              />
              
            </Card>
            <View>
              <View style={{marginTop: 10, marginLeft: 15}}>
                <Text style={{fontWeight: '500'}}>TOP CATEGORIES</Text>
              </View>
              <View style={{height: 90, flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/tv1.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Televisions</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/appliance.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Appliances</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/4.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Laptops</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/phone.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Phones</Text>
                </View>

            </View>
              <View style={{height: 90, marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/3.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Tops</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/watch.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Watches</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/sandal.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Sandal</Text>
                </View>
                <View style={styles.misc}>
                  <Image source={require('../assets/images/card/bag.jpg')} resizeMode='contain' style={styles.image} />
                  <Text style={styles.text}>Bags</Text>
                </View>

            </View>
          </View>
            <ItemCategory 
              heading='LAPTOPS' 
              imageUri1={require('../assets/images/card/4.jpg')} 
              imageUri2={require('../assets/images/card/4.jpg')} 
              imageUri3={require('../assets/images/card/4.jpg')} 
              imageUri4={require('../assets/images/card/4.jpg')} 
              itemName='Laptop'
              price='GH₵1350'
              discount='15'
              onPress={() => navigate('Details')}

            />
            <ItemCategory 
              heading='DESKTOPS' 
              imageUri1={require('../assets/images/card/imac.jpg')} 
              imageUri2={require('../assets/images/card/dktp1.jpg')} 
              imageUri3={require('../assets/images/card/dktp2.jpg')} 
              imageUri4={require('../assets/images/card/imac.jpg')} 
              itemName='iMac'
              price='GH₵10,000'
              discount='7'
              onPress={() => navigate('Details')}

            />

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image source={require('../assets/images/card/ad1.jpg')} style={styles.ad} />
              <Image source={require('../assets/images/card/ad2.jpg')} style={styles.ad} />
            </View>

            <ItemCategory 
              heading='CELLPHONE ACCESSORIES' 
              imageUri1={require('../assets/images/card/headset1.jpg')} 
              imageUri2={require('../assets/images/card/headset1.jpg')} 
              imageUri3={require('../assets/images/card/headset1.jpg')} 
              imageUri4={require('../assets/images/card/headset1.jpg')} 
              itemName='Headphone'
              price='GH₵6'
              discount='20'
              onPress={() => navigate('Details')}

            />
            <ItemCategory 
              heading='GAMING' 
              imageUri1={require('../assets/images/card/xbox.jpg')} 
              imageUri2={require('../assets/images/card/xbox.jpg')} 
              imageUri3={require('../assets/images/card/xbox.jpg')} 
              imageUri4={require('../assets/images/card/xbox.jpg')} 
              itemName='xBox'
              price='GH₵60'
              discount='2'
              onPress={() => navigate('Details')}

            />
            
          </Content>
      </Container>
    )
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    height: 55,
    width: 55,
    borderRadius: 55/2,
  },
  misc: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: fontSizeResponsive(1.8)
  },
  imageIcon: {
    height: 55,
    width: 55,
    borderRadius: 55/2
  },
  ad: {
    height: 180,
    width: SCREEN_WIDTH/2
  }
})
