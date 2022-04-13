import {
  Dimensions,
  FlatList,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Orientation from 'react-native-orientation-locker';
import LeftSideMenu from './StatusScreenFiles/LeftSideMenu';
import RightSideMenu from './StatusScreenFiles/RightSideMenu';
import CenteredView from './StatusScreenFiles/CenteredView';
import LinearGradient from 'react-native-linear-gradient';

// LogBox.ignoreAllLogs();
export default function App() {
  // useEffect(() => {
  //   Orientation.lockToLandscape();
  // }, []);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <LeftSideMenu />
        <View style={{marginHorizontal: 20}}>
          <CenteredView />
        </View>
        <RightSideMenu />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 50,
    borderRadius: 5,
    paddingTop: 30,
  },
});
