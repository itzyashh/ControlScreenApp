import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import SceneSection from '../../section/SceneSection'
import GroupControlSection from '../../section/GroupControlSection'
import ControlSection from '../../section/ControlSection'

const ShadeControl = () => {
  return (
    <SafeAreaView >
     <CustomHeader heading="Shade Control" subtitle="Living Room"/>
     <SceneSection title="SCENES"/>
     <GroupControlSection title="GROUP CONTROLS"/>
     <ControlSection title="CONTROLS"/>
    </SafeAreaView>
  )
}

export default ShadeControl