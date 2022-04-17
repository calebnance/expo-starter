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
      options={({ navigation }) => ({
        headerLeft: () => (
          <HeaderLeft
            icon={<SvgGithub />}
            onPress={() => navigation.navigate('ModalGitHub')}
          />
        ),
        headerRight: () => (
          <HeaderRight
            icon={<SvgMoreHorizontal />}
            onPress={() => navigation.navigate('ModalMoreOptions')}
          />
        ),
        headerStyle: gStyle.navHeaderContainerStyle,
        headerTitleStyle: gStyle.navHeaderTitleStyle,
        title: 'More'
      })}
    />
  </Stack.Navigator>
);
