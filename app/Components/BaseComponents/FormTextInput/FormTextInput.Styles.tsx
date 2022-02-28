import {StyleSheet} from 'react-native';
import {Colors} from '@theme';
module.exports = StyleSheet.create({
  inputContainerStyle: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  withBorder: {
    borderWidth: 1,
    borderBottomColor: Colors.border,
    borderColor: Colors.border,
    borderRadius: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 24,
    fontWeight: '900',
    color: Colors.black,
  },
  iconContainerStyle: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  icons: {
    height: 22,
    width: 22,
  },
  leftIcon: {},
  rightIcon: {},
  titleStyle: {
    marginTop: 5,
    marginBottom: 5,
  },
});
