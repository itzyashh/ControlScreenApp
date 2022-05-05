/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CustomHeader from './src/components/CustomHeader';
import SceneSection from './src/components/SceneSection';




const App= () => {
  

  return (
    <SafeAreaView >
     <CustomHeader heading="Shade Control" subtitle="Living Room"/>
     <SceneSection title="SCENES"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex:1,
}
});

export default App;
