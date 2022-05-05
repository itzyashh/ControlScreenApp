import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../../../assests/icons/rocket.svg'

const CustomButton = () => {
    return (
        <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryText}>Dummy</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    primaryButton:{
        width: '50%',
        padding: 22,
        backgroundColor:'white',
        alignItems: 'center',

         marginVertical: 5,

    },
    primaryText:{
        fontWeight: '400',

    }
})

export default CustomButton