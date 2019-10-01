import React from 'react'
import {Image, View, StyleSheet} from 'react-native'

const Icon = ({checkmark, visible}) => {
    const iconStyles = [styles.icon]
    if(visible) {
        iconStyles.push(styles.iconVisible)
    }

    return (
        <View style={iconStyles}>
            {
                checkmark ? <Image style={styles.checkIcon} source={require('../../assets/images/checkMarks/images/check.png')} />
                : null
            }
        </View>
    )
}

export default Icon

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconVisible: {
        backgroundColor: 'lightskyblue'
    },
    checkIcon: {
        width: 18,
        resizeMode: 'contain'
    }
})

