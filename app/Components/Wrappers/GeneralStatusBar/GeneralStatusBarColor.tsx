import * as React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {Colors} from '@theme';
import styles from './GeneralStatusBarColor.Styles';
const GeneralStatusBarColor = ({children}: any) => (
  <SafeAreaView style={styles.pageStyle}>
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={Colors.secondary} />
    </View>
    {children}
  </SafeAreaView>
);
export default GeneralStatusBarColor;
