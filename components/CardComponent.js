import React, {Component} from 'react'
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

import { fontSizeResponsive } from './metrics';
import {Icon} from 'native-base'
import Colors from '../constants/Colors';
import { TouchableOpacity } from './TouchableOpacity';


var images = [
    require('../assets/images/card/1.jpg'),
    require('../assets/images/card/2.jpg'),
    require('../assets/images/card/3.jpg'),
    require('../assets/images/card/4.jpg'),
]

const {width, height} = Dimensions.get('window')

export default class CardComponent extends Component{

    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 2 }, { height: hp('35%') }, { marginBottom: 1 }, index % 2 !== 0 ? { paddingLeft: 1 } : { paddingLeft: 0 }]}>
                    <View style={{ backgroundColor: 'white', flex: 3, 
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                        <Image style={{
                        flex: .6,
                        resizeMode: 'contain',
                        aspectRatio: 1

                        }}
                        source={image}>
                        </Image>
                    </View>
                    <View style={styles.separator} />
                    <View style={{ backgroundColor: 'white', alignItems: 'center', paddingVertical: 10, flex: .5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>GH₵ {this.props.price}</Text>
                        <Text style={styles.strikeThrough}>GH₵ {this.props.prevPrice}</Text>
                    </View>

                </View>
            )
        })

    }

    render() {
        return(
            <View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color: '#0d0d0d', fontSize: fontSizeResponsive(2.5), paddingTop: 20, marginBottom: 10, paddingLeft: 10, fontWeight: '400'}}>{this.props.heading}</Text>
                        <TouchableOpacity onPress={() => alert('Yet To Figure Out!')} style={{flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{color: Colors.deepBlue, fontSize: fontSizeResponsive(2.3), paddingTop: 20, paddingRight: 10, fontWeight: '400'}}>SEE ALL</Text>
                            <Icon name='ios-arrow-forward' style={{fontSize: 20, color: Colors.deepBlue, paddingTop: 20, paddingRight: 5}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>

                {/* <View>
                    <Text>View More</Text>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    strikeThrough: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'gray',
        textDecorationStyle: 'solid',
        color: 'gray',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginHorizontal: 15,
        backgroundColor: '#e8e8e8'
    },
})