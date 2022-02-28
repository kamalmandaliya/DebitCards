import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@theme';
module.exports = StyleSheet.create({
  rowContainer: {
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
  },
  rowDetailsContainer: {
    flex: 1,
    paddingLeft: 12,
    flexDirection: 'column',
  },
  rowTitleText: {
    color: Colors.secondaryText,
  },
  rowDescriptionText: {
    color: Colors.text,
  },
  switch: {
    color: Colors.primary,
  },
});
