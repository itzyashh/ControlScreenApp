import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const ContentSection = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <CustomButton />
      <CustomButton />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey'
  }
})
export default ContentSection