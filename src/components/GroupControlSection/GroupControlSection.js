import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SectionText from '../SectionText'
import CustomButton from '../CustomButton'

const GroupControlSection = (props) => {
    const MoreOpenPressed =() => {
        alert('More Open Pressed')
    }
  return (
    <View style={styles.container}>
      <SectionText title={props.title}/>
      <View style={{flexDirection:'row'}}>
          <CustomButton name='More Open' onPress={MoreOpenPressed}/>
          <CustomButton name='More Close' />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        marginHorizontal: 14,
      },
})
export default GroupControlSection