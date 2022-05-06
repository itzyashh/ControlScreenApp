import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SectionText from '../../components/SectionText'
import CustomButton from '../../components/CustomButton'

const ControlSection = (props) => {

  const OpenButton = () => {
    alert('Open button pressed')
  }
  const CloseButton = () => {
    alert('Close button pressed')
  }
  const Pause = () => {
    alert('Pause button pressed')
  }
  const Blackout = () => {
    alert('Blackout button pressed')
  }
  const Flip = () => {
    alert('Flip+ button pressed')
  }

  return (<>

    <View style={styles.container}>
      <SectionText title={props.title} />
    </View>
    <View style={{flexDirection:'row'}}>

    <CustomButton name='Open' type='secondaryButton' onPress={OpenButton}/>
    <CustomButton name='Pause' type='secondaryButton' onPress={Pause}/>
    <CustomButton name='Close' type='secondaryButton' onPress={CloseButton}/>
    </View>
    <View style={{flexDirection:'row'}}>
      <CustomButton name="Blackout" onPress={Blackout}/>
      <CustomButton name="Flip+" onPress={Flip}/>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingHorizontal: 14,
  },
})
export default ControlSection