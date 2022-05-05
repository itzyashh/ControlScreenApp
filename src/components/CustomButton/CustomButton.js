import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../../../assests/icons/rocket.svg'

const CustomButton = (props) => {
    return (
        <Pressable onPress={props.onPress}
        style={styles.primaryButton}>
            
            <Text style={styles.primaryText}>{props.name}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    primaryButton:{
        width: '45%',
        padding: 22,
        backgroundColor:'white',
        alignItems: 'center',
         marginHorizontal:5,
         marginVertical:5

    },
    primaryText:{
        fontWeight: '400',
        
    }
})

CustomButton.defaultProps = {
    name: 'Button name'
}

export default CustomButton