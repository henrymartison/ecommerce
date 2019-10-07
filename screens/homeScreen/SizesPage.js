import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import { Icon } from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {withNavigation} from 'react-navigation'
import {showMessage} from 'react-native-flash-message'

import { TouchableOpacity } from '../../components/TouchableOpacity'
import ShoppingCartIcon from '../../components/ShoppingCartIcon'
import Colors from '../../constants/Colors'
import ColorPicker from '../../components/SizesComponent/ColorPicker'
import SizePicker from '../../components/SizesComponent/SizePicker'

class SizesPage extends React.Component{
    static navigationOptions = {
        title: 'Product Options',
        headerRight: (
            <ShoppingCartIcon/>
          ),
          headerTitleStyle: {fontWeight: '500'},
          headerLeft: (
              <TouchableOpacity onPress={() => alert('Problem with Navigation')}>
                  <Icon name='md-arrow-back' style={{paddingLeft: 10,}} />
              </TouchableOpacity>
          )
        }

        state = {
            productCount: 1
        }
    
        _onIncreasePress = () => {
            this.setState({productCount: this.state.productCount + 1})
        }
        _onDecreasePress = () => {
            this.setState({productCount: this.state.productCount - 1})
        }

        _confirm = () => {
            showMessage({
                message: 'Product added to Cart',
                type: 'success',
                style: {alignItems: 'center'}
            })
            
            
        }

    render() {

        const {navigate} = this.props.navigation

        return (
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                <View style={{height: hp('20%'), backgroundColor: 'white', flexDirection: 'row', padding: 10}}>
                    <View style={{borderWidth: .5, borderColor: '#ccc', width: wp('28%'), height: wp('28%'), alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            style={{width: wp('22%'), height: wp('22%')}} 
                            source={require('../../assets/images/card/1.jpg')}    
                        />
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '600'}}>GH₵ 676.00 <Text style={{color: 'grey', fontWeight: '500'}}>
                                / Piece
                            </Text></Text>
                        <Text style={{paddingTop: 3, color: 'grey'}}>9999 in stock</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{marginTop: 10, height: hp('60%'), backgroundColor: ''}}>
                        <View style={{flex: 2, backgroundColor: 'white'}}>
                            <Text style={{paddingTop: 10, paddingLeft: 10, fontWeight: '600'}}>Select Color: </Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <ColorPicker color='black' colorName='black' />
                                <ColorPicker color='orange' colorName='orange' />
                                <ColorPicker color='green' colorName='green' />
                                <ColorPicker color='red' colorName='red' />
                                <ColorPicker color='brown' colorName='brown' />
                                <ColorPicker color='grey' colorName='white' />
                            </View>
                        </View>
                        <View style={{flex: 3, backgroundColor: 'white'}}>
                            <View style={{paddingTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{fontWeight: '600'}}>Select Clothing Size (EUR): </Text>
                                <TouchableOpacity onPress={() => navigate('SizeChart')} style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: 'grey'}}>Sizing Chart</Text>
                                    <Ionicons name='ios-arrow-forward' size={15} color='grey' style={{paddingLeft: 4}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <SizePicker size='S' />
                                <SizePicker size='M' />
                                <SizePicker size='L' />
                                <SizePicker size='XL' />
                                <SizePicker size='XXL' />
                                <SizePicker size='XXXL' />
                            </View>
                            <View style={{backgroundColor: 'white', flex: 2, padding: 20,}}>
                                <Text style={{paddingBottom:10, fontWeight: '600'}}>Quantity you want to by: </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText} onPress={this._onDecreasePress}>-</Text>
                                    </TouchableOpacity>
                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 24, fontWeight: '500', paddingHorizontal: 14}}>
                                            {this.state.productCount}
                                        </Text>
                                    </View>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText} onPress={this._onIncreasePress}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
                <View style={styles.bottomTab}>
                        <View activeOpacity={.65} style={styles.addToFavorites}>
                            <Text style={{color: Colors.DARKGRAY, fontWeight: '500', fontSize: 16}}>SubTotal: </Text>
                            <Text style={{fontSize: 20, color: Colors.DARKGRAY, fontWeight: '600'}}>GH₵ 676.00</Text>
                        </View>    
                        <TouchableOpacity
                            activeOpacity={.65}
                            style={styles.buyItNow}
                            onPress={this._confirm}
                        >
                            <Text style={{fontSize: 17,}}>Confirm</Text>
                        </TouchableOpacity>    
                           
                    </View>   
            </View>
        )
    }
}

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
    buyItNow: {
        flex: 2,
        backgroundColor: Colors.PRIMARY,
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToFavorites: {
        flex: 3,
        backgroundColor: 'white',
        height: tabHeight,
        justifyContent: 'center',
        paddingLeft: 10

    },
    button: {
        backgroundColor: Colors.bgColor,
        height: 35,
        width: 35,
        borderRadius: 35/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default withNavigation(SizesPage)