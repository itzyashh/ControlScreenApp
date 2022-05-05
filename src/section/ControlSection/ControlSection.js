import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SectionText from '../../components/SectionText'

const ControlSection = (props) => {
  return (
    <View style={styles.container}>
      <SectionText title={props.title}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginHorizontal: 14,
  },
})
export default ControlSection