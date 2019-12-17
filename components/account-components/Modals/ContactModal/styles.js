import { StyleSheet } from "react-native";

import { fontSizeResponsive, height } from "../../../metrics";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: height * 0.55
  },
  containerScroll: {
    padding: 22
  },
  modalTitle: {
    textAlign: "center",
    fontSize: fontSizeResponsive(2.5),
    fontWeight: "bold",
    color: "black",
    padding: 22,
    paddingBottom: 18
  },
  containerSection: {
    marginBottom: 25
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    padding: 15,
    paddingTop: 0
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  optionSectionTitle: {
    fontSize: fontSizeResponsive(2.4),
    color: "black",
    fontWeight: "bold",
    width: "100%"
  },
  optionTitle: {
    fontSize: fontSizeResponsive(2.3),
    color: "black",
    width: "80%",
    paddingLeft: 8
  },
  containerButton: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 22
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 100
  },
  buttonClose: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 9.1,
    flex: 0.23
  },
  buttonSave: {
    backgroundColor: Colors.PRIMARY,
    borderWidth: 0.5,
    borderColor: "grey",
    // flex: 0.67,
    width: "60%"
  },
  buttonText: {
    fontSize: fontSizeResponsive(2.1),
    textAlign: "center"
  },
  buttonTextSave: {
    color: "white",
    fontWeight: "bold"
  },
  icon: {
    fontSize: fontSizeResponsive(2.8)
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    backgroundColor: "#e2e2e2"
  },
  image: {
    height: 30,
    width: 30
  }
});

export default styles;
