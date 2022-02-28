/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@screens';
const Stack = createNativeStackNavigator();
const AuthStack: React.FC = ({navigation}: any) => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        //header: ({ navigation, route, options, back }) => {
        //return <AuthHeader navigation={navigation} route={route} options={options} back={back}/>
        //},
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
