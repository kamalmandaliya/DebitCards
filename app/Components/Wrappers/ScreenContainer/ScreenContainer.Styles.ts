import {StyleSheet} from 'react-native';
import {Colors} from '@theme';
export default StyleSheet.create({
  iOSstatusBarSkip: {
    flex: 0, //To resolve the issue with statusbar color
  },
  pageStyle: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});
