import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthStack} from '@stacks';
import {BottomTab} from '@tabs';
import {useAppState, useAppDispatch} from '@context';

const Tab = createBottomTabNavigator();
function AppNavigator() {
  const dispatch = useAppDispatch();
  const {userToken} = useAppState();
  return (
    <NavigationContainer>
      {userToken != null ? <AuthStack /> : <BottomTab />}
    </NavigationContainer>
  );
}

export default AppNavigator;
