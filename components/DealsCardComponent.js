import React, {Component} from 'react'
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native'
import { fontSizeResponsive } from './metrics';
import {Icon} from 'native-base'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


var images = [
    require('../assets/images/card/1.jpg'),
    require('../assets/images/card/2.jpg'),
    require('../assets/images/card/3.jpg'),
    require('../assets/images/card/4.jpg'),
]

const {width, height} = Dimensions.get('window')


export default class DealsCardComponent extends Component{


    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 2 }, { height: ((height) / 3) + 50 }, { marginBottom: 1 }, index % 2 !== 0 ? { paddingLeft: 1 } : { paddingLeft: 0 }]}>
                    <View style={{ backgroundColor: 'white', width: '100%', height: '70%', 
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                            <Image style={{
                                flex: 1,
                                resizeMode: 'center',
                                aspectRatio: 1,
                                overflow: 'hidden',

                            }}
                            source={image}>
                            </Image>
                    </View>
                    <View style={{ backgroundColor: '#fff', alignItems: 'flex-start', paddingTop: 5, paddingLeft: 10, width: '100%', height: '30%'}}>
                        <Text style={{color: 'orange', fontSize: fontSizeResponsive(2.3), fontWeight: '500', paddingBottom: 5}}>{this.props.percentageLayoff}% OFF</Text>
                        <Text>GH₵ {this.props.price} / Piece</Text>
                        <Text style={styles.strikeThrough}>GH₵ {this.props.prevPrice} / Piece</Text>
                        {/* <View style={{flexDirection: 'row'}}>
                            <Icon name='ios-alarm' style={{fontSize: 16, color: 'grey'}} />
                            <Text style={{fontSize: 16}}>  {this.state.hoursCounter} : {this.state.minutesCounter}: {this.state.secondsCounter}</Text>
                        </View> */}
                    </View>

                </View>
            )
        })

    }

    render() {
        return(
            <View>
                <View>
                    {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: hp('6.4%'), marginHorizontal: 10}}>
                        <Text style={{color: '#0d0d0d', fontSize: fontSizeResponsive(2.5), fontWeight: '400'}}></Text>
                        <View style={{flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{fontSize: fontSizeResponsive(2.5), fontWeight: '500'}}>Sort</Text>
                        </View>
                    </View> */}
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
        paddingBottom: 5
    },
})