import { StyleSheet, Platform } from 'react-native';

import { fontSizeResponsive } from '../../metrics';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingRight: 8,
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.bgColor
  },
  containerInput: {
    height: 37,
    backgroundColor: Platform.OS === 'ios' ? '#d8d8d8' : '#e8e8e8',
    borderRadius: 15,
    flex: 1
  },
  inputDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    padding: 10
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: fontSizeResponsive(2.2),
    color: Colors.darkBlue,
    width: '100%'
  }
});

export default styles;