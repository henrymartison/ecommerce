import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'
import Modal from 'react-native-modal'


import Colors from '../../constants/Colors'
import { TouchableOpacity } from '../TouchableOpacity'
import GenderModal from './Modals/GenderModal'
import DoBModal from './Modals/DoBModal'

class PersonalizeCardItem extends React.Component{
    state = {
        isModalVisible: false,
      };
     
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
      toggleModalx = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

      modalConfirmResponse = () => {
          alert('Successful Gender Selection')
        //   this.setState({ isModalVisible: !this.state.isModalVisible });
      }
      
    render() {

        const {
            onPress
        } = this.props
        return (
                <View style={{height: hp('40%'), marginTop: 15}}>
                    <View style={styles.separator}/>
                    <TouchableOpacity 
                        onPress={this.toggleModal}
                        style={styles.container}
                    >
                        <Text style={{fontSize: 17, color: Colors.DARKGRAY}}>Gender</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{paddingRight: 10, fontSize: 17, color: 'grey'}}>Female</Text>
                            <Ionicons name='ios-arrow-forward' size={24} color='grey' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}/>
                    <TouchableOpacity 
                        onPress={this.toggleModalx}
                        style={styles.container}
                    >
                        <Text style={{fontSize: 17, color: Colors.DARKGRAY}}>Date of Birth</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{paddingRight: 10, fontSize: 17, color: 'grey'}}>February 26, 1997</Text>
                            <Ionicons name='ios-arrow-forward' size={24} color='grey' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}/>
                    <TouchableOpacity style={styles.container}>
                        <Text style={{fontSize: 17, color: Colors.DARKGRAY}}>Purpose of Shopping</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{paddingRight: 10, fontSize: 17, color: 'grey'}}>Personal Use</Text>
                            <Ionicons name='ios-arrow-forward' size={24} color='grey' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}/>
                    <TouchableOpacity style={styles.container}>
                        <Text style={{fontSize: 17, color: Colors.DARKGRAY}}>Your Interests</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{paddingRight: 10, fontSize: 17, color: 'grey'}}>21 Categories</Text>
                            <Ionicons name='ios-arrow-forward' size={24} color='grey' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}/>
                    <View style={{ flex: 1 }}>
                    <GenderModal 
                        isVisible={this.state.isModalVisible}
                        closeModal={this.toggleModal}
                        confirmResponse={this.modalConfirmResponse}
                    />
                    <DoBModal 
                        isVisible={this.state.isModalVisible}
                        closeModal={this.toggleModal}
                        confirmResponse={this.modalConfirmResponse}
                    />
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#ccc',
        height: StyleSheet.hairlineWidth
    },
    container: {
        flex: 1, backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})

export default withNavigation(PersonalizeCardItem)