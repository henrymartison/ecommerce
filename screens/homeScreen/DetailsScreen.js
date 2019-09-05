import React, {Component} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import DetailsComponent from '../../components/DetailsComponent'
import {ListItem} from 'native-base'
import { NavigationEvents } from 'react-navigation';
import CardComponent from '../../components/CardComponent';

export default class Details extends Component{

    static navigationStyle = {
        tabBarHidden: true
    }

    render() {
        return(
                <SafeAreaView>
                    <DetailsComponent 
                    itemCreator='Generic'
                    itemName='Generic 1017E 10 inch Full HD External Headrest Monitor'
                    itemPrice='676'
                    prevPrice='60'
                    savings='25'
                    rating={3.5}
                    rate={24}
                    // onPress={() => this.props.navigation.navigate('SubDetails')}
                    productDescription='Ipsum id ipsum et ea adipisicing dolore laborum est nulla nostrud elit cillum.'
                    sellerInfo='Lorem enim minim proident deserunt voluptate amet velit et Lorem amet cillum esse officia laboris.'
                />
                

                
                </SafeAreaView>
        )
    }
}