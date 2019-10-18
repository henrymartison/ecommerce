import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import { Form, Item, Label, Input, Picker, Icon } from 'native-base'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Colors from '../../../constants/Colors'


const attributes = [
    {
       label: 'First Name',
       icon: 'ios-person'
    },
    {
       label: 'Last Name',
       icon: 'ios-person'
    },
    {
       label: 'Street Address',
       icon: 'ios-person'
    },
    {
       label: 'Street Address(Optional)',
       icon: 'ios-person'
    },
    {
       label: 'State/Region/Province',
       icon: 'ios-person'
    },
    {
       label: 'City',
       icon: 'ios-person'
    },
    {
       label: 'Mobile No.',
       icon: 'ios-person'
    },
]

const width = Dimensions.get('window').width

export default class ShippingForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value = string) {
        this.setState({
          selected2: value
        });
      }

    renderForm() {
        return attributes.map((attr, index) => {
            return(
                <Item floatingLabel key={attr.label}>
                    <Label style={{color: 'grey'}}>{attr.label}</Label>
                    <Input/>
                </Item>
            )
        })
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                <View>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 20, paddingTop: 10}}>
                        <Text style={{color: 'grey', fontSize: 16, fontWeight: '500'}}>
                            Please Fill In English
                        </Text>
                    </View>
                    <View style={{backgroundColor: 'white'}}>
                        <Form>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" style={{paddingLeft: 170, color: 'grey'}} />}
                                    style={{ width: undefined }}
                                    placeholder="Select your Country"
                                    placeholderStyle={{ color: "grey" }}
                                    placeholderIconColor="#ffc40c"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                    headerBackButtonText={<Icon name='ios-close' style={{fontSize: 40}} />}
                                    iosHeader='Countries'
                                >
                                    <Picker.Item label="China" value="key0" />
                                    <Picker.Item label="Ghana" value="key1" />
                                    <Picker.Item label="South Africa" value="key2" />
                                    <Picker.Item label="Togo" value="key3" />
                                    <Picker.Item label="Zimbabwe" value="key4" />
                                </Picker>
                            </Item>
                            {this.renderForm()}
                        </Form>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}