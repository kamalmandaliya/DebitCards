import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './ProgressBar.Styles';

const ProgressBar = <Props, State>({...otherProps}: any) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.rowTitleText}>Debit card spending limit</Text>
        <Text style={styles.rowTitleText}>
          <Text style={styles.progressGreenStat}>$345 </Text>
          <Text style={styles.progressGreyStat}>| $5,000</Text>
        </Text>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.fullBar}></View>
        <View style={styles.progressContainer}>
          <View style={styles.madeProgress1}></View>
          <View style={styles.madeProgress2}></View>
        </View>
      </View>
    </View>
  );
};
export default ProgressBar;
