import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { TouchableOpacity } from '../../components/TouchableOpacity';
import { Icon } from 'native-base';
 
export default class SizeChart extends Component {

    static navigationOptions = {
        title: 'Sizing Chart',
        headerRight: (
            <TouchableOpacity onPress={() => alert('Future Drawer Modal')}>
                <Icon name='md-more' style={{paddingRight: 15,}} />
            </TouchableOpacity>
          ),
          headerTitleStyle: {fontWeight: '500'},
          headerLeft: (
              <TouchableOpacity onPress={() => alert('Problem with Navigation')}>
                  <Icon name='md-arrow-back' style={{paddingLeft: 10,}} />
              </TouchableOpacity>
          )
        }

    constructor(props) {
        super(props);
        this.state = {
        tableHead: ['SIZE', 'Bust(cm)', 'Waist(cm)', 'Shoulder(cm)'],
        tableData: [
            ['S', '92-97', '64-90', '46'],
            ['M', '94-99', '68-92', '47'],
            ['L', '96-101', '70-93', '48'],
            ['XL', '100-105', '72-94', '49'],
            ['XXL', '106-111', '74-96', '50'],
            ['XXL', '110-115', '76-98', '51'],
        ]
        }
    }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      paddingTop: 30,
      backgroundColor: '#fff' 
    },
  head: {
      height: 40,
      backgroundColor: '#f1f8ff',
    },
  text: {
      margin: 6, 
      textAlign: 'center',
      flexWrap: 'wrap'
    }
});