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
import GroupControlSection from './src/section/GroupControlSection';
import SceneSection from './src/section/SceneSection';




const App= () => {
  

  return (
    <SafeAreaView >
     <CustomHeader heading="Shade Control" subtitle="Living Room"/>
     <SceneSection title="SCENES"/>
     <GroupControlSection title="GROUP CONTROL"/>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
}
});

export default App;
