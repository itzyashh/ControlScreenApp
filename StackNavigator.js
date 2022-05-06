import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShadeControl from './src/screens/ShadeControl'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Shade Control" component={ShadeControl} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f5f3f2',
          },
          headerTintColor: '',headerShadowVisible:false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    
  )
}

export default StackNavigator

