import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@theme';
const {width} = Dimensions.get('window');
module.exports = StyleSheet.create({
  cardView: {
    marginTop: -100,
  },
  cardToggleBox: {
    flexDirection: 'row',
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 8,
    marginBottom: -12,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingBottom: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  eye: {
    height: 16,
    width: 16,
  },
  toggleText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '900',
    color: Colors.primary,
  },
  card: {
    flexDirection: 'column',
    width: '100%',
    minHeight: (width - 48) * 0.6,
    padding: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  aspireLogo: {
    alignSelf: 'flex-end',
    height: 21,
    width: 74,
    resizeMode: 'contain',
  },
  cardDetailsContainer: {
    marginTop: 24,
  },
  cardHolderName: {
    marginBottom: 24,
    marginLeft: 6,
    fontSize: 22,
    fontWeight: '900',
    color: Colors.white,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  cardNumberBlock: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 24,
    color: Colors.white,
  },
  cardInfoBlock: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  cardInfoText: {
    fontSize: 13,
    fontWeight: '600',
    marginRight: 32,
    color: Colors.white,
  },
  visaLogo: {
    alignSelf: 'flex-end',
    height: 24,
    width: 59,
    resizeMode: 'contain',
  },
});
