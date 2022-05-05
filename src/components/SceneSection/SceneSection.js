import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import SectionText from '../SectionText'

const ContentSection = (props) => {

  const allOff = () => {
    alert('All Off pressed')
  }
  const bright = () => {
    alert('Bright pressed')
  }


  return (
    <View style={styles.container}>
      <SectionText title={props.title}/>
      <View style={[
        styles.test, {
      flexDirection: "row"
    }]}>
        <CustomButton name="All Off" onPress={allOff}/>
        <CustomButton name="Bright"  onPress={bright}/>
        
      </View>
      <View style={{
      flexDirection: "row"
      }}>
        <CustomButton name="All Off" onPress={allOff}/>
        <CustomButton name="Bright"  onPress={bright}/>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  test:{},
  container: {
    marginTop: 18,
    marginHorizontal: 14,
  },
  
})
export default ContentSection