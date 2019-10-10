import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'


import Colors from '../../constants/Colors'


const CategoryCard = () => {
    return(
        <View style={{flex:1}}>
            
            <View style={{marginTop: 10,  marginHorizontal: 10, borderRadius: 10, backgroundColor: 'white'}}>
                <View style={{paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <Text style={{fontWeight: '600', fontSize: 15}}>CATEGORY HEADER</Text>
                    <Text style={{fontWeight: '600', fontSize: 15, color: Colors.PRIMARY}}>SEE ALL</Text>
                </View>
                <View style={styles.separator} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../../assets/images/card/1.jpg')}
                            style={{height: 60, width: 60}}
                        />
                    <Text style={{paddingTop: 5}}>Cell Phones</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../../assets/images/card/1.jpg')}
                            style={{height: 60, width: 60}}
                        />
                    <Text style={{paddingTop: 5}}>Cell Phones</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../../assets/images/card/1.jpg')}
                            style={{height: 60, width: 60}}
                        />
                    <Text style={{paddingTop: 5}}>Cell Phones</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../../assets/images/card/1.jpg')}
                            style={{height: 60, width: 60}}
                        />
                    <Text style={{paddingTop: 5}}>Smart Phones</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const {height, width} = Dimensions.get('window')
const CONTAINER_HEIGHT = height/3

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: CONTAINER_HEIGHT,
        // marginTop: 15
    },
    header: {
        marginVertical: 10,
        paddingLeft: 15,
        paddingTop: 10
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
        backgroundColor: '#e8e8e8'
    },
    icon: {
        paddingLeft: 8
    },
    imageContainer: {
        height: hp('15%'),
        width: hp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bgColor,
        marginVertical: 10,
        marginLeft: 10,
    }
})

export default CategoryCard