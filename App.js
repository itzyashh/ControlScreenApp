/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import ShadeControl from './src/screens/ShadeControl';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';




const App= () => {
  

  return (
    <NavigationContainer>

    <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
}
});

export default App;
