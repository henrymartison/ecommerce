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

class Account extends Component {

    static navigationOptions = {
      title: 'Account',
      headerRight: (
        <Icon name='ios-cart' size={24} style={{paddingRight: 10, color: '#fff'}} />
      ),
      headerStyle: {
        backgroundColor: '#5D3F39'
      },
      headerTintColor: '#fff'
    }

    render() {

      const {navigate} = this.props.navigation

        return (
            <Container style={{flex: 1}}>
                <Content>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#371109'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View 
                                style={{marginTop: 20, marginHorizontal: 10, marginBottom: 10}}
                                activeOpacity={.60} 
                                onPress={() => this.props.navigation.navigate('Profile')}
                            >
                                <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>Welcome User</Text>
                                <Text style={{fontSize: 12, fontWeight: '400', color: '#fff', paddingTop: -5}}>user@example.com</Text>
                            </View>
                        </View>
                        
                    </View>
                        <ListItem itemDivider style={{paddingTop: 20}}>
                        <Text style={{color: 'gray'}}>MY JUMIA ACCOUNT</Text>
                        </ListItem>
                        <ListComponent iconName='archive' text='Orders' />
                        <ListComponent iconName='sticky-note' text='Reviews and Ratings' />
                        <ListComponent iconName='heart' text='Saved Items' onPress={() => navigate('Saved')} />
                        <ListComponent iconName='eye' text='Recently Viewed' />
                        <ListItem itemDivider style={{paddingTop: 20}}>
                            <Text style={{color: 'gray'}}>MY SETTINGS</Text>
                        </ListItem>
                        <ListComponent text='Details' />
                        <ListComponent text='Address Book' />
                        <ListComponent text='Change Password' />
                        <ListItem itemDivider></ListItem>
                        <ListItem icon>
                            <Left><FA name='door-open' size={20} color='grey' /></Left>
                            <Body><Text style={{fontSize: 18, fontWeight: '500'}}>Log Out</Text></Body>
                        </ListItem>
                        <ListItem itemDivider></ListItem>
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