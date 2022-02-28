/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CardAction, DebitCard} from '@screens';
const Stack = createNativeStackNavigator();
const AuthStack: React.FC = ({navigation}: any) => {
  return (
    <Stack.Navigator
      initialRouteName="DebitCard"
      screenOptions={{
        headerShown: false,
        //header: ({ navigation, route, options, back }) => {
        //return <AuthHeader navigation={navigation} route={route} options={options} back={back}/>
        //},
      }}>
      <Stack.Screen
        name="DebitCard"
        component={DebitCard}
        options={{
          title: 'Debit Card',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CardAction"
        component={CardAction}
        options={{
          title: 'CardAction',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
