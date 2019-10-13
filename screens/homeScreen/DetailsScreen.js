import React, {Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet, Alert} from 'react-native'
import DetailsComponent from '../../components/DetailsComponent'
import {Icon} from 'native-base'
import {withNavigation} from 'react-navigation'
import {Ionicons} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'
import {EvilIcons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { showMessage, hideMessage } from "react-native-flash-message"

import { TouchableOpacity } from '../../components/TouchableOpacity'
import ShoppingCartIcon from '../../components/ShoppingCartIcon'
import Colors from '../../constants/Colors'

class Details extends Component{

    static navigationOptions = ({navigation}) => ({
        title: 'Product Details',
        headerRight: (
            <ShoppingCartIcon/>
          ),
          headerLeft: (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
              </TouchableOpacity>
          )
    })

        state = {
            liked: [true, false],
            // likes:Math.floor((Math.random() * 10) + 1),
        }

        like(){
            const {liked, likes} = this.state
          
        
            if (liked) 
              this.setState({liked: false, likes: likes-1})
            
        
            else this.setState({liked: true, likes: likes+1})
          }
        _addToCart = () => {
            showMessage({
                message: 'Product successfully added to cart',
                type: 'success',
                style: {alignItems: 'center'},
            })
        }
        _buyItNow = () => {
            this.props.navigation.navigate('SizesPage')
        }

    render() {
        const {liked, likes} = this.state

        return(
                <View style={{flex: 1}}>
                    <DetailsComponent 
                        itemCreator='Generic'
                        itemName='Generic 1017E 10 inch Full HD External Headrest Monitor'
                        itemPrice='676'
                        prevPrice='60'
                        savings='25'
                        rating={3.5}
                        rate={24}
                        // onPress={() => this.props.navigation.navigate('SubDetails')}
                        productDescription='Ipsum id ipsum et ea adipisicing dolore laborum est nulla nostrud elit cillum.'
                        sellerInfo='Lorem enim minim proident deserunt voluptate amet velit et Lorem amet cillum esse officia laboris.'
                    />

                    <View style={styles.bottomTab}>
                        <TouchableOpacity onPress={()=> this.like()}  style={styles.addToFavorites}>
                        { liked ? 
                        <Ionicons name='ios-heart' size={25} style={{marginLeft:4}} color={liked ? Colors.PRIMARY : 'rgb(136, 153, 166)'}/>
                        :
                        <Ionicons name='ios-heart-empty' size={25} color={liked ? Colors.PRIMARY : 'rgb(136, 153, 166)'}/>
                        
                        }
                    </TouchableOpacity>
                        {/* <TouchableOpacity activeOpacity={.65} onPress={this._addToCart} style={styles.addToCart}>
                            <Text style={{fontSize: 17}}>Add to cart</Text>
                        </TouchableOpacity>     */}
                        <TouchableOpacity activeOpacity={.65} onPress={this._buyItNow} style={styles.buyItNow}>
                            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>BUY NOW</Text>
                        </TouchableOpacity>    
                           
                    </View>           

                
                </View>
        )
    }
}

export default withNavigation(Details)

const tabHeight = hp('8%')

const styles = StyleSheet.create({
    bottomTab: {
        height: tabHeight,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#e2e2e2',
        borderTopWidth: 0.5
    },
    addToCart: {
        flex: 3,
        backgroundColor: Colors.PRIMARY_TINTIED,
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buyItNow: {
        flex: 3,
        backgroundColor: Colors.PRIMARY,
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToFavorites: {
        flex: 1,
        backgroundColor: 'white',
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'

    }
})