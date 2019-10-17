import { StyleSheet } from 'react-native';

import { fontSizeResponsive } from '../../metrics';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingRight: 8,
    paddingLeft: 12,
    paddingTop: 35,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
      fontSize: 18,
      paddingRight: 30
  },
  icon: {
    // paddingLeft: 10,
    // position: "absolute",
    // left: 0
  },
});

export default styles;