import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SectionText = (props) => {
    return (

        <Text style={styles.text}>{props.title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey'
      },
})
SectionText.defaultProps = {
    title: 'Section name'
}
export default SectionText