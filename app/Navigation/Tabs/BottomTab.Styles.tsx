import {StyleSheet} from 'react-native';
import {Colors} from '@theme';
export default StyleSheet.create({
  tabIcon: {
    height: 24,
    width: 24,
  },
});
export const tabBarStyle = {
  height: 60,
  backgroundColor: Colors.white,
  shadowColor: Colors.textBlur,
  shadowOffset: {width: 0, height: -5},
  shadowOpacity: 1,
  shadowRadius: 25,
  elevation: 20,
};

export const tabBarLabelStyle = {
  marginBottom: 15,
  fontSize: 9,
  fontWeight: 'bold',
};
