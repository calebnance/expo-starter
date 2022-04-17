import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
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

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  }
});

export default () => {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { navHeaderStyle } = themes[theme];

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
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
            cardStyleInterpolator: forFade,
            gestureEnabled: false,
            headerShown: false,
            presentation: 'transparentModal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
