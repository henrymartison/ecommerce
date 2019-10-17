import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {withNavigation} from 'react-navigation'

import { TouchableOpacity } from '../TouchableOpacity'


const {width, height} = Dimensions.get('window')

const CategoryIcons = [
    {src: require('../../assets/images/catIcons/smartphone.png'), title: 'Phones & Tablets'},
    {src: require('../../assets/images/catIcons/electronics.png'), title: 'Electronics'},
    {src: require('../../assets/images/catIcons/dryer.png'), title: 'Appliances'},
    {src: require('../../assets/images/catIcons/dress.png'), title: "Women's Fashion"},
    {src: require('../../assets/images/catIcons/shirt.png'), title: "Men's Fashion"},
    {src: require('../../assets/images/catIcons/computer.png'), title: 'Computing'},
    {src: require('../../assets/images/catIcons/office-chair.png'), title: 'Home & Office'},
    {src: require('../../assets/images/catIcons/desktop.png'), title: 'Health & Beauty'},
    {src: require('../../assets/images/catIcons/doll.png'), title: 'Baby Products'},
    {src: require('../../assets/images/catIcons/xbox.png'), title: 'Gaming'},
    {src: require('../../assets/images/catIcons/cart.png'), title: 'Grocery'},
    {src: require('../../assets/images/catIcons/watch.png'), title: 'Watches'},
    {src: require('../../assets/images/catIcons/calculator.png'), title: 'Miscellaneous'},
    {src: require('../../assets/images/catIcons/hat.png'), title: 'Hats & Sunglasses'},
]

class CategoryRowItem extends Component {
    renderRowItems() {
        return CategoryIcons.map((RowIcon, index) => {
            return (
                <View 
                key={index}
                style={[
                    styles.productContainer, 
                    index % 3 !== 0 ? { paddingLeft: 1 } : { paddingLeft: 0 }
                ]} 
            >
                <TouchableOpacity 
                    style={{flex: 1.5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => this.props.navigation.navigate('CategoryCard', { title: `${RowIcon.title}`})}
                >
                    <Image
                        source={RowIcon.src}
                        style={{ width: hp('10%'), height: hp('10%')}}
                    />
                    <Text style={{textAlign: 'center', paddingTop: 4}}>{RowIcon.title}</Text>
                </TouchableOpacity>
            </View>
            )
        })
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                {this.renderRowItems()}
                
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    productContainer: {
        height: width/3, 
        width: width/3,
        marginBottom: 1,
    }
 })

 export default withNavigation(CategoryRowItem)