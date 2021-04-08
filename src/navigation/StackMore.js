import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// screens
import MoreScreen from '../screens/More';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

// icons
import SvgGithub from '../icons/Svg.Github';
import SvgMoreHorizontal from '../icons/Svg.MoreHorizontal';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="More"
      component={MoreScreen}
      options={{
        headerLeft: () => <HeaderLeft icon={<SvgGithub />} />,
        headerRight: () => <HeaderRight icon={<SvgMoreHorizontal />} />,
        headerStyle: gStyle.navHeaderContainerStyle,
        headerTitleStyle: gStyle.navHeaderTitleStyle,
        title: 'More'
      }}
    />
  </Stack.Navigator>
);
