import React, {Component} from 'react'
import {} from 'react-native'
import ShoppingCartIcon from './ShoppingCartIcon'
import { TouchableOpacity } from './TouchableOpacity'

class Header extends Component {
    static navigationOptions = {
        title: 'Product Details',
        headerRight: (
            <ShoppingCartIcon/>
          ),
          headerLeft: (
              <TouchableOpacity>
                  <Icon name='md-arrow-back' style={{paddingLeft: 10}} />
              </TouchableOpacity>
          )
        }
    render() {
        return null
    }
}

export default Header