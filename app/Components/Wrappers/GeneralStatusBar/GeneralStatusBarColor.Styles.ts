import {StyleSheet, Platform, StatusBar} from 'react-native';
import {Colors} from '@theme';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  pageStyle: {
    flex: 1,
  },
});
