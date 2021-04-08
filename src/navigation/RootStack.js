import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

// stacks
import StackHome from './StackHome';
import StackMore from './StackMore';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon = <SvgHome fill={color} />;

          if (route.name === 'StackMore') {
            icon = <SvgMenu fill={color} />;
          }

          return icon;
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.itemActive,
        inactiveTintColor: colors.itemInactive,
        style: gStyle.navTabStyle
      }}
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
  </NavigationContainer>
);
