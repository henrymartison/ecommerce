import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import {fontSizeResponsive} from '../../components/metrics'

const styles = StyleSheet.create({
  swiperImage: {
      height: hp('25%'),
  },
  subMenuContainer: {
    marginTop: 10,
    // marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subView: {
    backgroundColor: 'orange',
    height: 60,
    width: 60,
    borderRadius: 60/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6d9bc3'
  },
  subMenuText: {
      paddingTop: 8,
      textAlign: 'center',
      fontSize: fontSizeResponsive(2),
      paddingBottom: 10
  },
  backgroundImage: {
      height: hp('50%')
  }
});

export default styles;