import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMore from './StackMore';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: colors.itemActive,
      tabBarInactiveTintColor: colors.itemInactive,
      tabBarIcon: ({ color }) => {
        let icon = <SvgHome fill={color} />;

        if (route.name === 'StackMore') {
          icon = <SvgMenu fill={color} />;
        }

        return icon;
      },
      tabBarStyle: gStyle.navTabStyle
    })}
  >
    <Tab.Screen
      name="StackHome"
      component={StackHome}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <Tab.Screen
      name="StackMore"
      component={StackMore}
      options={{
        tabBarLabel: 'More'
      }}
    />
  </Tab.Navigator>
);
