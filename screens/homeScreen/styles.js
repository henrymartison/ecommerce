import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { fontSizeResponsive } from "../../components/metrics";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  swiperImage: {
    height: hp("20%")
  },
  swipers: {
    height: null,
    width: width,
    resizeMode: "cover",
    flex: 1
  },
  subMenuContainer: {
    marginTop: 10,
    // marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  subView: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d9bc3"
  },
  subMenuText: {
    paddingTop: 8,
    textAlign: "center",
    fontSize: fontSizeResponsive(2),
    paddingBottom: 10
  },
  backgroundImage: {
    height: hp("30%"),
    width: width - wp("8%"),
    marginHorizontal: 15,
    borderRadius: 10,
    resizeMode: "cover"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
});

export default styles;
