import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SectionText from '../../components/SectionText'
import CustomButton from '../../components/CustomButton'

const GroupControlSection = (props) => {
    const MoreOpenPressed =() => {
        alert('More Open Pressed')
    }
    const MoreClosePressed =() => {
        alert('More Close Pressed')
    }
  return (
    <View style={styles.container}>
      <SectionText title={props.title}/>
      <View style={{flexDirection:'row'}}>
          <CustomButton name='More Open' onPress={MoreOpenPressed}/>
          <CustomButton name='More Close' onPress={MoreClosePressed}/>
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