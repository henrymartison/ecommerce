import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {withNavigation} from 'react-navigation'

import Colors from '../constants/Colors'
import { TouchableOpacity } from './TouchableOpacity'
import { Icon } from 'native-base'


const images = [
    {id: '1', name: 'Weddings & Events', src: require('../assets/images/card/3.jpg')},
    {id: '2', name: 'Security & Surveillance', src: require('../assets/images/card/1.jpg')},
    {id: '3', name: 'Business & Industrial', src: require('../assets/images/card/2.jpg')},
    {id: '4', name: 'Computers', src: require('../assets/images/card/4.jpg')},
    {id: '5', name: 'Mobile', src: require('../assets/images/card/6.jpg')},
    {id: '6', name: 'Electronics', src: require('../assets/images/card/5.jpg')},
]

class BrowseByCat extends React.Component {

    renderProducts() {
        return images.map((image, index) => {
            return(
                <View key={image.id} style={{flex: 1, width: wp('25%'), marginLeft: 12}}>
                    <View style={{flex: 3, backgroundColor: Colors.bgColor, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={image.src}
                            style={{height: 60, width: 60, resizeMode: 'contain'}}
                        />
                    </View>
                    <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 15}}>
                            {image.name}
                        </Text>
                    </View>
                </View>
            )
        })
    }

    render() {

        return (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Browse By Categories</Text>
                </View>
                <View style={styles.separator}/>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}>
                    {this.renderProducts()}
                    <View style={{width: wp('25%'), paddingTop: 35, alignItems: 'center'}}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Categories')}
                            style={{alignItems: 'center', flexDirection: 'row'}}
                        >
                            <Text style={{color: 'blue', fontSize: 17}}>More</Text>
                            <Icon name='ios-arrow-forward' style={{color: 'blue', paddingLeft: 10}}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('23%'),
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
        paddingTop: 8
    },
    headerContainer: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        marginTop: 20
    },
    headerText: {
        fontSize: 18
    },
    separator: {
        backgroundColor: '#e2e2e2',
        height: StyleSheet.hairlineWidth
    }
})

export default withNavigation(BrowseByCat)