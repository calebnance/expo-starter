import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// screens
import MoreScreen from '../screens/More';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="More"
      component={MoreScreen}
      options={{
        headerStyle: gStyle.navHeaderContainerStyle,
        headerTitleStyle: gStyle.navHeaderTitleStyle,
        title: 'More tab'
      }}
    />
  </Stack.Navigator>
);
