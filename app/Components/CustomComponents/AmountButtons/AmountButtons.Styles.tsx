import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@theme';
module.exports = StyleSheet.create({
  amountButtonBlock: {
    margin: -12,
  },
  suggestionButton: {
    flex: 1,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    borderRadius: 4,
    backgroundColor: Colors.primaryBluredButton,
  },
  suggestionButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
});
