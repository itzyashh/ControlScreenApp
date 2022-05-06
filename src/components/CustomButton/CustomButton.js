import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../../../assests/icons/rocket.svg'

const CustomButton = (props) => {
    return (
        <Pressable onPress={props.onPress}
        style={[
            styles.primaryButton,
            styles[`primary${props.type}`]
        ]}>
            
            <Text style={styles.primaryText}>{props.name}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    primaryButton:{
        width: '48%',
        padding: 22,
        backgroundColor:'white',
        alignItems: 'center',
         marginHorizontal:5,
         marginVertical:5

    },
    primarysecondaryButton: {
        width: '31%',
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
    name: 'Button name',
    type:'primaryButton'
}

export default CustomButton