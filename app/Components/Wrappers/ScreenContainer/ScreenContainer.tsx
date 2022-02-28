import * as React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './ScreenContainer.Styles';
const ScreenContainer = ({children}: any) => (
  <>
    <SafeAreaView style={styles.iOSstatusBarSkip}></SafeAreaView>
    <SafeAreaView style={styles.pageStyle}>{children}</SafeAreaView>
  </>
);
export default ScreenContainer;
