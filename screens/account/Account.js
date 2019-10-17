import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Container, Content, Icon, Button, ListItem, Left, Body  } from 'native-base'
import FA from 'react-native-vector-icons/FontAwesome5'


import ListComponent from '../../components/ListComponent';
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "../../components/TouchableOpacity";
import Search from '../../components/common/Search'

class Account extends Component {

    static navigationOptions = {
      header: <Search/>
    }
    render() {

      const {navigate} = this.props.navigation

        return (
            <Container style={{flex: 1, }}>
                <Content>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                style={{marginTop: 15, marginHorizontal: 10, marginBottom: 20}}
                                activeOpacity={.60} 
                                onPress={() => this.props.navigation.navigate('Profile')}
                            >
                                <Text style={{fontSize: 20, fontWeight: '700',}}>Welcome Mr. Martison</Text>
                                <Text style={{fontSize: 12, fontWeight: '400', paddingTop: -5}}>henrymartison@example.com</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                        <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{color: 'gray'}}>MY ECOMMERCE ACCOUNT</Text>
                        </ListItem>
                        <ListComponent iconName='eye' text='Recently Viewed Items' onPress={() => navigate('RecentlyViewed')} />
                        {/* <ListComponent iconName='envelope' text='My Messages' /> */}
                        <ListComponent iconName='file-alt' text='My Orders' onPress={() => navigate('Orders')} />
                        {/* <ListComponent iconName='dollar-sign' text='My ecommerceRefer' /> */}
                        <ListComponent iconName='comment-alt' text='My Reviews and Rating' />
                        {/* <ListComponent iconName='shopping-bag' text='Recently Purchased Items' /> */}
                        <ListComponent iconName='heart' text='My Favorites' onPress={() => navigate('Favorites')} />
                        {/* <ListComponent iconName='gift' text='My Coupons' /> */}
                        
                        <ListItem itemDivider style={{paddingTop: 20}}>
                            <Text style={{color: 'grey'}}>MY SETTINGS</Text>
                        </ListItem>

                        {/* <ListComponent iconName='credit-card' text='My Credit Cards' /> */}
                        <ListComponent iconName='map-marked-alt' text='Shipping Address' onPress={() => navigate('ShippingAddress')} />
                        {/* <ListComponent iconName='user-cog' text='Personalize' onPress={() => navigate('Personalize')} /> */}
                        
                        {/* <ListItem itemDivider style={{paddingVertical: 10}}/> */}
                        
                        {/* <ListComponent iconName='user-plus' text='Invite Friends' /> */}
                        <ListComponent iconName='cogs' text='Settings' onPress={() => navigate('Settings')} />

                        <Button
                            style={styles.button}
                        >
                            <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>Log out</Text>
                        </Button>
                        
                </Content>
            </Container>
        );
    }
}
export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80/2
    },
    header: {
        fontSize: 17
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY
    }
});