import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Picker } from 'react-native';
import {withNavigation} from 'react-navigation'
import { Feather } from '@expo/vector-icons';

import Modal from '../Modals/CustomModal';
import {TouchableOpacity} from '../../TouchableOpacity'
import { fontSizeResponsive, height } from '../../metrics';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';


class GenderModal extends Component {
    state = {
      genders: [
        { 'sex':'Male', 'sexLabel': 'Male' },
        { 'sex':'Female', 'sexLabel': 'Female' },
       ],
       sexLabel: 'Select your sex',
       sex: ''
      
      };

      pickerChange(index){
        this.state.genders.map( (v,i)=>{
         if( index === i ){
           this.setState({
           currentLabel: this.state.genders[index].sexLabel,
           sex: this.state.genders[index].sex
          })
         }
        })
       }


  render() {
    const { filter, name, actionFilter, actionSwitchMovie } = this.state;
    const { isVisible, onPress } = this.props;

    return (
      <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.containerModal}>
          <Text style={styles.modalTitle}>Filter</Text>
          <View>
            <View>
            <Picker
              style={styles.pickerContainer}
              selectedValue={this.state.sex }
              onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>{
                this.state.genders.map( (v)=>{
                return <Picker.Item label={v.sexLabel} value={v.sex} />
                })
              }
            </Picker>
            </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onPress}
            >
              <Feather
                name="chevron-down"
                size={styles.icon.fontSize}
                color={Colors.darkBlue}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              onPress={() => alert('...')}
            >
              <Text style={[styles.buttonText, styles.buttonTextSave]}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    containerModal: {
      backgroundColor: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      height: heightPercentageToDP('50%')
    },
    containerScroll: {
      padding: 22
    },
    modal: {
        flex: 1

    },
    modalTitle: {
      textAlign: 'center',
      fontSize: fontSizeResponsive(2.5),
      fontWeight: 'bold',
      color: Colors.darkBlue,
      padding: 22,
      paddingBottom: 18
    },
    pickerContainer: {
      height: heightPercentageToDP('20%')
    },
    containerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 22,
      marginTop: 50
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100
    },
    buttonClose: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: Colors.darkBlue,
      paddingVertical: 9.1,
      flex: 0.23
    },
    buttonSave: {
      backgroundColor: Colors.darkBlue,
      borderWidth: 1,
      borderColor: Colors.darkBlue,
      flex: 0.67
    },
    buttonText: {
      fontSize: fontSizeResponsive(2.1),
      textAlign: 'center'
    },
    buttonTextSave: {
      color: 'white',
      fontWeight: 'bold'
    },
    icon: {
      fontSize: fontSizeResponsive(2.8)
    }
  });

  export default withNavigation(GenderModal)