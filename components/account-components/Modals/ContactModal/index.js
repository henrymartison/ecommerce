import React, { Component } from "react";
import { View, Text, ScrollView, Image, Platform, Linking } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Modal } from "../Modal";
import { TouchableOpacity } from "../../../TouchableOpacity";

import styles from "./styles";
import { Content } from "native-base";

export default class ContactModal extends Component {
  state = {
    filter: this.props.filterType,
    name: this.props.filterName,
    actionContact: this.props.actionContact,
    customerCare_phone_no: "",
    mobile_no: "0501077930",
    msg: ""
  };

  changeValues = (filter, name) => {
    this.setState({ filter, name });
  };

  dialCall = () => {
    let customerCare_phone_no = this.state.customerCare_phone_no;

    if (Platform.OS === "android") {
      customerCare_phone_no = "tel:${+233 (0) 54 969 5108}";
    } else {
      customerCare_phone_no = "telprompt:${+233 (0) 54 969 5108}";
    }

    Linking.openURL(customerCare_phone_no);
  };

  //   sendOnWhatsApp = () => {
  //     let msg = this.state.msg;
  //     let mobile = this.state.mobile_no;
  //     if (mobile) {
  //       if (msg) {
  //         let url =
  //           "whatsapp://send?text=" +
  //           this.state.msg +
  //           "&phone=233" +
  //           this.state.mobile_no;
  //         Linking.openURL(url)
  //           .then(data => {
  //             console.log("WhatsApp Opened");
  //           })
  //           .catch(() => {
  //             alert("Make sure Whatsapp installed on your device");
  //           });
  //       } else {
  //         alert("Please insert message to send");
  //       }
  //     } else {
  //       alert("Please insert mobile no");
  //     }
  //   };

  render() {
    const { filter, name, actionContact, actionSwitchMovie } = this.state;
    const { isVisible, style } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        actionOpenClose={actionContact}
        style={style}
      >
        <View style={styles.containerModal}>
          <Text style={styles.modalTitle}>Contact Via</Text>
          <Content>
            <TouchableOpacity style={styles.containerRow}>
              <View style={styles.itemRow}>
                <Image
                  source={require("../../../../assets/images/icons/wechat.png")}
                  style={styles.image}
                />
                <Text style={styles.optionTitle}>WeChat</Text>
              </View>
              <Feather name="chevron-right" size={23} color="gray" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              //   onPress={Linking.openURL(
              //     "http://api.whatsapp.com/send?phone=233" + this.state.mobile_no
              //   )}
              style={styles.containerRow}
            >
              <View style={styles.itemRow}>
                <Image
                  source={require("../../../../assets/images/icons/whatsapp.png")}
                  style={styles.image}
                />
                <Text style={styles.optionTitle}>WhatsApp</Text>
              </View>
              <Feather name="chevron-right" size={23} color="gray" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              onPress={this.dialCall}
              style={styles.containerRow}
            >
              <View style={styles.itemRow}>
                <Image
                  source={require("../../../../assets/images/icons/call.png")}
                  style={styles.image}
                />
                <Text style={styles.optionTitle}>Voice Call</Text>
              </View>
              <Feather name="chevron-right" size={23} color="gray" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.containerRow}>
              <View style={styles.itemRow}>
                <Image
                  source={require("../../../../assets/images/icons/headset.png")}
                  style={styles.image}
                />
                <Text style={styles.optionTitle}>Live Chat</Text>
              </View>
              <Feather name="chevron-right" size={23} color="gray" />
            </TouchableOpacity>
            <View style={styles.separator} />
          </Content>
          <View style={styles.containerButton}>
            {/* <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={actionContact}
            >
              <Feather
                name='chevron-down'
                size={styles.icon.fontSize}
                color={black}
              />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              //   onPress={() => actionSwitchMovie(filter, name, false)}
            >
              <Text style={[styles.buttonText, styles.buttonTextSave]}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
