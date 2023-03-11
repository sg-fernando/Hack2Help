import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';


import Home from './Home';
import Following from './Following'

const Tab = createBottomTabNavigator();

const AppScreens = () => {
    const color = COLORS.pastel_pink;
    const size = SIZES.font;
  return (
    <Tab.Navigator
        screenOptions={{ headerShown: false}}
        initialRouteName = "Home"
    >
      <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Events',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
                }}
        />
      <Tab.Screen name="Following" component={Following} options={{
                tabBarLabel: 'Following',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people" color={color} size={size} />
                ),
                }}
        />
    </Tab.Navigator>
  );
}

export default AppScreens;