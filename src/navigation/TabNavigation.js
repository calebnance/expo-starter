import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, themes } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMore from './StackMore';
import PlusScreen from './StackPlus';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';
import SvgPlus from '../icons/Svg.Plus';

// components
import CustomTabBar from '../components/CustomTabBar';

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
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.itemActive,
        tabBarInactiveTintColor: colors.itemInactive,
        tabBarIcon: ({ color, focused }) => {
          let icon = <SvgHome fill={color} />;

          if (route.name === 'StackMore') {
            icon = <SvgMenu fill={color} />;
          } else if (route.name === 'Plus') {
            // custom large, blue, overlapping circle with plus icon
            const borderColor = focused ? colors.itemActive : 'transparent';

            icon = (
              <View
                style={[
                  styles.plusIconContainer,
                  {
                    backgroundColor: tabBarStyle.backgroundColor,
                    borderColor
                  }
                ]}
              >
                <SvgPlus fill={color} size={32} />
              </View>
            );
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
        name="Plus"
        component={PlusScreen}
        options={{
          tabBarLabel: ''
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

const styles = StyleSheet.create({
  plusIconContainer: {
    alignItems: 'center',
    borderRadius: 32,
    borderWidth: 1,
    elevation: 4,
    height: 64,
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    top: -32, // overlap by 50% of 64px (circle size)
    width: 64
  }
});

export default TabNavigation;
