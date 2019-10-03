import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


import { TouchableOpacity } from '../../TouchableOpacity'
import { CheckBox } from 'native-base'


class DeliveryCardItem extends React.Component {

    state = {
        itemChecked: true,
        _itemChecked: false
    }

    checkToggle = () => {
        this.setState({itemChecked: !this.state.itemChecked})
    }
    _checkToggle = () => {
        this.setState({_itemChecked: !this.state._itemChecked})
    }

    render() {
        const {itemChecked, _itemChecked} = this.state

        return(
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // backgroundColor: 'blue',
                    marginVertical: 20,
                    paddingHorizontal: 10
                }}>
                    <Text style={{color: 'grey', fontWeight: '600'}}>SELECT A DELIVERY METHOD</Text>
                </View>
    
                <View style={styles.cardContainer}>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <View style={{backgroundColor: '', width: wp('10%'), alignItems: 'center', justifyContent: 'center'}}>
                            <CheckBox checked={itemChecked} onPress={this.checkToggle} color='orange' />
                        </View>
                        <View style={{backgroundColor: '', flex: 1, paddingHorizontal: 8, paddingTop: 10}}>
                            <Text style={{fontSize: 17, fontWeight: '600'}}>Home & Office Delivery</Text>
                            <Text style={{paddingTop: 7, color: 'grey', fontSize: 18,}}>
                                Delivered between Thursday 3 Oct and Monday 7 Oct
                            </Text>
                                <Text style={{fontWeight: '600', color: 'grey', fontSize: 18}}>Shipping Fee: 
                                    <Text style={{color: 'orange',}}> GH₵ 10</Text>
                                </Text>
                        </View>
                    </View>
                    <View style={styles._separator}/>
                    <View style={{flex: 2.9, flexDirection: 'row'}}>
                        <View style={{backgroundColor: '', width: wp('10%'), alignItems: 'center', justifyContent: 'center'}}>
                            <CheckBox checked={_itemChecked} onPress={this._checkToggle} color='orange' />
                        </View>
                            <View style={{backgroundColor: '', flex: 1, paddingHorizontal: 15, paddingTop: 10}}>
                                <Text style={{fontSize: 17, fontWeight: '600'}}>at any of our Pickup Stations</Text>
                                <Text style={{paddingTop: 7, color: 'grey', fontSize: 18,}}>
                                    Available between Thursday 3 Oct and Monday 7 Oct
                                </Text>
                                    
                            </View>
                    </View>
                    <View style={styles.separator} />
                    <View style={{flex: 1.5, backgroundColor: '', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => alert('Select Pickup')}>
                            <Text style={{color: 'orange', fontWeight: '600', fontSize: 17}}>Select Pickup Station</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        height: hp('40%'),
        backgroundColor: 'white',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: .2,
        paddingTop: 15,
    },
    text: {
        fontSize: 17,
        paddingHorizontal: 20
    },
    separator: {
        // marginHorizontal: 15,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
    _separator: {
        marginHorizontal: 15,
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    },
})


export default DeliveryCardItem