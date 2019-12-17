import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { Content, Item, Label, Input, Form, Picker, Icon } from "native-base";

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: ""
    };
  }
  onValueChange2(value = string) {
    this.setState({
      selected2: value
    });
  }

  _validateForm = () => {
    alert("Form Validated");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ paddingLeft: 170, color: "grey" }}
                  />
                }
                style={{ width: undefined }}
                placeholder="Select your Country"
                placeholderStyle={{ color: "grey" }}
                placeholderIconColor="#ffc40c"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                headerBackButtonText={
                  <Icon name="ios-close" style={{ fontSize: 40 }} />
                }
                iosHeader="Countries"
              >
                <Picker.Item label="China" value="key0" />
                <Picker.Item label="Ghana" value="key1" />
                <Picker.Item label="South Africa" value="key2" />
                <Picker.Item label="Togo" value="key3" />
                <Picker.Item label="Zimbabwe" value="key4" />
              </Picker>
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="First Name"
                returnKeyType="next"
                ref={ref => {
                  this.first_name = ref;
                }}
                onSubmitEditing={() => this.last_name && this.last_name.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="Last Name"
                returnKeyType="next"
                ref={ref => {
                  this.last_name = ref;
                }}
                onSubmitEditing={() => this.st_ad && this.st_ad.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="Street Address"
                returnKeyType="next"
                ref={ref => {
                  this.st_ad = ref;
                }}
                onSubmitEditing={() => this.st_ad_alt && this.st_ad_alt.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="Street Address(alt)"
                returnKeyType="next"
                ref={ref => {
                  this.st_ad_alt = ref;
                }}
                onSubmitEditing={() => this.reg && this.reg.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="State/Region/Province"
                returnKeyType="next"
                ref={ref => {
                  this.reg = ref;
                }}
                onSubmitEditing={() => this.city && this.city.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="City"
                returnKeyType="next"
                ref={ref => {
                  this.city = ref;
                }}
                onSubmitEditing={() => this.mobile && this.mobile.focus()}
              />
            </Item>
            <Item style={{ marginVertical: 15 }}>
              <TextInput
                placeholder="Mobile"
                returnKeyType="done"
                keyboardType="phone-pad"
                ref={ref => {
                  this.mobile = ref;
                }}
                onSubmitEditing={this._validateForm}
              />
            </Item>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    );
  }
}
export default ShippingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10
  }
});
