import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CustomHeader = (props) => {
  return (
    <View>
      <Text style={styles.header}>{props.heading}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize:24,
    color: 'black',
    fontWeight:'400',

    marginTop:10,
    paddingHorizontal:10
  },
  subtitle:{
    paddingHorizontal:12
  }
})

export default CustomHeader