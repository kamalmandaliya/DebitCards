import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@theme';
module.exports = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  progressBarInfo: {
    fontSize: 13,
    color: Colors.black,
  },
  progressGreenStat: {
    fontWeight: '600',
    color: Colors.primary,
  },
  progressGreyStat: {
    color: Colors.text,
  },
  barContainer: {
    height: 15,
    width: '100%',
    flexDirection: 'column',
  },
  fullBar: {
    flex: 1,
    width: '100%',
    height: 15,
    borderRadius: 30,
    backgroundColor: Colors.progressBarBackground,
  },
  progressContainer: {
    flexDirection: 'row',
  },
  madeProgress1: {
    marginTop: -15,
    width: '90%',
    height: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Colors.primary,
  },
  madeProgress2: {
    marginTop: -15,
    marginLeft: -7,
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.primary,
  },
});
