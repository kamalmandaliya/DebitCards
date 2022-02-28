import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '@assets';
import {CardStack} from '@stacks';
import {Colors} from '@theme';
import styles, {tabBarStyle, tabBarLabelStyle} from './BottomTab.Styles';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="CardStack"
      screenOptions={{
        header: ({navigation, route, options}) => {
          return <></>;
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textBlur,
        tabBarActiveBackgroundColor: Colors.white,
        tabBarStyle: tabBarStyle,
        tabBarItemStyle: {},
        tabBarLabelStyle: tabBarLabelStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={CardStack}
        options={{
          tabBarLabel: 'Home',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : Colors.textBlur,
                },
              ]}
              source={Icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Debit Card"
        component={CardStack}
        options={{
          tabBarLabel: 'Debit Card',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : Colors.textBlur,
                },
              ]}
              source={Icons.card}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={CardStack}
        options={{
          tabBarLabel: 'Payments',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : Colors.textBlur,
                },
              ]}
              source={Icons.payments}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={CardStack}
        options={{
          tabBarLabel: 'Credit',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : Colors.textBlur,
                },
              ]}
              source={Icons.credit}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CardStack}
        options={{
          tabBarLabel: 'Profile',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabIcon,
                {
                  tintColor: focused ? Colors.primary : Colors.textBlur,
                },
              ]}
              source={Icons.profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
