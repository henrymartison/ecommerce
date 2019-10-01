import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Container, Content, Icon, Button, ListItem, Left, Body  } from 'native-base'
import FA from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ListComponent from '../../components/ListComponent';
import ShoppingCartIcon from "../../components/ShoppingCartIcon";

class Account extends Component {

    static navigationOptions = {
      title: 'Account',
      headerRight: (
        <ShoppingCartIcon />
      ),
      headerLeft: (
        <Icon name='ios-menu' size={24} style={{paddingLeft: 10, color: '#000'}} />
      ),
      headerTintColor: '#000'
    }

    render() {

      const {navigate} = this.props.navigation

        return (
            <Container style={{flex: 1, }}>
                <Content>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#371109'}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}}
                                activeOpacity={.60} 
                                onPress={() => this.props.navigation.navigate('Profile')}
                            >
                                <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>Welcome Mr. Martison</Text>
                                <Text style={{fontSize: 12, fontWeight: '400', color: '#fff', paddingTop: -5}}>henrymartison@example.com</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                        <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{color: 'gray'}}>MY ECOMMERCE ACCOUNT</Text>
                        </ListItem>
                        <ListComponent iconName='eye' text='Recently Viewed Items' onPress={() => navigate('RecentlyViewed')} />
                        <ListComponent iconName='envelope' text='My Messages' />
                        <ListComponent iconName='file-alt' text='My Orders' />
                        <ListComponent iconName='dollar-sign' text='My ecommerceRefer' />
                        <ListComponent iconName='comment-alt' text='My Reviews and Rating' />
                        <ListComponent iconName='shopping-bag' text='Recently Purchased Items' />
                        <ListComponent iconName='heart' text='My Favorites' onPress={() => navigate('Saved')} />
                        <ListComponent iconName='gift' text='My Coupons' />
                        
                        <ListItem itemDivider style={{paddingTop: 10}} />

                        <ListComponent iconName='credit-card' text='My Credit Cards' />
                        <ListComponent iconName='map-marked-alt' text='Shipping Address' />
                        <ListComponent iconName='user-cog' text='Personalize' />
                        
                        <ListItem itemDivider style={{paddingVertical: 10}}/>
                        
                        <ListComponent iconName='user-plus' text='Invite Friends' />
                        <ListComponent iconName='cogs' text='Settings' onPress={() => navigate('Settings')} />
                        
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
    }
});