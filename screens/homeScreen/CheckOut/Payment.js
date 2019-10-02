import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header, Left, Body, Title, Subtitle, Right, Icon, Button} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


import Colors from '../../../constants/Colors'
import { TouchableOpacity } from '../../../components/TouchableOpacity'
import Accordian from '../../../components/CheckOut/Payment/Accordion'
import PaymentMethodCard from '../../../components/CheckOut/Payment/PaymentMethodCard'

export default class Payment extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        
      }

      

    render() {
        const {navigate, goBack} = this.props.navigation
        
        return (
            <View style={{backgroundColor: Colors.bgColor, flex: 1}}>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='md-arrow-back'/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title>Checkout</Title>
                        <Subtitle>Payment Method</Subtitle>
                    </Body>
                    <Right/>
                </Header>

                <View style={{}}>
                    <PaymentMethodCard/>
                </View>

                <View style={{height: 100, marginTop: 20}}>
                    <Button 
                        onPress={() => navigate('Summary')}
                        style={styles.checkoutButton}>
                        <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>Proceed to Order Summary</Text>
                    </Button>
                </View>

                
            </View>
        )
    }
}

const tabHeight = hp('8%')

const styles = StyleSheet.create({
    container: {
     flex:1,
     paddingTop:100,
     backgroundColor:Colors.PRIMARY,
     
    },
    addToCart: {
        flex: 3,
        backgroundColor: 'rgb(255, 237, 157)',
        height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buyItNow: {
        flex: 3,
        backgroundColor: 'rgb(255,203,5)',
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

    },
    bottomTab: {
        height: tabHeight,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#e2e2e2',
        borderTopWidth: 0.5
    },
    checkoutButton: {
        marginHorizontal: wp('2%'),
        backgroundColor: 'orange',
        justifyContent: 'center',
    }
  });