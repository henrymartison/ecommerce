import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";
import {
    Card, CardItem
} from 'native-base'
import Divider from 'react-native-divider'

import {TouchableOpacity} from './TouchableOpacity'

const ItemCategory =({
    heading, imageUri1, imageUri2, imageUri3, imageUri4, discount, itemName, price, onPress
}) => {
        return (
            <View>
                <View style={{backgroundColor: '#fff', }}>
                    <View style={{backgroundColor: 'orange', height: 40, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: '#0d0d0d', paddingTop: 8, paddingLeft: 10, fontWeight: '600'}}>{heading}</Text>
                        <Text style={{color: '#0d0d0d', paddingTop: 8, paddingRight: 10, fontWeight: '600'}}>SEE ALL</Text>
                    </View>
                    </View>
                </View>
                <View style={{borderWidth: .3, borderColor: 'gray', backgroundColor: '#fff', paddingVertical: 10, shadowOpacity: 0.3, shadowRadius: 5, shadowColor: 'gray'}}>
                <View style={{marginHorizontal: 10, marginTop: -1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#fff', height: 180, width: 160, borderRadius: 5, alignItems: 'center', borderWidth: .3, borderColor: 'gray'}}>
                        <ImageBackground source={imageUri1} resizeMode='contain' style={{height: 130, width: 100}}>
                            <View style={{backgroundColor: 'orange', justifyContent: 'center', width: 30, height: 20, position: 'absolute', right: -20, top: 5, borderRadius: 3}}>
                                <Text style={{textAlign: 'center'}}>{discount}%</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.divider} />
                        <View style={{marginTop: 10, paddingHorizontal: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: '400'}}>{itemName}</Text>
                            <Text style={{paddingTop: 5, fontWeight: 'bold'}}>{price}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#fff', height: 180, width: 160, marginLeft: 10, borderRadius: 5, alignItems: 'center', borderWidth: .3, borderColor: 'gray'}}>
                        <ImageBackground source={imageUri2} resizeMode='contain' style={{height: 130, width: 100}}>
                            <View style={{backgroundColor: 'orange', justifyContent: 'center', width: 30, height: 20, position: 'absolute', right: -20, top: 5, borderRadius: 3}}>
                                <Text style={{textAlign: 'center'}}>{discount}%</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.divider} />
                        <View style={{marginTop: 10, paddingHorizontal: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: '400'}}>{itemName}</Text>
                            <Text style={{paddingTop: 5, fontWeight: 'bold'}}>{price}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#fff', height: 180, width: 160, borderRadius: 5, alignItems: 'center', borderWidth: .3, borderColor: 'gray'}}>
                        <ImageBackground source={imageUri3} resizeMode='contain' style={{height: 130, width: 100}}>
                            <View style={{backgroundColor: 'orange', justifyContent: 'center', width: 30, height: 20, position: 'absolute', right: -20, top: 5, borderRadius: 3}}>
                                <Text style={{textAlign: 'center'}}>{discount}%</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.divider} />
                        <View style={{marginTop: 10, paddingHorizontal: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: '400'}}>{itemName}</Text>
                            <Text style={{paddingTop: 5, fontWeight: 'bold'}}>{price}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#fff', height: 180, width: 160, marginLeft: 10, borderRadius: 5, alignItems: 'center', borderWidth: .3, borderColor: 'gray'}}>
                        <ImageBackground source={imageUri4} resizeMode='contain' style={{height: 130, width: 100}}>
                            <View style={{backgroundColor: 'orange', justifyContent: 'center', width: 30, height: 20, position: 'absolute', right: -20, top: 5, borderRadius: 3}}>
                                <Text style={{textAlign: 'center'}}>{discount}%</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.divider} />
                        <View style={{marginTop: 10, paddingHorizontal: 5, alignItems: 'center'}}>
                            <Text style={{fontWeight: '400'}}>{itemName}</Text>
                            <Text style={{paddingTop: 5, fontWeight: 'bold'}}>{price}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
export default ItemCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        borderBottomWidth: .5,
        borderBottomColor: 'gray',
        // width: 300,
        borderEndWidth: 150
    }
});