import React from 'react'
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { Switch } from 'native-base'


import Colors from '../../constants/Colors'
import { TouchableOpacity } from '../../components/TouchableOpacity'

export default class Filter extends React.Component{
  state = {
    value: false
  }

  onSwitchToggled = () => {
    const {value} = this.state
    this.setState({value: !value})
  }

  render() {
    const {value} = this.state

    return(
      <View style={{backgroundColor: Colors.bgColor, flex: 1, justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
          <Text style={{fontWeight: '600', fontSize: 20, paddingLeft: 10}}>Filter</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name='ios-refresh' size={20} color={Colors.PRIMARY} />
              <Text style={{paddingLeft: 7, fontSize: 17, fontWeight: '500', color: Colors.PRIMARY}}>Reset All</Text>
            </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView>
        <ScrollView>
          <View style={{paddingHorizontal: 10, paddingVertical: 20, backgroundColor: 'white'}}>
            <Text style={{paddingLeft: 10, fontSize: 16}}>Price Range</Text>
            <View style={{flexDirection: 'row', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={styles.textInputContainer}>
                <TextInput 
                  placeholder='Min'
                  keyboardType='numeric'
                  style={styles.textInput}
                />
              </View>
                <Text style={{fontSize: 30}}> ~ </Text>
              <View style={styles.textInputContainer}>
                <TextInput 
                  placeholder='Max'
                  keyboardType='numeric'
                  style={styles.textInput}
                />
              </View>
            </View>

            <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingTop: 30, alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>Free Shipping</Text>
              <Switch onValueChange={this.onSwitchToggled} value={value} />
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingTop: 30, alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='ios-pin' size={20} color='lightskyblue' />
                <Text style={{fontSize: 18, paddingLeft: 10}}>Local Products</Text>
              </View>
              <Switch value={false} />
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingTop: 30, alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='ios-airplane' size={20} color='orange' />
                <Text style={{fontSize: 18, paddingLeft: 10}}>International Products</Text>
              </View>
              <Switch value={false} />
            </View>
          </View>
          <View style={{backgroundColor: 'white', marginTop: 10, paddingVertical: 15, paddingHorizontal: 20}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10
              }}
              onPress={() => this.props.navigation.navigate('CategoryPicker')}
            >
              <View>
                <Text style={{fontSize: 17}}>Categories</Text>
                <View style={{borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: Colors.bgColor, alignItems: 'center', justifyContent: 'center', marginTop: 8}}>
                  <Text style={{color: 'grey'}}>Sneakers</Text>
                </View>
              </View>
              <Ionicons name='ios-arrow-forward' color='grey' /> 
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 10,
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('ColorPicker')}
            >
              <Text style={{fontSize: 17}}>Color</Text>
                
              <Ionicons name='ios-arrow-forward' color='grey' />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 10,
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('BrandPicker')}
            >
              <Text style={{fontSize: 17}}>Brand</Text>
                
              <Ionicons name='ios-arrow-forward' color='grey' />
            </TouchableOpacity> */}
          </View>
        </ScrollView>
        </KeyboardAwareScrollView>

        <TouchableOpacity style={{height: hp('7.8%'), backgroundColor: Colors.PRIMARY, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 19, color: 'white'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.bgColor,
      width: wp('34%'),
      // paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
  },
  textInput: {
    paddingHorizontal: 20, 
    paddingVertical: 10
  }
})