import {StyleSheet} from 'react-native';
import {Colors} from '@theme';
export default StyleSheet.create({
  headerContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    marginBottom: 2,
  },
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
  },
  headerLogo: {
    height: 25,
    width: 26,
  },
  headerText: {
    textAlignVertical: 'bottom',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 24,
    fontWeight: '900',
    color: Colors.white,
  },
  headerInfoBlock: {
    flexDirection: 'column',
    paddingTop: 24,
  },
  headerInfoText: {
    textAlignVertical: 'bottom',
    alignItems: 'flex-start',
    fontSize: 14,
    color: Colors.white,
  },
  headerInfo: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCurrencyType: {
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  headerCurrencyTypeText: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.white,
  },
  headerCurrencyText: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: '900',
    color: Colors.white,
  },
  container: {
    flex: 1,
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
});
