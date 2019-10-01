import React from 'react'
import { FlatList, Text, View } from 'react-native'


import currencies from '../../../../data/currencies'
import { ListItem, Separator } from '../../../../components/List'


const TEMP_CURRENT_CURRENCY = 'GHC'
class CurrencyList extends React.Component {

    handlePress = () => {
        console.log('Row Pressed');
        
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <FlatList 
                    data={currencies}
                    renderItem={({item}) => 
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />    
                }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )

    }
}

export default CurrencyList