import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, gStyle, themes } from '../constants';

// tab navigation
import TabNavigation from './TabNavigation';

// modals
import ModalGitHub from '../screens/ModalGitHub';
import ModalMoreOptions from '../screens/ModalMoreOptions';

// components
import HeaderLeft from '../components/HeaderLeft';

// icons
import SvgChevronLeft from '../icons/Svg.ChevronLeft';

// context
import Context from '../context';

const Stack = createNativeStackNavigator();

function RootStack() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { navHeaderStyle } = themes[theme];

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          presentation: 'modal'
        }}
      >
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="ModalGitHub"
          component={ModalGitHub}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderLeft
                icon={<SvgChevronLeft fill={colors.white} />}
                onPress={() => navigation.goBack()}
              />
            ),
            headerStyle: navHeaderStyle,
            headerTitle: 'Modal',
            headerTitleStyle: gStyle.navHeaderTitleStyle
          })}
        />

        <Stack.Screen
          name="ModalMoreOptions"
          component={ModalMoreOptions}
          options={{
            animation: 'fade',
            gestureEnabled: false,
            headerShown: false,
            presentation: 'transparentModal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
