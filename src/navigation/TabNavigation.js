import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, themes } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMore from './StackMore';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';

// context
import Context from '../context';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { tabBarStyle } = themes[theme];

  return (
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
        tabBarStyle
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
}

export default TabNavigation;
