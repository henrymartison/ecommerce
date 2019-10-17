import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import Colors from '../constants/Colors';


export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main')
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" color="rgb(27, 40, 54)"/>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Marvalinks Shopping Mall</Text>
        </View>
        <Entypo name={'qq'} size={70} style={styles.logo}/>
        <Text style={styles.text}>Buy Globally . Sell Globally</Text>
        <View style={styles.bottomTextContainer}>
            <Text style={{paddingTop: 50, fontSize: 12, color: 'grey'}}>©2018 - 2019 Marvalinks.com All Rights Reserved</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColorDeep
  },
  logo: {
    alignSelf: "center",
    color: 'rgb(29, 161, 242)'
  },
  headerContainer: {
      paddingBottom: 38,
    //   paddingHorizontal: 20
  },
  headerText: {
      color: Colors.PRIMARY,
      fontSize: 27,
      fontWeight: '600'
  },
  text: {
      color: Colors.darkBlue,
      fontWeight: '600',
      fontSize: 18
  },
  bottomTextContainer: {
      position: 'absolute',
      bottom: 20
  }
});