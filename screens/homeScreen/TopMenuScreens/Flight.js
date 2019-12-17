import React from "react";
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
import { TouchableOpacity } from "../../../components/TouchableOpacity";

const cities = [
  {
    label: "Accra",
    value: "accra"
  },
  {
    label: "Kumasi",
    value: "kumasi"
  },
  {
    label: "Cape Coast",
    value: "capecoast"
  }
];

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Flight",
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 10 }}
      >
        <Ionicons name="md-arrow-back" size={25} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: null,
      city0: null,
      city1: null,
      lastTextInput: null,
      city5: null
    };

    this.state = {
      city0: undefined,
      city1: undefined,
      city2: undefined,
      city3: undefined,
      city4: "Accra",
      prevCity5: undefined,
      city5: null
    };

    // this.InputAccessoryView = this.InputAccessoryView.bind(this);
  }

  // InputAccessoryView() {
  //   return (
  //     <View style={defaultStyles.modalViewMiddle}>
  //       <TouchableWithoutFeedback
  //         onPress={() => {
  //           this.setState(
  //             {
  //               city5: this.state.prevCity5
  //             },
  //             () => {
  //               this.inputRefs.city5.togglePicker(true);
  //             }
  //           );
  //         }}
  //         hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
  //       >
  //         <View testID="needed_for_touchable">
  //           <Text
  //             style={[
  //               defaultStyles.done,
  //               { fontWeight: "normal", color: "red" }
  //             ]}
  //           >
  //             Cancel
  //           </Text>
  //         </View>
  //       </TouchableWithoutFeedback>
  //       <Text>Name | Prefer</Text>
  //       <TouchableWithoutFeedback
  //         onPress={() => {
  //           this.inputRefs.city5.togglePicker(true);
  //         }}
  //         hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
  //       >
  //         <View testID="needed_for_touchable">
  //           <Text style={defaultStyles.done}>Done</Text>
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </View>
  //   );
  // }

  render() {
    const placeholder = {
      label: "Select a city...",
      value: null,
      color: "#9EA0A4"
    };

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <Text style={styles.text}>From:</Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={cities}
            onValueChange={value => {
              this.setState({
                city4: value
              });
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 10,
                right: 12
              }
            }}
            value={this.state.city4}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: "yellow" }}
            Icon={() => {
              return <Feather name="chevron-down" size={24} color="gray" />;
            }}
          />

          <View style={{ padding: 5 }} />
          <Text style={styles.text}>To:</Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={cities}
            onValueChange={value => {
              this.setState({
                city4: value
              });
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 10,
                right: 12
              }
            }}
            value={this.state.city4}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: "yellow" }}
            Icon={() => {
              return <Feather name="chevron-down" size={24} color="gray" />;
            }}
          />

          <View style={{ padding: 5 }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10
  },

  text: {
    fontWeight: "600",
    fontSize: 18,
    padding: 5
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "pink",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});
