import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { showMessage } from "react-native-flash-message"


import { TouchableOpacity } from './TouchableOpacity'
import Colors from '../constants/Colors'

export default class AddToFavorites extends Component{
    state = {
        liked: [true, false],
    }

    like(){
        const {liked, likes} = this.state
      
    
        if (liked) {
            this.setState({liked: false, likes: likes-1})
            showMessage({
                message: 'Product removed from wishlist',
                type: 'success',
                style: {alignItems: 'center'},
            })
        }
        
        else {
            this.setState({liked: true, likes: likes+1})
            showMessage({
                message: 'Product added to wishlist',
                type: 'success',
                style: {alignItems: 'center'},
            })
        }

      }

    render() {
        const {liked, likes} = this.state

        return (
            <TouchableOpacity onPress={()=> this.like()}  style={styles.addToFavorites}>
                { liked ? 
                <Ionicons name='ios-heart' size={23} style={{padding:4}} color={liked ? '#e51c23' : 'rgb(136, 153, 166)'}/>
                :
                <Ionicons name='ios-heart-empty' size={23} style={{padding:4}} color={liked ? '#e51c23' : 'rgb(136, 153, 166)'}/>
                
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    addToFavorites: {
        // flex: 1,
        backgroundColor: 'white',
        // height: tabHeight,
        alignItems: 'center',
        justifyContent: 'center'

    }
})